import React, { Component } from 'react';
import BloodHand from '../blood-hand.png';
import {Link} from 'react-router-dom'

class Home extends Component {
    render() { 
        return ( 
            <div className="container make-center">
                <div className="row home">
                    <div className="col">
                        <img className="blood-img" src={BloodHand} alt="blood-donation" />
                        <h1>Life Line</h1>
                        <code>An Initiative by students of Sasi Institute of Tech & Engg.</code>
                        <p><Link to='/articles'>Click to know more..</Link></p>
                    </div>
                    <div className="col">
                        <p>Get Started from here..</p>
                        <a href="/signin">
                        <button type="submit" class="btn btn-outline-primary big-btn">
                            Sign In
                        </button>
                        </a>
                        <p>Or</p>
                        <a href="/signup">
                        <button type="submit" class="btn btn-outline-info big-btn">
                            Sign Up
                        </button>
                        </a>
                    </div>
                </div>
            </div>
            
            
         );
    }
}
 
export default Home;