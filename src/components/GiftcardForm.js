import { FormattedMessage } from "react-intl";
import { useNavigate } from "react-router-dom";

function GiftcardForm() {
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
    <div>
      <form>
        <p>GiftcardForm</p>
        <button type="submit" onClick={handleSubmit}>
          next
        </button>
      </form>
    </div>
  );
}

export default GiftcardForm;
