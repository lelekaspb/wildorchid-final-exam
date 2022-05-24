import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import menu from "../styles/Burgermenu.module.css";
import { useContext } from "react";
import { Context } from "./ContextWrapper";

function Burgermenu({ activePage }) {
  const context = useContext(Context);

  return (
    <div
      className={`${menu.menu} ${context.menuOpen ? menu.open : menu.closed}`}
    >
      <Link
        to="/"
        className={` ${menu.link} ${
          activePage === "home" ? menu.underline : ""
        }`}
        onClick={() => {
          context.setMenuOpen(!context.menuOpen);
        }}
      >
        <img className={menu.icon} src="../icons/home.svg" alt="home icon" />
        <FormattedMessage id="navigation.home" defaultMessage="Forside" />
      </Link>

      <Link
        to="/services"
        className={` ${menu.link} ${
          activePage === "services" ? menu.underline : ""
        }`}
        onClick={() => {
          context.setMenuOpen(!context.menuOpen);
        }}
      >
        <img
          className={menu.icon}
          src="../icons/services.svg"
          alt="services icon"
        />
        <FormattedMessage
          id="navigation.services"
          defaultMessage="Behandlinger"
        />
      </Link>

      <Link
        to="/about_us"
        className={` ${menu.link} ${
          activePage === "about_us" ? menu.underline : ""
        }`}
        onClick={() => {
          context.setMenuOpen(!context.menuOpen);
        }}
      >
        <img
          className={menu.icon}
          src="../icons/about.svg"
          alt="about us icon"
        />
        <FormattedMessage id="navigation.about_us" defaultMessage="Om os" />
      </Link>

      <Link
        to="/contact"
        className={` ${menu.link} ${
          activePage === "contact" ? menu.underline : ""
        }`}
        onClick={() => {
          context.setMenuOpen(!context.menuOpen);
        }}
      >
        <img
          className={menu.icon}
          src="../icons/contact.svg"
          alt="contact icon"
        />
        <FormattedMessage id="navigation.contact" defaultMessage="Kontakt" />
      </Link>

      <Link
        to="/giftcard"
        className={` ${menu.link} ${
          activePage === "giftcard" ? menu.underline : ""
        }`}
        onClick={() => {
          context.setMenuOpen(!context.menuOpen);
        }}
      >
        <img
          className={menu.icon}
          src="../icons/giftcard.svg"
          alt="giftcard icon"
        />
        <FormattedMessage id="navigation.giftcard" defaultMessage="Gavekort" />
      </Link>

      <a
        className={menu.link}
        href="https://wildorchid.onlinebooq.dk/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className={menu.icon} src="../icons/book.svg" alt="book icon" />
        <FormattedMessage id="navigation.book" defaultMessage="Bestil tid" />
      </a>

      <img
        className={menu.orchid}
        src="../illustrations/burger-menu-orchid.svg"
        alt="orchid flower"
      />
    </div>
  );
}

export default Burgermenu;
