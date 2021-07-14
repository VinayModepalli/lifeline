const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const bcrypt = require("bcrypt");
const saltRounds = 10;

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
    session({
        key: "userId",
        secret: "hello",
        resave: true,
        saveUninitialized: true,
        rolling: true,
        cookie: {
            httpOnly: true,
            maxAge: 1*60*60*1000
            //expires: 60 * 60 * 24 * 60
        },
    })
);


const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "Sql@laptop",
  database: "lifeline",
});


/*Sign Up*/
app.post("/signup", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const fname = req.body.fname;
  const age = req.body.age;
  const bloodgroup = req.body.bloodgroup;
  const gender = req.body.gender;
  const bloodpressure = req.body.bloodpressure;
  const bhdisease = req.body.bhdisease;
  const diabetes = req.body.diabetes;
  const pulse = req.body.pulse;
  const tatoo = req.body.tatoo;
  const allergy = req.body.allergy;
  const eligible = 1;
  const phone = req.body.phone;
  const location = req.body.location;

  bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) {
      console.log(err);
    }
    db.query(
      "INSERT INTO users (email, password, fname, age, bloodgroup, trustfactor, gender, bloodpressure, bhdisease, diabetes, pulse, tatoo, allergy, eligible, phone, location) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);",
      [email, hash, fname, age, bloodgroup, 0, gender, bloodpressure, bhdisease, diabetes, pulse, tatoo, allergy, eligible, phone, location],
      (err, result) => {
        if (err) {
          res.send({ err: err });
        }
        if (result) {
          res.send(result);
        } else {
          res.send({ msg: "Something went wrong in Sign Up" });
        }
      }
    );
  });
});

app.get("/signin", (req, res) => {
    if(req.session.user) {
        res.send({loggedIn: true, user: req.session.user})
    } else{
        res.send({loggedIn: false})
    }
})

/*Sign In*/
app.post("/signin", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  db.query(
    "SELECT * FROM users WHERE email = ?;",
    email,
    (err, result) => {
      if (err) {
        console.log(err);
        res.send({ err: err });
      }

      if (result.length > 0) {
          bcrypt.compare(password, result[0].password, (error, response) => {
              if (response){
                  req.session.user = result;
                  console.log(req.session.user);
                res.send(result);
              } else{
                res.send({ message: "Wrong email/password combination" });
              }
          });
        
      } else {
        res.send({ message: "User Doesn't exist" });
      }
    }
  );
});


/* For Donors List */

app.post("/donors", (req, res) => {
  const email = req.body.email;

  db.query(
    "SELECT email, fname, gender, age, bloodgroup, location, trustfactor  FROM users where email <> ? and email not in (Select donor from requests where recipient = ?) ;",
    [email,email],
    (err, result) => {
      if (err) {
        console.log(err);
        res.send({ err: err });
      }
      console.log(result)
      if (result.length > 0) {
        req.session.user = result;
        console.log(req.session.user);
        res.send(result);
      } else {
        res.send({ message: "No data to present" });
      }
    }
  );
});


/*Create Request*/
app.post("/createrequest", (req, res) => {
  const recipient = req.body.recipient;
  const donor = req.body.donor;
  
    db.query(
      "INSERT INTO requests (recipient, donor, response, feedback) VALUES (?,?,?,?);",
      [recipient, donor, 0, 0],
      (err, result) => {
        if (err) {
          res.send({ err: err });
        }console.log('createrequest', result)
        if (result) {
          res.send(result);
        } else {
          res.send({ msg: "Something went wrong " });
        }
      }
    );
});


/* View Requests for Recipient */

app.post("/viewrequests", (req, res) => {
  const email = req.body.email;

  db.query(
    "SELECT id, recipient, donor, response, feedback  FROM requests where feedback = 0 and recipient = ?",
    [email],
    (err, result) => {
      if (err) {
        console.log(err);
        res.send({ err: err });
      }
      console.log("viewrequests",result)
      
      if (result.length > 0) {
        req.session.user = result;
        console.log(req.session.user);
        res.send(result);
      } else {
        res.send({ message: "No data to present" });
      }
      
    }
  );
});


/* View Requests for Donor */
app.post("/dviewrequests", (req, res) => {
  const email = req.body.email;

  db.query(
    "SELECT id, recipient, donor, response, feedback  FROM requests where response = 0 and donor = ?",
    [email],
    (err, result) => {
      if (err) {
        console.log(err);
        res.send({ err: err });
      }
      console.log("dviewrequests",result)
      
      if (result.length > 0) {
        req.session.user = result;
        console.log(req.session.user);
        res.send(result);
      } else {
        res.send({ message: "No data to present" });
      }
      
    }
  );
});

/* Respond to Requests by Donor */

app.post("/respondrequests", (req, res) => {
  const id = req.body.id;
  const response = req.body.response;

  db.query(
    "UPDATE requests SET response = ? WHERE id = ? ",
    [response, id],
    (err, result) => {
      if (err) {
        console.log(err);
        res.send({ err: err });
      }
      console.log("respondrequests",result)
      
      if (result.length > 0) {
        req.session.user = result;
        console.log(req.session.user);
        res.send(result);
      } else {
        res.send({ message: "No data to present" });
      }
      
    }
  );
});

















app.listen(3001, () => {
  console.log("running server");
});
