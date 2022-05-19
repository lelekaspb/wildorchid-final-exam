import text from "../styles/Text.module.css";
import { FormattedMessage } from "react-intl";
import Navbar from "./Navbar";
import giftcard from "../styles/Giftcard.module.css";
import { useNavigate } from "react-router-dom";

function Giftcard() {
  let navigate = useNavigate();
  const redirectToPayment = () => {
    navigate("/giftcard/payment");
  };
  const handleSubmit = (e) => {
    // validate
    // ...
    // if validated correctly, redirect to payment
    redirectToPayment();
  };
  return (
    <>
      <Navbar activePage="giftcard" />
      <div>
        <h2 className={giftcard.heading}>
          <FormattedMessage
            id="navigation.giftcard"
            defaultMessage="Gavekort"
          />
        </h2>
        <p className={text.header}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <form>
          <button type="submit" onClick={handleSubmit}>
            next
          </button>
        </form>
      </div>
    </>
  );
}

export default Giftcard;
