import text from "../styles/Text.module.css";
import { FormattedMessage } from "react-intl";
import Navbar from "./Navbar";

function Contact() {
  return (
    <>
      <Navbar activePage="contact" />
      <div>
        <h2>
          <FormattedMessage id="navigation.contact" defaultMessage="Kontakt" />
        </h2>
        <p className={text.header}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
    </>
  );
}

export default Contact;
