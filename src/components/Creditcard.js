import { FormattedMessage } from "react-intl";
import { Link, useNavigate } from "react-router-dom";

function Creditcard() {
  let navigate = useNavigate();
  // call once successful response came from restdb
  const redirectToConfirmation = () => {
    navigate("/confirm");
  };
  return (
    <div>
      <p>Creditcard</p>
      <Link to="/giftcard/confirm"> confirm</Link>
    </div>
  );
}

export default Creditcard;
