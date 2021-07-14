import React, { useState } from "react";
import Axios from "axios";

function SignUp(props) {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [fname, setfname] = useState("");
  const [age, setage] = useState("");
  const [bloodgroup, setbloodgroup] = useState("");
  const [gender, setgender] = useState(-1);
  const [bloodpressure, setbloodpressure] = useState(-1);
  const [bhdisease, setbhdisease] = useState(-1);
  const [diabetes, setdiabetes] = useState(-1);
  const [pulse, setpulse] = useState(-1);
  const [tatoo, settatoo] = useState(-1);
  const [allergy, setallergy] = useState(-1);
  const [phone, setphone] = useState(-1);
  const [location, setlocation] = useState(-1);

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3001/signup", {
      email: email,
      password: password,
      fname: fname,
      age: age,
      bloodgroup: bloodgroup,
      gender: gender,
      bloodpressure: bloodpressure,
      bhdisease: bhdisease,
      diabetes: diabetes,
      pulse: pulse,
      tatoo: tatoo,
      allergy: allergy,
      phone: phone,
      location: location
    }).then((response) => {
      console.log(response);
      props.history.push("/signin");
    });
    /*.catch((err) => {
      console.log("Error" , err);
    })
    */
  };

  Axios.defaults.withCredentials = true;
  return (
    <form className="form  make-center" onSubmit={handleSubmit}>
      <h2 className="display-4">Sign Up</h2>
      <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label text-muted">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          aria-describedby="emailHelp"
          onChange={(e) => {
            setemail(e.target.value);
          }}
        />
      </div>
      <div className="mb-3">
        <label for="exampleInputPassword1" className="form-label text-muted">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          name="password"
          onChange={(e) => {
            setpassword(e.target.value);
          }}
        />
      </div>
      <div className="mb-3">
        <label for="name" className="form-label text-muted">
          Name
        </label>
        <input
          type="name"
          className="form-control"
          id="fname"
          name="fname"
          onChange={(e) => {
            setfname(e.target.value);
          }}
        />
      </div>
      <div className="mb-3">
        <label for="age" className="form-label text-muted">
          Age
        </label>
        <input
          type="number"
          className="form-control"
          id="age"
          name="age"
          onChange={(e) => {
            setage(e.target.value);
          }}
        />
      </div>
      <div className="mb-3">
        <label for="bloodgroup" className="form-label text-muted">
          Blood Group
        </label>
        <select
          className="form-control"
          value={bloodgroup}
          onChange={(e) => {
            setbloodgroup(e.target.value);
          }}
          id="bloodgroup"
          name="bloodgroup"
        >
          <option value="O+">O+</option>
          <option value="O-">O-</option>
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
        </select>
      </div>
      {/*Gender */}
      <div className="mb-3">
        <label for="gender" className="form-label text-muted">
          Gender
        </label>
        <select
          className="form-control"
          value={gender}
          onChange={(e) => {
            setgender(e.target.value);
          }}
          id="gender"
          name="gender"
        >
          <option value={-1}>Select</option>
          <option value="M">Male</option>
          <option value="F">Female</option>
        </select>
      </div>

      {/*Location */}
      <div className="mb-3">
        <label for="location" className="form-label text-muted">
          Location
        </label>
        <select
          className="form-control"
          value={location}
          onChange={(e) => {
            setlocation(e.target.value);
          }}
          id="location"
          name="location"
        >
          <option value={-1}>Select</option>
          <option value="Tadepalligudem">Tadepalligudem</option>
          <option value="Rajahmundry">Rajahmundry</option>
          <option value="Tanuku">Tanuku</option>
          <option value="Eluru">Eluru</option>
          <option value="Bhimavaram">Bhimavaram</option>
          
          
        </select>
      </div>


      {/*Blood Pressure */}
      <div className="mb-3">
        <label for="bloodpressure" className="form-label text-muted">
          Blood Pressure
        </label>
        <select
          className="form-control"
          value={bloodpressure}
          onChange={(e) => {
            setbloodpressure(e.target.value);
          }}
          id="bloodpressure"
          name="bloodpressure"
        >
          <option value={-1}>Select</option>
          <option value='Low'>Low</option>
          <option value='Normal'>Normal</option>
          <option value='High'>High</option>
        </select>
      </div>

      {/*BH Disease */}
      <div className="mb-3">
        <label for="bhdisease" className="form-label text-muted">
          Blood & Heart Diseases
        </label>
        <select
          className="form-control"
          value={bhdisease}
          onChange={(e) => {
            setbhdisease(e.target.value);
          }}
          id="bhdisease"
          name="bhdisease"
        >
          <option value={-1}>Select</option>
          <option value="No">No</option>
          <option value="Yes">Yes</option>
        </select>
      </div>

      {/*Diabetes */}
      <div className="mb-3">
        <label for="diabetes" className="form-label text-muted">
        Diabetes
        </label>
        <select
          className="form-control"
          value={diabetes}
          onChange={(e) => {
            setdiabetes(e.target.value);
          }}
          id="diabetes"
          name="diabetes"
        >
          <option value={-1}>Select</option>
          <option value='No'>No</option>
          <option value='Mild'>Mild</option>
          <option value='Heavy'>heavy</option>
        </select>
      </div>


      {/*Pulse */}
      <div className="mb-3">
        <label for="pulse" className="form-label text-muted">
        Pulse
        </label>
        <select
          className="form-control"
          value={pulse}
          onChange={(e) => {
            setpulse(e.target.value);
          }}
          id="pulse"
          name="pulse"
        >
          <option value={-1}>Select</option>
          <option value='Low'>Low</option>
          <option value='Normal'>Normal</option>
          <option value='High'>High</option>
        </select>
      </div>


      {/*Tatoo */}
      <div className="mb-3">
        <label for="tatoo" className="form-label text-muted">
        Tatoo
        </label>
        <select
          className="form-control"
          value={tatoo}
          onChange={(e) => {
            settatoo(e.target.value);
          }}
          id="tatoo"
          name="tatoo"
        >
          <option value={-1}>Select</option>
          <option value='No'>No</option>
          <option value='Yes'>Yes</option>
        </select>
      </div>


      {/*Allergy */}
      <div className="mb-3">
        <label for="allergy" className="form-label text-muted">
        Allergy
        </label>
        <select
          className="form-control"
          value={allergy}
          onChange={(e) => {
            setallergy(e.target.value);
          }}
          id="allergy"
          name="allergy"
        >
          <option value={-1}>Select</option>
          <option value='No'>No</option>
          <option value='Yes'>Yes</option>
        </select>
      </div>

      <div className="mb-3">
        <label for="phone" className="form-label text-muted">
          Phone
        </label>
        <input
          type="text"
          className="form-control"
          id="phone"
          name="phone"
          onChange={(e) => {
            setphone(e.target.value);
          }}
        />
      </div>
      




      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default SignUp;
