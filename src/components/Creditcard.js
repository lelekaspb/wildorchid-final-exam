import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

function Creditcard() {
  <Navbar activePage="giftcard" />;
  return (
    <div>
      <p>Creditcard</p>
      <Link to="/confirmation"> confirm</Link>
    </div>
  );
}

export default Creditcard;
