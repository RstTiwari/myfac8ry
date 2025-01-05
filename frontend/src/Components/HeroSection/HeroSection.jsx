import "./HeroSection.css";
import { Button } from "antd";
// import SendIcon from '@mui/icons-material/Send';

export default function Hero() {
  return (
    <div className="main-demand">
      {/* Text Section */}
      <div className="On-demand">
        <h3 className="H1">
          India's Leading <br />
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
          onClick={() => (window.location.href = "https://ftms.myfac8ry.com/")}
        >
          Get instant quote
        </Button>
      </div>

      {/* Video Section */}
      <div className="videos">
        <iframe
          src="https://player.vimeo.com/video/867898342?autoplay=1&loop=1&autopause=0&color=00adef&portrait=0&byline=0&title=0&controls=0&muted=1"
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
          style={{ width: "100%", height: "100%" }}
        ></iframe>
      </div>
    </div>
  );
}
