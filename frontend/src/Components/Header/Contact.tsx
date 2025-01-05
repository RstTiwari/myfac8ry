// import React from 'react';
import RoomIcon from "@mui/icons-material/Room";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import EmailIcon from "@mui/icons-material/Email";
import PersonIcon from "@mui/icons-material/Person";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "./Contact.css";
import Header from "./Header";

export default function Contact() {
  return (
    <div>
      <Header />
      <div className="main-div">
        <div className="contact-div">
          <h1>Contact-us</h1>
          <div className="texts">
            <div>
              <RoomIcon /> Kareiviu str
            </div>
            <div>
              <PhoneEnabledIcon /> +37060041977
            </div>
            <div>
              <EmailIcon /> jbl@Myfac8ry.com
            </div>
          </div>
        </div>

        <div className="inputs">
          <h1>Write to us</h1>
          <div className="input">
            <form>
              <div className="input-group mb-3">
                <span className="input-group-text">
                  <PersonIcon />
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Name"
                  aria-label="Your Name"
                />
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text">
                  <EmailIcon />
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email"
                  aria-label="Your Name"
                />
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text">
                  <PhoneEnabledIcon />
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Phone number"
                  aria-label="Your Name"
                />
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text">
                  <PersonIcon />
                </span>
                <input
                  type="text-area"
                  className="form-control"
                  placeholder="Message"
                  aria-label="Your Name"
                />
              </div>
              <InputGroup>
                <InputGroup.Text>With textarea</InputGroup.Text>
                <Form.Control as="textarea" aria-label="With textarea" />
              </InputGroup>
            </form>
            <button
              style={{
                height: "10%",
                width: "30vw",
                backgroundColor: "blue",
                borderRadius: "5px",
                margin: "3vw",
              }}
            >
              <h2>Send message</h2>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
