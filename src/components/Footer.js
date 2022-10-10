import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <nav class="footer-links">
        <a href="https://www.linkedin.com/home" target="_blank" rel="noreferrer">
          <img 
            src="https://www.freeiconspng.com/thumbs/linkedin-logo-png/linkedin-logo-3.png" width="350"
            alt="Linkedin Logo"
          /> 
        </a>

        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
          <img
            src="https://www.freeiconspng.com/uploads/facebook-logo-2.png" width="350"
            alt="Facebook Logo" 
          />
        </a>

        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
          <img
            src="https://www.freeiconspng.com/uploads/new-instagram-icon-2.jpg" width="350"
            alt="Instagram Logo" 
          />
        </a>

        <a href="https://www.twitter.com/" target="_blank" rel="noreferrer">
          <img 
            src="https://www.freeiconspng.com/uploads/twitter-icon-png-13-1.png" width="350"
            alt="Twitter Logo"
          />
        </a>    
      </nav>
    </>
  )
}

export default Footer;
 