import { Outlet, useNavigate } from "react-router-dom";

function Payment() {
  let navigate = useNavigate();
  const redirectToCreditcard = () => {
    navigate("/creditcard");
  };
  const redirectToMobilepay = () => {
    navigate("/mobilepay");
  };
  return (
    <div>
      <p>Payment</p>
      <button onClick={redirectToCreditcard}>creditcard</button>
      <button onClick={redirectToMobilepay}>mobilepay</button>

      <Outlet />
    </div>
  );
}

export default Payment;
