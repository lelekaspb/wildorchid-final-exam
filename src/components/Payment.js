import { Outlet, Link } from "react-router-dom";
import Navbar from "./Navbar";

function Payment() {
  return (
    <div>
      <Navbar activePage="giftcard" />
      <Link to="/giftcard">back to form</Link>
      <p>Payment</p>
      <Link to="creditcard">
        <button>creditcard</button>
      </Link>
      <Link to="mobilepay">
        <button>mobilepay</button>
      </Link>
      <Outlet />
    </div>
  );
}

export default Payment;
