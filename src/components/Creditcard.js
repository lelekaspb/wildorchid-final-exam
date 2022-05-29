import { FormattedMessage, FormattedDate } from "react-intl";
import { useNavigate } from "react-router-dom";
import { Context } from "./ContextWrapper";
import { useContext, useRef, useEffect } from "react";
import { postGiftcard } from "./../utilities/post.js";
import creditcard from "../styles/Creditcard.module.css";
import giftcard from "../styles/Giftcard.module.css";
import Cardnumber from "./Cardnumber";
import Cardname from "./Cardname";
import Cardcvc from "./Cardcvc";
import Cardexpiry from "./Cardexpiry";

function Creditcard() {
  const { info, dispatch } = useContext(Context);

  let navigate = useNavigate();
  const redirectToConfirmation = () => {
    navigate("/confirmation");
  };

  const setInfoToInitial = () => {
    dispatch({ type: "reset", data: true });
  };

  // focus on incorrectly filled in input
  const focusOnError = (errorField) => {
    errorField.current.focus();
  };

  // check if there is any input that has been filled in incorrectly
  const checkForErrors = () => {
    if (info.creditcard.number.length < 19) {
      return cardNumberRef;
    } else if (info.creditcard.name.length < 3) {
      return cardNameRef;
    } else if (info.creditcard.expiry.length < 5) {
      return cardExpiryRef;
    } else if (info.creditcard.cvc.length < 3) {
      return cardCvcRef;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errorField = checkForErrors();
    if (!errorField) {
      // if all input fields are filled in correctly, post order and redirect the user to the confirmation page(component)
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
    } else {
      // if there is an error in input values, change focus to the incorrectly filled in input field
      focusOnError(errorField);
    }
  };

  const validateExpiry = (expiry) => {
    const d = new Date();
    const year = d.getFullYear() - 2000;
    const month = d.getMonth() + 1;

    if (
      expiry.split("/")[0] > 12 ||
      (parseInt(expiry.split("/")[0]) < month &&
        parseInt(expiry.split("/")[1]) === year) ||
      expiry.split("/")[1] > year + 10 ||
      expiry.split("/")[1] < year
    ) {
      // dispatch({ type: "expiryHelp", data: "error" });
      dispatch({ type: "expiryInvalid", data: true });
      return false;
    } else {
      // dispatch({ type: "expiryHelp", data: "success" });
      dispatch({ type: "expiryInvalid", data: false });
      return true;
    }
  };

  // refs for accessing input elements
  const cardNumberRef = useRef("");
  const cardExpiryRef = useRef("");
  const cardCvcRef = useRef("");
  const cardNameRef = useRef("");

  // useEffect functions are used for changing focus from one input to another
  useEffect(() => {
    if (info.creditcard.number.length === 19) {
      cardNameRef.current.focus();
    }
  }, [info.creditcard.number]);

  useEffect(() => {
    if (info.creditcard.expiry.length === 5) {
      const isCorrect = validateExpiry(info.creditcard.expiry);
      if (isCorrect) {
        cardCvcRef.current.focus();
      }
    }
  }, [info.creditcard.expiry]);

  useEffect(() => {
    if (info.creditcard.cvc.length === 3) {
      document.activeElement.blur();
    }
  }, [info.creditcard.cvc]);

  // for hiding error message under the name field
  useEffect(() => {
    if (info.creditcard.name.length > 2) {
      dispatch({ type: "ccnameHelp", data: "success" });
    }
  }, [info.creditcard.name]);

  return (
    <section className={creditcard.content}>
      <form autoComplete="off" className={creditcard.form}>
        <Cardnumber
          number={info.creditcard.number}
          help={info.creditcard.numberHelp}
          ref={cardNumberRef}
          handleInput={(e) => {
            dispatch({ type: "ccnumber", data: e.target.value });
          }}
          handleBlur={(e) => {
            dispatch({
              type: "ccnumberHelp",
              data: `${e.target.value.length < 19 ? "error" : "success"}`,
            });
          }}
        />

        <Cardname
          name={info.creditcard.name}
          help={info.creditcard.nameHelp}
          ref={cardNameRef}
          handleInput={(e) => {
            dispatch({
              type: "ccname",
              data: e.target.value.replace(/[^a-zA-Zæøå\s]*$/gi, ""),
            });
          }}
          handleBlur={(e) => {
            dispatch({
              type: "ccnameHelp",
              data: `${e.target.value.length < 3 ? "error" : "success"}`,
            });
          }}
        />

        <div className={creditcard.line_three}>
          <Cardexpiry
            expiry={info.creditcard.expiry}
            help={info.creditcard.expiryHelp}
            invalid={info.creditcard.expiryInvalid}
            ref={cardExpiryRef}
            handleInput={(e) => {
              dispatch({ type: "ccexpiry", data: e.target.value });
            }}
            handleBlur={(e) => {
              dispatch({
                type: "expiryHelp",
                data: `${e.target.value.length < 5 ? "error" : "success"}`,
              });
            }}
          />

          <Cardcvc
            cvc={info.creditcard.cvc}
            help={info.creditcard.cvcHelp}
            ref={cardCvcRef}
            handleInput={(e) => {
              dispatch({ type: "cccvc", data: e.target.value });
            }}
            handleBlur={(e) => {
              dispatch({
                type: "cccvcHelp",
                data: `${e.target.value.length < 3 ? "error" : "success"}`,
              });
            }}
          />
        </div>

        <div className={creditcard.line_four}>
          <span>
            <FormattedMessage
              id="giftcard.info.date_label"
              defaultMessage="Dato modtaget *"
            />
          </span>
          <span>
            <FormattedDate
              value={info.giftcard.date}
              year="numeric"
              month="long"
              day="numeric"
              weekday="long"
            />
          </span>
        </div>

        <div className={creditcard.line_five}>
          <span>
            <FormattedMessage id="creditcard.total" defaultMessage="I alt" />
          </span>
          <span>{info.giftcard.amount} DKK</span>
        </div>

        <button
          className={giftcard.next_btn}
          type="submit"
          onClick={handleSubmit}
        >
          <FormattedMessage id="creditcard.pay" defaultMessage="Betal" />
        </button>
      </form>

      <div className={creditcard.orchid}>
        <img
          className={creditcard.image}
          src="./../illustrations/giftcard-info-orchid.svg"
          alt="orchid illustration"
        />
      </div>
    </section>
  );
}

export default Creditcard;
