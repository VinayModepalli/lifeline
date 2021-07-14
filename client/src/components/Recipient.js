import React, { Component , useState, useEffect} from "react";
import Axios from "axios";
import { Tabs, Tab } from 'react-bootstrap';

function Recipient(props)  {
  const [data, setdata] = useState([])
  const [requests, setrequests] = useState([])
  const [x, setx] = useState([])
  const userdata = props.userdata.data.user[0];
  console.log(userdata)
  const mymail = userdata.email;
  const [key, setKey] = useState('home');

  const donorList = () => {
    Axios.post("http://localhost:3001/donors", {
      email: mymail,
    }).then((response) => {
        console.log("called donorList")
      console.log(response);
      setdata(response.data)
      
    });
  };
  const requestList = () => {
    Axios.post("http://localhost:3001/viewrequests", {
      email: mymail,
    }).then((response) => {
        console.log("called requestList")
      console.log("request list by recipient",response);
      setrequests(response.data)
      
    }).catch(err=>console.log("error requestlist",err));
  };

  const request = (donoremail) => {
      Axios.post("http://localhost:3001/createrequest", {
      recipient:mymail, 
      donor: donoremail,
      
    }).then((response) => {
      console.log(response);
      donorList();
        //setrequestButtonClass(requestButtonClass+' disabled')
      //props.history.push("/signin");
    });

  }
  const hello = (e) =>console.log(e)
  
    

    //const user = userdata.data.user[0];
    //const { bloodgroup, email } = userdata;
    
    return (

      <div className="container mybox-ash">
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
        >

            <Tab eventKey="home" title="Donors List">
            <button className="btn btn-warning" onClick={()=>donorList()}>Click to See Donors</button>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Gender</th>
              <th scope="col">Age</th>
              <th scope="col">Blood Group</th>
              <th scope="col">Location</th>
              <th scope="col">Trust Factor</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {
                data.length ?
                data.map(row => 
                    (<tr>
                      <td>{row.fname}</td>
                      <td>{row.gender}</td>
                      <td>{row.age}</td>
                      <td>{row.bloodgroup}</td>
                      <td>{row.location}</td>
                      <td>{row.trustfactor}</td>
                      <td ><button  className="btn btn-info" onClick={()=>request(row.email)}>Request</button></td>
                    </tr>)
                  ) : (<p></p>)
            }
          </tbody>
        </table>
            </Tab>
            <Tab eventKey="profile" title="Requests">
            <button className="btn btn-warning" onClick={()=>requestList()}>Click to See Requests</button>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">recipient</th>
              <th scope="col">Donor</th>
              <th scope="col">Response</th>
              <th scope="col">Feedback</th>
              <th scope="col">Feedback</th>
            </tr>
          </thead>
          <tbody>
            {
                requests.length ? 
                requests.map(row => 
                    (<tr>
                      <td>{row.id}</td>
                      <td>{row.recipient}</td>
                      <td>{row.donor}</td>
                      <td>{row.response === 0? <button className="btn btn-warning">Pending</button>:row.response === 1? <button className="btn btn-success">Accepted</button>:<button className="btn btn-danger">Declined</button>}</td>
                      <td>{row.feedback}</td>
                      <td ><button  className="btn btn-info" onClick={()=>request(row.email)}>Feedback</button></td>
                    </tr>)
                  ) : (<p></p>)
            }
          </tbody>
        </table>
            </Tab>
            
        </Tabs>
        
      </div>
    );

}

export default Recipient;
