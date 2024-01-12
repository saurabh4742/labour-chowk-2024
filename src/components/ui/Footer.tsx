
import IonIcon from '@reacticons/ionicons';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-nav">
          <h4>Navigation</h4>
          <ul>
            <li><a href="">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>Email: info@labourchowk.com</p>
        </div>
        <div className="footer-social">
          <h4>Follow Us</h4>
          <ul>
            <li><a href="#"><IonIcon name="logo-facebook"></IonIcon></a></li>
            <li><a href="#"><IonIcon name="logo-twitter"></IonIcon></a></li>
            <li><a href="#"><IonIcon name="logo-linkedin"></IonIcon></a></li>
            <li><a href="#"><IonIcon name="logo-instagram"></IonIcon></a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 Labour Chowk. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;