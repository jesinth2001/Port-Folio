import apiRequest from "./apiRequest"
import "./css/contact.css"
import {FaUserAlt,FaEnvelope} from "react-icons/fa"

const Contact = () => {

  const Api_url="http://localhost:3500/data"

  const handleSubmit = async () => {

    const name=document.getElementById('name').value
    const mail=document.getElementById('mail').value
    const msg=document.getElementById('msg').value
    const send={name:name,mail:mail,Message:msg}
    const postOptions={
      method:'POST',
      headers:{
        'Content-Type': 'application/json'},
      body:JSON.stringify(send)
    }
    const submit= await apiRequest(Api_url,postOptions)
    console.log(submit)
    
  }
  return (
    <div className="contact-content">
    <div className="contact-box">
     <h3>contact information</h3>
     <div className="contact-info">

        <div className="inner-box">
          <div><span>Country:</span><span>India</span></div>
          <div><span>City :</span><span>Madurai</span></div>
          <div><span>Street:</span><span>Anna Nagar</span></div>
        </div>

        <div className="inner-box">
          <div><span>E-mail:</span><span>None</span></div>
          <div><span>Facebook</span><span>None</span></div>
          <div><span>Twitter</span><span>None</span></div>
        </div>

        <div className="inner-box">
          <div><span>Whatsapp</span><span>8883 94 8883</span></div>
          <div><span>Personal</span><span>9344 39 9421</span></div>
          <div><span>Home</span><span>9942 32 1103</span></div>
        </div>

    </div>
    
    </div>
    
    <h3 className="form-title">Get in touch</h3>
    <div className="form">
        <div className="input-box">
            <div>
            <span><FaUserAlt></FaUserAlt>
            </span><input type="text" placeholder="Name" id="name" autoComplete="off"></input>
            </div>
        
        </div>
        <div className="input-box">
            <div>
            <span>@</span><input type="text" id="mail" placeholder="mail" autoComplete="off"></input>
            </div>
        
        </div>
        <div className="Message-box">
            <div>
            <span><FaEnvelope></FaEnvelope></span><textarea placeholder="Message" id="msg"></textarea>
            </div>
      
        </div>
        <div className="submit-btn">
            <div>
            <button onClick={handleSubmit}>submit</button>
            </div> 
        
        </div>

    </div>

    </div>
  )
}

export default Contact