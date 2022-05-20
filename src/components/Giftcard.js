import { FormattedMessage } from "react-intl";
import Navbar from "./Navbar";

function Giftcard() {
  return (
    <>
      <Navbar activePage="giftcard" />
      <div>
        <h2>
          <FormattedMessage
            id="navigation.giftcard"
            defaultMessage="Gavekort"
          />
        </h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
    </>
  );
}

export default Giftcard;
