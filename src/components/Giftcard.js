import text from "../styles/Text.module.css";
import { FormattedMessage } from "react-intl";
import Navbar from "./Navbar";
import giftcard from "../styles/Giftcard.module.css";
import { Outlet } from "react-router-dom";

function Giftcard() {
  return (
    <>
      <Navbar activePage="giftcard" />
      <div>
        <h2 className={giftcard.heading}>
          <FormattedMessage
            id="navigation.giftcard"
            defaultMessage="Gavekort"
          />
        </h2>
        <p className={text.header}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>

      <Outlet />
    </>
  );
}

export default Giftcard;
