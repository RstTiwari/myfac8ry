import "./Footer.css";
import RoomIcon from "@mui/icons-material/Room";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
export default function Footer() {
  return (
    <>
      <div>
        <div>
          <div className="logos">
            <img
              src="https://Myfac8ry.com/wp-content/uploads/2024/07/colibris-logo-footer.svg"
              alt=""
            />
          </div>
        </div>

        <div className="About-us">
          <div className="About-Text">
            <h3 style={{ fontWeight: "bold" }}>About us</h3>
            <p className="About-us-text">
              Myfac8ry specializes in on-demand cnc machining, offering
              personalized and precise solutions for complex metal projects
              through our instant quotation tool, ensuring rapid and accurate
              pricing for your designs.
            </p>
          </div>
          <div className="Services">
            <div className="Services-text">
              <h3 style={{ fontWeight: "bold" }}>Services</h3>
              <p>CNC -Machining</p>
              <p>CNC- Milling</p>
              <p>CNC- Grinding</p>
            </div>
          </div>
          <div className="contact-us">
            <h3 style={{ fontWeight: "bold" }}>Get in touch</h3>
            <p>
              {" "}
              <RoomIcon /> . Unit10- Gorai-Pada Industrial Estate,gorai pada
              Vasai(e)
            </p>
            <p>
              {" "}
              <PhoneEnabledIcon />
              +91 8767948130
            </p>
            <p>
              {" "}
              <PhoneEnabledIcon />
              +91 8928772801
            </p>
            <p>
              {" "}
              <EmailIcon />
              info.myfac8ry@gmail.com
            </p>

            <div className="iconss">
              <FacebookIcon style={{ fontSize: "50px" }} />
              <YouTubeIcon style={{ fontSize: "50px" }} />
              <InstagramIcon style={{ fontSize: "50px" }} />
              <LinkedInIcon style={{ fontSize: "50px" }} />
            </div>
          </div>
        </div>
        <div className="Copyright-footer">
          <div> Copyright@Myfac8ry2024</div>
          <div>
            {" "}
            <span>Terms and Conditions</span> <span> Privacy policy</span>
          </div>
        </div>
      </div>
    </>
  );
}
