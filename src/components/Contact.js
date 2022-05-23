// import text from "../styles/Text.module.css";
import contact from "../styles/Contact.module.css";
import { FormattedMessage } from "react-intl";
import Navbar from "./Navbar";

function Contact() {
  return (
    <>
      <Navbar activePage="contact" />
      <div>
        <h2 className={contact.title}>
          <FormattedMessage id="navigation.contact" defaultMessage="Kontakt" />
        </h2>

        <div className={contact.background}>
          <div>
            <div>
              <h3>Åbningstider</h3>
            </div>
            <div>
              <p>Tirsdag - Torsdag: 11-19</p>
              <p>Tirsdag - Torsdag: 11-19</p>
              <p>Tirsdag - Torsdag: 11-19</p>
              <p>Tirsdag - Torsdag: 11-19</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
