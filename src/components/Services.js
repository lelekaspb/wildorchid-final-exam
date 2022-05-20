import navbar from "../styles/Navbar.module.css";
import { FormattedMessage } from "react-intl";
import Navbar from "./Navbar";
import { Link, Outlet } from "react-router-dom";
import { useState } from "react";

function Services() {
  // save chosen subpage in state
  const [activeSubPage, setActiveSubPage] = useState("eyes");

  // change subpage on Link click
  const changeActiveSubPage = (e) => {
    const subPage = e.target.getAttribute("data-subpage");
    setActiveSubPage(subPage);
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
