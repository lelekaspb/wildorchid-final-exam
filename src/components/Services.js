import text from "../styles/Text.module.css";
import { FormattedMessage } from "react-intl";
import Navbar from "./Navbar";

function Services() {
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
        <ul>
          <li>
            <FormattedMessage
              id="navigation.services.eyes"
              defaultMessage="Bryn og vipper"
            />
          </li>
          <li>
            <FormattedMessage
              id="navigation.services.nails"
              defaultMessage="Negle"
            />
          </li>
          <li>
            <FormattedMessage
              id="navigation.services.wax"
              defaultMessage="Hårfjerning"
            />
          </li>
          <li>
            <FormattedMessage
              id="navigation.services.spraytan"
              defaultMessage="Spraytan"
            />
          </li>
        </ul>
      </div>
    </>
  );
}

export default Services;
