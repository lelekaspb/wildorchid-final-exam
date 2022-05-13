import { Link } from "react-router-dom";
import navbar from "../styles/Navbar.module.css";

function Navbar({ activePage, setActivePage }) {
  const changeActivePage = (e) => {
    setActivePage(e.target.getAttribute("data-page"));
  };
  return (
    <div>
      <Link
        to="/"
        data-page="home"
        className={navbar.link}
        onClick={changeActivePage}
      >
        Logo
      </Link>
      <Link
        to="/services"
        className={` ${navbar.link} ${
          activePage === "services" ? navbar.underline : ""
        }`}
        data-page="services"
        onClick={changeActivePage}
      >
        Services
      </Link>
      <Link
        to="/about_us"
        className={` ${navbar.link} ${
          activePage === "about_us" ? navbar.underline : ""
        }`}
        data-page="about_us"
        onClick={changeActivePage}
      >
        About us
      </Link>
      <Link
        to="/contact"
        className={` ${navbar.link} ${
          activePage === "contact" ? navbar.underline : ""
        }`}
        data-page="contact"
        onClick={changeActivePage}
      >
        Contact
      </Link>
      <a
        className={navbar.link}
        href="https://wildorchid.onlinebooq.dk/"
        target="_blank"
        rel="noreferrer"
      >
        Book
      </a>
    </div>
  );
}

export default Navbar;
