import menu from "./../styles/Desktopmenu.module.css";
import { useContext } from "react";
import { Context } from "./ContextWrapper";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";

function DesktopMenu({ activePage }) {
  const context = useContext(Context);

  return (
    <div className={menu.menu}>
      <Link
        to="/services"
        className={` ${menu.link} ${
          activePage === "services" ? menu.underline : ""
        }`}
        onClick={() => {
          context.setMenuOpen(!context.menuOpen);
        }}
      >
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
        <FormattedMessage id="navigation.giftcard" defaultMessage="Gavekort" />
      </Link>

      <a
        className={menu.link}
        href="https://wildorchid.onlinebooq.dk/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FormattedMessage id="navigation.book" defaultMessage="Bestil tid" />
      </a>
    </div>
  );
}

export default DesktopMenu;
