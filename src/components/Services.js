import text from "../styles/Text.module.css";
import navbar from "../styles/Navbar.module.css";
import { FormattedMessage } from "react-intl";
import Navbar from "./Navbar";
import { Link, Outlet } from "react-router-dom";
import { useState } from "react";

function Services() {
  // check if a subpage was chosen (navigated to)
  // so that it doesn't change to default on page reload
  const sessionSubPage = sessionStorage.getItem("subpage");
  console.log(sessionSubPage);

  // save chosen subpage in state
  const [activeSubPage, setActiveSubPage] = useState(sessionSubPage || "nails");

  // change subpage on Link click
  const changeActiveSubPage = (e) => {
    const subPage = e.target.getAttribute("data-subpage");
    setActiveSubPage(subPage);
    sessionStorage.setItem("subpage", subPage);
  };

  return (
    <>
      <Navbar activePage="services" />
      <div>
        <h2>
          <FormattedMessage
            id="navigation.services"
            defaultMessage="Behandlinger"
          />
        </h2>
        <p className={text.header}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>

        <nav>
          <Link
            to="eyes"
            data-subpage="eyes"
            className={` ${navbar.link} ${
              activeSubPage === "eyes" ? navbar.bold : ""
            }`}
            onClick={changeActiveSubPage}
          >
            <FormattedMessage
              id="navigation.services.eyes"
              defaultMessage="Bryn og vipper"
            />
          </Link>

          <Link
            to="wax"
            data-subpage="wax"
            className={` ${navbar.link} ${
              activeSubPage === "wax" ? navbar.bold : ""
            }`}
            onClick={changeActiveSubPage}
          >
            <FormattedMessage
              id="navigation.services.wax"
              defaultMessage="Hårfjerning"
            />
          </Link>

          <Link
            to="nails"
            data-subpage="nails"
            className={` ${navbar.link} ${
              activeSubPage === "nails" ? navbar.bold : ""
            }`}
            onClick={changeActiveSubPage}
          >
            <FormattedMessage
              id="navigation.services.nails"
              defaultMessage="Negle"
            />
          </Link>

          <Link
            to="spraytan"
            data-subpage="spraytan"
            className={` ${navbar.link} ${
              activeSubPage === "spraytan" ? navbar.bold : ""
            }`}
            onClick={changeActiveSubPage}
          >
            <FormattedMessage
              id="navigation.services.spraytan"
              defaultMessage="Spraytan"
            />
          </Link>
        </nav>

        <Outlet />
      </div>
    </>
  );
}

export default Services;
