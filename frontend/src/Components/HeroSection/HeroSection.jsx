import { useNavigate } from "react-router-dom";

import "./HeroSection.css";
import { Button } from "antd";
// import SendIcon from '@mui/icons-material/Send';
import heroBanner from "../../assets/Post_02.jpg";

export default function Hero() {
  const navigate = useNavigate();
  return (
    <div className="main-demand">
      {/* Text Section */}
      <div className="On-demand">
        <h3 className="H1">
          India's Leading <br /> On Demand B2B <br />
          <span style={{ color: "#22b378" }}>Precision Part Hub</span>
        </h3>
        <p>
          The convenience of instant pricing for CNC Machining, CNC Milling ,CNC
          Drilling.
        </p>
        <p>
          With just a few clicks, you can upload your files of cnc machining
          parts, specify your requirements, and receive an accurate quote within
          Instant. Our innovative tool streamlines the manufacturing process for
          simple metal parts, saving you time and ensuring cost transparency.
          Perfect for engineers to place an order in minutes.
        </p>
        <p>Experience the ease of getting your price without the wait!</p>
        <Button
          type="link"
          style={{
            backgroundColor: "#22b378",
            color: "white",
            padding: "20px",
          }}
          onClick={() => navigate("/quote")}
        >
          Get instant quote
        </Button>
      </div>

      {/* Video Section */}
      <div className="videos">
        <img
          src={heroBanner}
          alt=""
          className="banner"
          style={{ width: "100%", textAlign: "end", borderRadius: "50px" }}
        />
      </div>
    </div>
  );
}
