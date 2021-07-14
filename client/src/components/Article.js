import React, { Component } from 'react';
//import Navbar from "../components/Navbar";
import {Link} from 'react-router-dom'

class Article extends Component {
    state = {
        title: [
            "Why should people donate Blood?",
            "What happens when I give blood?",
            "Who can give blood? How often?",
            "Who should not give blood?"
        ],
        img: [
            "https://nationalinterest.org/sites/default/files/styles/desktop__1260_/public/2020-12-07T153626Z_2145084634_RC2FIK9KDQOX_RTRMADP_3_HEALTH-CORONAVIRUS-SWISS-BLOOD.JPG.jpg?itok=xbTheamO",
            "https://economictimes.indiatimes.com/thumb/msid-64587270,width-1200,height-900,resizemode-4,imgsize-185741/blood-donation_thinkstockphotos.jpg?from=mdr",
            "https://images.unsplash.com/photo-1615461066841-6116e61058f4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Ymxvb2QlMjBkb25hdGlvbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
            "https://www.fix.com/assets/content/19953/donate-blood-open-graph.png"

        ],
        excerpt:[
            "Safe blood saves lives. Blood is needed by women with complications during pregnancy and childbirth, children with severe anaemia, often resulting from malaria or malnutrition, accident victims and surgical and cancer patients. <br>There is a constant need for a regular supply of blood because it can be stored only for a limited period of time before use. Regular blood donation by a sufficient number of healthy people is needed to ensure that blood will always be available whenever and wherever it is needed. <br> Blood is the most precious gift that anyone can give to another person – the gift of life. A decision to donate your blood can save a life, or even several if your blood is separated into its components – red cells, platelets and plasma – which can be used individually for patients with specific conditions.",
            "Whether you are a first-time or regular donor, the blood service must make sure that you will come to no harm by donating blood. This includes checking your blood to be sure it will be safe for the person who receives it. Before you give blood, you will be asked questions about your medical history, including any medication you are taking, and about your current health and lifestyle. You may also be asked about recent travel; for example, if you live in a country where there is no malaria, you may be asked whether you have recently visited a tropical country. These questions will be asked only to safeguard your own health and the health of the person receiving your blood. You will be told whether you are eligible to give blood and, if not, whether you may be able to donate blood in the future. Any personal information that you give will be kept confidential and will not be used for any other purpose. <br> It is very important to be truthful about any reasons why your blood might not be suitable. Although blood is always tested for infections that can be transmitted by transfusion, such as HIV, hepatitis B and C, and syphilis, a test may not be able to detect a very recent infection. This means that even though the blood may test negative for a particular infection, it might still infect a patient receiving a blood transfusion. <br>After answering the questions you will also be given a brief medical examination that may include checking your pulse and blood pressure and ensuring that your weight meets a certain minimum. A drop of blood will then be taken from your fingertip to check that giving blood will not make you anaemic. Your health is very important to the blood transfusion service and blood will not be taken unless you can safely give a donation that day. <br>Donating blood is very simple. You will be made as comfortable as possible, usually in a special chair or on a bed. The area inside one of your elbows will be cleaned with an antiseptic solution before a trained health worker inserts a sterile needle, connected to a blood collection bag, into your vein. It usually takes about 10 minutes to donate blood. <br>After resting for 10 or 15 minutes and taking some refreshment, you will be able to return to your normal activities, although you should avoid strenuous activity for the rest of the day. You should drink plenty of fluids over the next 24 hours.",
            "The criteria for donor selection varies from country to country, but blood can be donated by most people who are healthy and do not have an infection that can be transmitted through their blood. <br>The age at which people are eligible to give blood varies, but is commonly between the ages of 17 and 65. Some countries accept donations from people from the age of 16 and extend the upper age limit beyond 65 years. <br>Healthy adults can give blood regularly – at least twice a year. Your local blood service can tell you how frequently you can give blood.",
            "The blood service is concerned with the welfare of both the blood donor and the recipient (patient). Donors are often asked not to donate blood for a period of time in the interests of their safety and/or that of the blood supply. <br>You should not give blood if your own health might suffer as a result. The first concern of the blood service is to ensure that blood donation does no harm to the blood donor. You should not donate blood if:<ul><li>You are feeling unwell</li><li>You are anaemic</li><li>You are pregnant, have been pregnant within the last year or are breastfeeding</li><li>You have certain medical conditions, which might make you an unsuitable donor </li><li>You are taking certain medications, such as antibiotics.</li><li>You may be able to donate blood at a later time. In some cases, however, in order to protect your own health you will not be able to donate blood.</li></ul> You should not donate blood if it might cause harm to the patient who receives it. Blood can transmit life-threatening infections to patients who receive blood transfusions. You should not donate blood if:<br/><ul><li>You have or may recently have contracted a sexually transmitted disease, such as HIV or syphilis, that can be passed on to a patient who receives your blood</li><li>Your lifestyle puts you at risk of contracting an infection that can be transmitted through your blood: for example, if you have more than one sexual partner</li><li>You have ever injected recreational, non-medicinal drugs</li><li>You have recently had a tattoo, skin scarification or ear or body piercing – your local blood service can tell you how long you must wait before giving blood</li><li>You have had sexual contact with anyone in the above categories.</li></ul>"
        ]
    }
    componentDidMount(){
        console.log(this.props)
        let id = this.props.match.params.post_id;
        this.setState({
            id
        })
    }
    render() { 
        const id = this.state.id;
        return ( 
            <div className="article">
                <p><Link to="/articles">Go Back</Link></p>
                <h1>{this.state.title[id]}</h1>
                <img src={this.state.img[id]} alt="blood-donation" />
                <p>{this.state.excerpt[id]}</p>
            </div>
         );
    }
}
 
export default Article;