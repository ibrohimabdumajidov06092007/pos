import React from "react";
import "./Contact.css";

export default function Contact() {


  return (
    <>
      <div className="container ol">
        <h1 className="ism">Contact us</h1>
        <div className="big-in">
          <input placeholder="email" type="text" />
          <input placeholder="password" type="password" />
          <input placeholder="text" className="rr" type="text" />
          <div className="bu ik1">send</div>
        </div>
      </div>
    </>
  );
}
