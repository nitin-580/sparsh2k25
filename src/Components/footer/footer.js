import "./footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CodeIcon from '@mui/icons-material/Code';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Footer(data) {
  return (
    <>
      <div id="main-footer" style={{ borderTop: 'none', borderBottom: 'none' }}>
        <div className="footer-container" style={{ borderTop: 'none', borderBottom: 'none' }}>
          {/* Logo and Description Section */}
          <motion.div
            initial="hidden"
            variants={{
              hidden: {
                opacity: 0,
                y: 50,
              },
              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            whileInView="visible"
            transition={{
              duration: 0.8,
            }}
            className="footer-section footer-brand"
            style={{ border: 'none' }}
          >
            <div className="footer-logo">
              <img src="./LogoSparsh.png" alt="Sparsh Logo" />
            </div>
            <p className="footer-tagline">Celebrating Innovation & Creativity</p>
            <p className="footer-description">
              SVNIT's Annual Cultural Festival
            </p>
          </motion.div>

          {/* Quick Links Section */}
          <motion.div
            initial="hidden"
            variants={{
              hidden: {
                opacity: 0,
                y: 50,
              },
              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            whileInView="visible"
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
            className="footer-section footer-links"
            style={{ border: 'none' }}
          >
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-nav">
              <li>
                <Link
                  className="footer-link"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                    data.setactiveUrl("/");
                  }}
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="footer-link"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                    data.setactiveUrl("/events");
                  }}
                  to="/events"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  className="footer-link"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                    data.setactiveUrl("/sponsors");
                  }}
                  to="/sponsors"
                >
                  Sponsors
                </Link>
              </li>
              <li>
                <Link
                  className="footer-link"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                    data.setactiveUrl("/CampusAmbassador");
                  }}
                  to="/CampusAmbassador"
                >
                  Campus Ambassador
                </Link>
              </li>
              <li>
                <Link
                  className="footer-link"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                    data.setactiveUrl("/teams");
                  }}
                  to="/teams"
                >
                  Team
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial="hidden"
            variants={{
              hidden: {
                opacity: 0,
                y: 50,
              },
              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            whileInView="visible"
            transition={{
              duration: 0.8,
              delay: 0.4,
            }}
            className="footer-section footer-contact"
            style={{ border: 'none' }}
          >
            <h3 className="footer-heading">Contact Us</h3>
            <p className="contact-item">
              <LocationOnIcon className="contact-icon" />
              <span>SVNIT Campus, Ichchhanath, Surat, Gujarat 395007</span>
            </p>
            <p className="contact-item">
              <EmailIcon className="contact-icon" />
              <a href="mailto:sparsh@svnit.ac.in" className="footer-link">sparsh@svnit.ac.in</a>
            </p>
          </motion.div>
        </div>

        {/* Social and Copyright Bar */}
        <motion.div
          initial="hidden"
          variants={{
            hidden: {
              opacity: 0,
            },
            visible: {
              opacity: 1,
            },
          }}
          whileInView="visible"
          transition={{
            duration: 1,
            delay: 0.6,
          }}
          className="footer-bottom"
          style={{ borderTop: 'none', borderBottom: 'none' }}
        >
          <div className="social-links">
            <Link to="https://instagram.com/sparsh.nitsurat" className="social-icon" aria-label="Instagram">
              <InstagramIcon />
            </Link>
            <Link to="https://www.facebook.com/Sparsh.NITsurat/" className="social-icon" aria-label="Facebook">
              <FacebookIcon />
            </Link>
            <Link to="https://whatsapp.com/channel/0029VbAb0a8LY6dBIIcH3P1V" className="social-icon" aria-label="WhatsApp">
              <WhatsAppIcon />
            </Link>
            <Link to="https://www.linkedin.com/company/sparsh-nit-surat" className="social-icon" aria-label="LinkedIn">
              <LinkedInIcon />
            </Link>
            <a href="mailto:sparsh@svnit.ac.in" className="social-icon" aria-label="Email">
              <EmailIcon />
            </a>
          </div>
          <div className="copyright" style={{ border: 'none' }}>
            <p>© 2025 SPARSH - SVNIT</p>
            <br/>
            <p className="developer-credit">
              <span style={{ border: 'none' }}>Developed by <a href="https://www.linkedin.com/in/aayush4jha/" target="_blank" rel="noopener noreferrer" className="footer-link">Aayush Jha</a></span>
            </p>
          </div>
        </motion.div>
      </div>
    </>
  );
}