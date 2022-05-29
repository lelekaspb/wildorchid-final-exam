import { FormattedMessage } from "react-intl";
import { useNavigate } from "react-router-dom";
import { Context } from "./ContextWrapper";
import { useContext } from "react";
import { postGiftcard } from "./../utilities/post.js";
// import { Link } from "react-router-dom";

function Creditcard() {
  const { info, dispatch } = useContext(Context);

  let navigate = useNavigate();
  const redirectToConfirmation = () => {
    navigate("/confirmation");
  };

  const setInfoToInitial = () => {
    dispatch({ type: "reset", data: true });
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

  const validateExpiry = (expiry) => {
    const d = new Date();
    const year = d.getFullYear();
    const month = d.getMonth() + 1;

    if (
      expiry.split("/")[0] > 12 ||
      (parseInt(expiry.split("/")[0]) < month &&
        parseInt(expiry.split("/")[1]) === year) ||
      expiry.split("/")[1] > year + 10 ||
      expiry.split("/")[1] < year
    ) {
      dispatch({ type: "expiryHelp", data: "error" });
      dispatch({ type: "expiryInvalid", data: true });
      return false;
    } else {
      dispatch({ type: "expiryInvalid", data: false });
      return true;
    }
  };

  return (
    <div>
      <p>Creditcard</p>
      {/* <Link to="/confirmation"> confirm</Link> */}
    </div>
  );
}

export default Creditcard;
