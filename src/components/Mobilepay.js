import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

function Mobilepay() {
  <Navbar activePage="giftcard" />;
  return (
    <div>
      <p>Mobilepay</p>
      <Link to="/confirmation"> confirm</Link>
    </div>
  );
}

export default Mobilepay;
