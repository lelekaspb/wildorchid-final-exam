import { Outlet, Link } from "react-router-dom";

function Payment() {
  return (
    <div>
      <Link to="/giftcard/info">back to form</Link>
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
