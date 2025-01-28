import "./Footer.css";
import RoomIcon from "@mui/icons-material/Room";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterInIcon from "@mui/icons-material/Twitter";

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
                            Myfac8ry specializes in on-demand cnc machining,
                            offering personalized and precise solutions for
                            complex metal projects through our instant quotation
                            tool, ensuring rapid and accurate pricing for your
                            designs.
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
                            <RoomIcon /> . Unit10- Gorai-Pada Industrial
                            Estate,gorai pada Vasai(e)
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
                            {/* Twitter */}
                            <a
                                href="https://x.com/i/flow/login?redirect_after_login=%2Fmyfac8ry71658"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <TwitterInIcon
                                    style={{ fontSize: "50px", color: "black" }}
                                />
                            </a>

                            {/* YouTube */}
                            <a
                                href="https://youtube.com/@myfac8ry?si=vAva4dHTMP18fmZW"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <YouTubeIcon
                                    style={{ fontSize: "50px", color: "red" }}
                                />
                            </a>

                            {/* Instagram */}
                            <a
                                href="https://www.instagram.com/myfac8ry?igsh=dm1qOTJjYW9oYzlh"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <InstagramIcon style={{ fontSize: "50px" }} />
                            </a>

                            {/* LinkedIn */}
                            <a
                                href="https://www.linkedin.com/company/myfac8ry"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <LinkedInIcon style={{ fontSize: "50px" }} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
