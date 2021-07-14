import React, { Component } from "react";
//import { useHistory } from "react-router-dom";
import "../Usercard.css";

class Profile extends Component {
  render() {
    const userdata = this.props.userdata.data.user[0];
    console.log(userdata);

    //const user = userdata.data.user[0];
    const { email, fname, age, bloodgroup, gender,
    bloodpressure, bhdisease, diabetes, pulse, tatoo, allergy, eligible, phone, location, trustfactor } = userdata;

    

    return (
      <div className="container profile-box">
        <div className="row">
          <div className="col-4">
            <section>
              <div className="container">
                <div className="row">
                  <div className="col">
                    <div className="card profile-card-3">
                      <div className="background-block">
                        <img
                          src="https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                          alt="profile-sample1"
                          class="background"
                        />
                      </div>
                      <div className="profile-thumb-block">
                        <img
                          src="https://cdn2.iconfinder.com/data/icons/avatars-99/62/avatar-370-456322-512.png"
                          alt="profile-image"
                          class="profile"
                        />
                      </div>
                      <div className="card-content">
                        <h2 className="">
                          {fname}
                          <small>Donor Eligibility: <strong>{eligible === 1 ? (<span>YES</span>) : (<span>NO</span>) }</strong></small>
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="col-8 ">
            <h1 className="display-5">Profile</h1>
            <div className="row">
              <div className="col profile-data">
              <p className="">Name: <span className="bebold">{fname}</span></p>  
              <p className="">Email: <span className="bebold"><code>{email}</code></span></p> 
              <p className="">Age: <span className="bebold">{age}</span></p> 
              <p className="">Gender: <span className="bebold">{gender}</span></p> 
              <p className="">Phone: <span className="bebold">{phone}</span></p> 
              <p className="">Location: <span className="bebold">{location}</span></p> 
              <p className="">Trust Factor: <span className="bebold">{trustfactor}</span></p> 
              
               
              
              </div>
              <div className="col profile-data">
              <p className="">Blood Group: <span className="bebold"><code>{bloodgroup}</code></span></p> 
              <p className="">Blood Pressure: <span className="bebold">{bloodpressure}</span></p>
              <p className="">Blood/Heart Disease: <span className="bebold">{bhdisease}</span></p> 
              <p className="">Diabetes: <span className="bebold">{diabetes}</span></p> 
              <p className="">Pulse: <span className="bebold">{pulse}</span></p>
              <p className="">Tatoo: <span className="bebold">{tatoo}</span></p>
              <p className="">Allergy: <span className="bebold">{allergy}</span></p>
              
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
