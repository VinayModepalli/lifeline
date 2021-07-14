import React, { Component , useState, useEffect} from "react";
import Axios from "axios";
import { Tabs, Tab } from 'react-bootstrap';

function Donor(props) {
  const [data, setdata] = useState([])
  const [requests, setrequests] = useState([])
  const [x, setx] = useState([])
  const userdata = props.userdata.data.user[0];
  console.log("userdata in donor",userdata)
  const mymail = userdata.email;
  const [key, setKey] = useState('home');


  const respondrequest = (id, answer) => {
    Axios.post("http://localhost:3001/respondrequests", {
      id: id,
      response: answer,
      
    }).then((response) => {
      console.log(response);
      requestList();
        //setrequestButtonClass(requestButtonClass+' disabled')
      //props.history.push("/signin");
    });
  }


  const requestList = () => {
    console.log("request List for donor page",mymail)
    Axios.post("http://localhost:3001/dviewrequests", {
      email: mymail,
    }).then((response) => {
        console.log("called requestList")
      console.log(response);
      setrequests(response.data)
      
    }).catch(err=>console.log(err));
  };

  return (

    <div className="container mybox-ash">
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
      >

          <Tab eventKey="home" title="Reqests for me">
          <button className="btn btn-warning" onClick={()=>requestList()}>Click to See Requests for me</button>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">recipient</th>
              <th scope="col">Donor</th>
              <th scope="col">Response</th>
              <th scope="col">Response</th>
              
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
                      <td onClick={()=>respondrequest(row.id, 1)}><button className="btn btn-success">Accept</button></td>
                      <td onClick={()=>respondrequest(row.id, 2)}><button className="btn btn-danger">Decline</button></td>
                  
                    </tr>)
                  ) : (<p></p>)
            }
          </tbody>
        </table>
          </Tab>
          <Tab eventKey="profile" title="Feedback">
          
          </Tab>
          
      </Tabs>
      
    </div>
  );
}
 
export default Donor;