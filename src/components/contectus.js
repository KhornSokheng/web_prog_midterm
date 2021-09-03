import React from "react";
import CallIcon from "@material-ui/icons/Call";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import PersonPinCircleIcon from '@material-ui/icons/PersonPinCircle';
import FacebookIcon from '@material-ui/icons/Facebook';
import "../css/contectus.scss";

export default function contectus() {
  return (
    <div className="contectus">
      <h1>Contact Us</h1>
      <div className="container">
        <div className="left">
            {/* <h2>Keep in Touch</h2> */}
            <div className="facebook">
            <FacebookIcon className="myIcon" />
            <a href=".#">Group 2 </a>
          </div>
          <div className="phone">
            <CallIcon className="myIcon" />
            <a href=".#">02934567845</a>
          </div>
          <div className="mail">
            <ChatBubbleOutlineIcon className="myIcon" />
            <a href=".#">g2@gmail.com</a>
          </div>
          <div className="address">
            <PersonPinCircleIcon className="myIcon" />
            <a href=".#">BUU Chan</a>
          </div>
          
        </div>
        <div className="right">
            {/* <h2>Send Us a Message</h2> */}
          <form>
          <div className="E_name">
              <input
                placeholder="Name*"
                type="text"
                id="Name"
                name="Name"
                className="control"
              ></input>
            </div>
            <div className="E_Email">
              <input
                placeholder="Email*"
                type="text"
                id="Email"
                name="Email"
                className="control"
              ></input>
            </div>
            
            <div className="E_subject">
              <input
                placeholder="Subject*"
                type="text"
                id="subject"
                name="Subject"
                className="control"
              ></input>
            </div>
            <div className="E_phone">
              <input
                placeholder="phone*"
                type="text"
                id="phone"
                name="phone"
                className="control"
              ></input>
            </div>
            <div className="E_text">
              <textarea
                name="message"
                id="message"
                className="control"
                rows="6"
                placeholder="Your Message ..."
              ></textarea>
            </div>
            <div className="b_send">
              <button type="submit" className="btn_send">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );

}


