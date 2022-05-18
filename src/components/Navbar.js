import { useContext } from "react";
import { Context } from "./ContextWrapper";
import { Link } from "react-router-dom";
import navbar from "../styles/Navbar.module.css";
import Burgermenu from "./Burgermenu";
import Burger from "./Burger";
import DesktopMenu from "./DesktopMenu";

function Navbar({ activePage }) {
  const context = useContext(Context);

  return (
    <nav className={navbar.navbar}>
      <Burger />
      <Burgermenu activePage={activePage} />

      <Link to="/" className={`${navbar.logo_link}`}>
        <img className={navbar.logo} src="logo/logo.svg" alt="logo" />
      </Link>

      <DesktopMenu activePage={activePage} />

      <div className={navbar.lang_buttons}>
        <button
          data-lang="da"
          className={`${navbar.mr_1} ${
            context.locale === "da"
              ? navbar.button_primary
              : navbar.button_outline
          }`}
          onClick={context.changeLang}
        >
          DK
        </button>

        <button
          data-lang="en"
          className={`${
            context.locale === "en"
              ? navbar.button_primary
              : navbar.button_outline
          }`}
          onClick={context.changeLang}
        >
          EN
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
