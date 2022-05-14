import { useContext } from "react";
import { Context } from "./IntlWrapper";
import { Link } from "react-router-dom";
import navbar from "../styles/Navbar.module.css";
import buttons from "../styles/Buttons.module.css";
import { FormattedMessage } from "react-intl";

function Navbar({ activePage }) {
  const context = useContext(Context);

  return (
    <div>
      <Link to="/" className={navbar.link}>
        Logo
      </Link>

      <Link
        to="/services"
        className={` ${navbar.link} ${
          activePage === "services" ? navbar.underline : ""
        }`}
      >
        <FormattedMessage
          id="navigation.services"
          defaultMessage="Behandlinger"
        />
      </Link>

      <Link
        to="/about_us"
        className={` ${navbar.link} ${
          activePage === "about_us" ? navbar.underline : ""
        }`}
      >
        <FormattedMessage id="navigation.about_us" defaultMessage="Om os" />
      </Link>

      <Link
        to="/contact"
        className={` ${navbar.link} ${
          activePage === "contact" ? navbar.underline : ""
        }`}
      >
        <FormattedMessage id="navigation.contact" defaultMessage="Kontakt" />
      </Link>

      <a
        className={navbar.link}
        href="https://wildorchid.onlinebooq.dk/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FormattedMessage id="navigation.book" defaultMessage="Bestil tid" />
      </a>

      <button
        data-lang="en"
        className={`${
          context.locale === "en" ? buttons.btn_primary : buttons.btn_outline
        }`}
        onClick={context.changeLang}
      >
        EN
      </button>

      <button
        data-lang="da"
        className={`${
          context.locale === "da" ? buttons.btn_primary : buttons.btn_outline
        }`}
        onClick={context.changeLang}
      >
        DK
      </button>
    </div>
  );
}

export default Navbar;
