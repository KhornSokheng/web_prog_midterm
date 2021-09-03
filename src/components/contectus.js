import React from "react";
import CallIcon from "@material-ui/icons/Call";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import "../css/contectus.scss";

export default function contectus() {
  return (
    <div className="contectus">
      <h1>Contectus</h1>
      <div className="container">
        <div className="left">
          <div className="phone">
            <CallIcon />
            <a href=".#">02934567845</a>
          </div>
          <div className="ms">
            <ChatBubbleOutlineIcon />
            <a href=".#">62310021@go.buu.ac.th</a>
          </div>
        </div>
        <div className="right">
          <form>
            <div className="E_Email">
              <input
                placeholder="Email"
                type="text"
                id="Email"
                name="Email"
                className="control"
              ></input>
            </div>
            <div className="E_name">
              <input
                placeholder="name"
                type="text"
                id="Name"
                name="Name"
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
              <button type="submid" className="btn_send">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}