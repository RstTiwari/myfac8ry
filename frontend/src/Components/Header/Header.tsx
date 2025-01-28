import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";
import DehazeIcon from "@mui/icons-material/Dehaze";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import { WhatsApp } from "@mui/icons-material";
import ClearIcon from "@mui/icons-material/Clear";
import { Button, Dropdown, Menu } from "antd"; // Import Dropdown and Menu components
import { Link } from "react-router-dom";
import logo from "../../assets/myfac8ry_logo.png";
import {Row}  from "antd"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  let navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Menu items for the dropdown
  const menu = (
    <Menu>
      <Menu.Item key="1">CNC - Milling</Menu.Item>
      <Menu.Item key="2">CNC - Turning</Menu.Item>
      <Menu.Item key="3">CNC - Grinding</Menu.Item>
    </Menu>
  );

  return (
    <div>
      <nav className="main-nav">
        {/* Logo Section */}
        <div className="logo" onClick={() => navigate("/")}>
          <img src={logo} style={{ width: "200px", height: "50px" }} />
          <div className="call_email_icon">
            <div
              className="call"
              onClick={() => (window.location.href = "tel:+918928772801")}
            >
              <PhoneEnabledIcon />
            </div>
            <div
              className="email"
              onClick={() =>
                window.open("https://wa.me/918928772801", "_blank") // WhatsApp Web link
              }
            >
              <WhatsApp />
            </div>
          </div>
        </div>

        {/* Nav Links */}
        <ul className={menuOpen ? "true show" : "navlink"}>
          <div className="clear" onClick={toggleMenu}>
            <ClearIcon />
          </div>

          {/* Process Dropdown */}
         <Row align = {"middle"}>
            <Button
              style={{ padding: "20px", color: "black" }}
              onClick={() => navigate("/quote")}
            >
              Get Instant Quote
            </Button>
        </Row>
        </ul>
      </nav>
    </div>
  );
}
