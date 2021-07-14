import React, { useEffect ,useState} from "react";
import Axios from "axios";

function SignIn(props) {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [loginStatus, setloginStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3001/signin", {
      email: email,
      password: password,
    }).then((response) => {
      console.log(response);
      if (response.data.message) {
        setloginStatus(response.data.message);
      } else {
        setloginStatus(response.data[0]);
        console.log(response);
      props.history.push('/dashboard')
      }
    });
    /*.catch((err) => {
    console.log("Error" , err);
  })
  */
  };

  Axios.defaults.withCredentials = true;
  useEffect(() => {
    Axios.get("http://localhost:3001/signin").then((response) => {
      console.log(response);
    });
  }, []);

  return (
    <form className="form  make-center" onSubmit={handleSubmit}>
      <h2 className="display-4">Sign In</h2>
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

      <button type="submit" className="btn btn-primary">
        Sign In
      </button>
    </form>
  );
}

export default SignIn;
