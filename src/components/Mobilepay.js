import { useNavigate } from "react-router-dom";
import { Context } from "./ContextWrapper";
import { useContext } from "react";
import { postGiftcard } from "./../utilities/post.js";
import mobilepay from "./../styles/Mobilepay.module.css";

function Mobilepay() {
  const { info, dispatch } = useContext(Context);
  let navigate = useNavigate();
  const redirectToConfirmation = () => {
    navigate("/confirmation");
  };

  const setInfoToInitial = () => {
    dispatch({ type: "reset", data: true });
  };

  const handleClick = async () => {
    if (info.giftcard.validated) {
      const payload = {
        first_name: info.giftcard.firstName,
        last_name: info.giftcard.lastName,
        email: info.giftcard.email,
        amount: parseInt(info.giftcard.amount),
        note: info.giftcard.note,
        date_receive: info.giftcard.date,
      };
      const url = "https://kea0209-5a57.restdb.io/rest/wildorchid-giftcard";
      const response = await postGiftcard(payload, url);
      if (response !== undefined) {
        setInfoToInitial();
        redirectToConfirmation();
      } else {
        alert("failed to post");
      }
    } else {
      alert(
        "Looks like something is wrong with the information in gift card form."
      );
    }
  };

  return (
    <section className={mobilepay.picture}>
      <img src="./../photos/qr-code.png" alt="qr code" onClick={handleClick} />
    </section>
  );
}

export default Mobilepay;