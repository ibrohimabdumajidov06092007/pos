import "./Naw.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";


function Naw() {
  const [active, setActive] = useState(false);

  const text = () => {
    setActive(!active);
  };
  return (
    <>
      <div className="fix">
        <div className="pas">
          <div className="container mat">
            <div className="naw">
              <div className="left">
                <h1>
                  gym<span>.</span>
                </h1>
              </div>
              <div className="right">
                <button onClick={text}>=</button>
              </div>
            </div>
            <ul className={`center ${active ? "navAc" : null}`}>
              <li>
                <Link to="headar  ">headar</Link>
              </li>
              <li>
                <Link to="a">features</Link>
              </li>
              <li>
                <Link to="ab">offer</Link>
              </li>
              <li>
                <Link to="/about">about</Link>
              </li>
              <li className="add">
                <Link to="acon">
                  contact
                  <div className="big-in bola">
                    <input placeholder="email" type="text" />
                    <input placeholder="password" type="password" />
                    <input placeholder="text" className="rr" type="text" />
                    <div className="bu ik1">send</div>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Naw;
