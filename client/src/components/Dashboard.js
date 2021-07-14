import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Axios from "axios";
import Profile from "./Profile";
import Donor from './Donor';
import Recipient from "./Recipient";

function Dashboard() {
  const [userdata, setuserdata] = useState([]);
  const [x, setx] = useState(0);
  const [role, setrole] = useState("-1");
  const navigate = (e) => {
    //e.preventDefault();
    //this.props.history.push('/url');
  };

  /*
    Axios.defaults.withCredentials = true;
    useEffect(() => {
    Axios.get("http://localhost:3001/signin").then((response) => {
      console.log(response);
      if (response.data.loggedIn) {
        setuserdata(response.data.user[0]);
        console.log(userdata);
      } else {
        navigate();
      }
    });
    }, []);

  */


  Axios.defaults.withCredentials = true;
  useEffect(() => {
    Axios.get("http://localhost:3001/signin").then((response) => {
      setuserdata(response);
    }).then(
        ()=>{console.log(userdata)}
    )
  }, [x]);
  return (
    <div>
      <Navbar />
      <h1 className="make-center">Dashboard</h1>
      
      <form className="dashboard-form make-center">
        <div className="mb-3">
          <label for="bloodgroup" className="form-label text-muted">
            Role
          </label>
          <select
            className="form-control"
            value={role}
            onChange={(e) => {
              setrole(e.target.value);
              setx(x+1);
              console.log(e.target.value)
            }}
            id="role"
            name="role"
          >
            <option value="-1">Select Role</option>
            <option value="0">Donor</option>
            <option value="1">Recipient</option>
          </select>
        </div>
      </form>
      <div className="container">
          {role === "0" ?
            (
                <div>
                    <Profile userdata={userdata} />
                    <Donor userdata={userdata} />
                </div>
            )  : role === "1" ? 
                (
                    <div>
                        <Profile userdata={userdata} />
                        <Recipient userdata={userdata} />
                    </div>
                )   :
                (
                    <div></div>
                )
        }
      </div>
      <div><h6 className="make-center">Made with Love</h6></div>
    </div>
  );
}

export default Dashboard;
