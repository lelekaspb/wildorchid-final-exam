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
    dispatch({ type: "fname", data: "" });
    dispatch({ type: "lname", data: "" });
    dispatch({ type: "email", data: "" });
    dispatch({ type: "amount", data: "" });
    dispatch({ type: "note", data: "" });
    dispatch({ type: "fnameHelp", data: "hidden" });
    dispatch({ type: "nameHelp", data: "hidden" });
    dispatch({ type: "emailHelp", data: "hidden" });
    dispatch({ type: "amountHelp", data: "hidden" });
    dispatch({ type: "date", data: new Date() });
    dispatch({ type: "validated", data: false });
  };

  const handleClick = async (e) => {
    if (info.validated) {
      const payload = {
        first_name: info.firstName,
        last_name: info.lastName,
        email: info.email,
        amount: parseInt(info.amount),
        note: info.note,
        date_receive: info.date,
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
    <div className={mobilepay.picture}>
      <img src="./../photos/qr-code.png" alt="qr code" onClick={handleClick} />
    </div>
  );
}

export default Mobilepay;
