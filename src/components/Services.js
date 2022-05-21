import services from "../styles/Services.module.css";
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
      <div className={services.page}>
        <h2 className={services.heading}>
          <FormattedMessage
            id="navigation.services"
            defaultMessage="Behandlinger"
          />
        </h2>

        <nav className={services.navbar}>
          <Link
            to="eyes"
            data-subpage="eyes"
            className={` ${services.link} ${
              activeSubPage === "eyes" ? services.underline : ""
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
            className={` ${services.link} ${
              activeSubPage === "wax" ? services.underline : ""
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
            className={` ${services.link} ${
              activeSubPage === "nails" ? services.underline : ""
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
            className={` ${services.link} ${
              activeSubPage === "spraytan" ? services.underline : ""
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
