import "../../styles.css"
const Navbar = () => {
  return (
    <>
      <nav>
        <ul className="nav-bar">
          <li className="logo">
            <a href="#">
              <img src="/images/logo.jpeg" alt="Logo" />
            </a>
          </li>
          <input type="checkbox" id="check" />
          <span className="menu">
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#contact">Contact Us</a>
            </li>
            <li>
                <a href="#download">Download</a>
            </li>
            <li>
                <a href="#website">Web Portal</a>
            </li>
          </span>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
