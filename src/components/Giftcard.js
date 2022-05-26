import { FormattedMessage, useIntl } from "react-intl";
import Navbar from "./Navbar";
import giftcard from "../styles/Giftcard.module.css";
import { useNavigate } from "react-router-dom";
import { useReducer } from "react";

function Giftcard() {
  let navigate = useNavigate();
  const redirectToPayment = () => {
    navigate("/payment");
  };

  // in order to use translations in input placeholder
  const intl = useIntl();

  // initial info object (state)
  const initInfo = {
    firstName: "",
    lastName: "",
    email: "",
    amount: "",
    note: "",
    firstNameHelp: "hidden",
    lastNameHelp: "hidden",
    emailHelp: "hidden",
    amountHelp: "hidden",
    date: "",
  };

  // use reducer hook for updating info state
  const [info, dispatch] = useReducer(reducer, initInfo);

  // reducer function to update info state
  function reducer(info, action) {
    switch (action.type) {
      case "fname":
        return { ...info, firstName: action.data };
      case "lname":
        return { ...info, lastName: action.data };
      case "email":
        return { ...info, email: action.data };
      case "amount":
        return { ...info, amount: action.data };
      case "note":
        return { ...info, note: action.data };
      case "fnameHelp":
        return { ...info, firstNameHelp: action.data };
      case "lnameHelp":
        return { ...info, lastNameHelp: action.data };
      case "emailHelp":
        return { ...info, emailHelp: action.data };
      case "amountHelp":
        return { ...info, amountHelp: action.data };
      case "date":
        return { ...info, date: action.data };

      default:
        throw new Error();
    }
  }

  // validating functions for required inputs
  const validateName = (string) => {
    const spacesRegex = new RegExp("^ +$");
    if (string.match(spacesRegex) || string.length < 2) {
      return "error";
    } else {
      return "success";
    }
  };

  const validateEmail = (string) => {
    const emailRegex = new RegExp(
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    );
    if (string.match(emailRegex)) {
      return "success";
    } else {
      return "error";
    }
  };

  const validateAmount = (string) => {
    const amountRegex = new RegExp("^[0-9]+$");
    if (string.match(amountRegex)) {
      const num = parseInt(string);
      if (num > 49 && num < 2001) {
        return "success";
      } else {
        return "error";
      }
    } else {
      return "error";
    }
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
      <div className={giftcard.wrapper}>
        <h2 className={giftcard.heading}>
          <FormattedMessage
            id="navigation.giftcard"
            defaultMessage="Gavekort"
          />
        </h2>

        {/* navigation scheme */}
        <div className={giftcard.nav_scheme}>
          <div className={giftcard.step_done}>1</div>
          <div className={giftcard.step_middle}></div>
          <div className={giftcard.step_pending}>2</div>
        </div>

        {/* gift card infornation form */}
        <form className={giftcard.info_form} autoComplete="on">
          <fieldset>
            {/* first name field */}
            <div className={giftcard.field}>
              <label className={giftcard.label} htmlFor="giftcard_fname">
                <FormattedMessage
                  id="giftcard.info.first_name_label"
                  defaultMessage="Fornavn"
                />{" "}
                {"*"}
              </label>
              <input
                className={giftcard.input}
                type="text"
                id="giftcard_fname"
                name="fname"
                placeholder={intl.formatMessage({
                  id: "giftcard.info.first_name_placeholder",
                  defaultMessage: "Skriv dit fornavn her...",
                })}
                value={info.firstName}
                onChange={(e) => {
                  dispatch({ type: "fname", data: e.target.value });
                }}
                onBlur={(e) => {
                  dispatch({
                    type: "fnameHelp",
                    data: validateName(e.target.value),
                  });
                }}
                onInput={(e) => {
                  dispatch({
                    type: "fnameHelp",
                    data: validateName(e.target.value),
                  });
                }}
              />
              <div
                className={`${
                  info.firstNameHelp === "hidden"
                    ? giftcard.hidden
                    : info.firstNameHelp === "error"
                    ? giftcard.error
                    : giftcard.success
                }`}
              >
                {" "}
                {info.firstNameHelp === "success" ? (
                  <FormattedMessage
                    id="giftcard.success"
                    defaultMessage="Dejligt"
                  />
                ) : (
                  <FormattedMessage
                    id="giftcard.name.error"
                    defaultMessage="{value} kan kun bestå af bogstaver"
                    values={{
                      value: (
                        <FormattedMessage
                          id="giftcard.info.first_name_label"
                          defaultMessage="Fornavn"
                        />
                      ),
                    }}
                  />
                )}{" "}
              </div>
            </div>

            {/* last name field */}
            <div className={giftcard.field}>
              <label className={giftcard.label} htmlFor="giftcard_lname">
                <FormattedMessage
                  id="giftcard.info.last_name_label"
                  defaultMessage="Efternavn"
                />
                {" *"}
              </label>
              <input
                className={giftcard.input}
                type="text"
                id="giftcard_lname"
                placeholder={intl.formatMessage({
                  id: "giftcard.info.last_name_placeholder",
                  defaultMessage: "Skriv dit efternavn her...",
                })}
                value={info.lastName}
                onChange={(e) => {
                  dispatch({ type: "lname", data: e.target.value });
                }}
                onBlur={(e) => {
                  dispatch({
                    type: "lnameHelp",
                    data: validateName(e.target.value),
                  });
                }}
                onInput={(e) => {
                  dispatch({
                    type: "lnameHelp",
                    data: validateName(e.target.value),
                  });
                }}
              />

              <div
                className={`${
                  info.lastNameHelp === "hidden"
                    ? giftcard.hidden
                    : info.lastNameHelp === "error"
                    ? giftcard.error
                    : giftcard.success
                }`}
              >
                {" "}
                {info.lastNameHelp === "success" ? (
                  <FormattedMessage
                    id="giftcard.success"
                    defaultMessage="Dejligt"
                  />
                ) : (
                  <FormattedMessage
                    id="giftcard.name.error"
                    defaultMessage="{value} kan kun bestå af bogstaver"
                    values={{
                      value: (
                        <FormattedMessage
                          id="giftcard.info.last_name_label"
                          defaultMessage="Efternavn"
                        />
                      ),
                    }}
                  />
                )}{" "}
              </div>
            </div>

            {/* email field */}
            <div className={giftcard.field}>
              <label className={giftcard.label} htmlFor="giftcard_email">
                <FormattedMessage
                  id="giftcard.info.email_label"
                  defaultMessage="Email *"
                />
              </label>
              <input
                className={giftcard.input}
                id="giftcard_email"
                type="text"
                placeholder={intl.formatMessage({
                  id: "giftcard.info.email_placeholder",
                  defaultMessage: "Skriv dit efternavn her...",
                })}
                value={info.email}
                onChange={(e) => {
                  dispatch({ type: "email", data: e.target.value });
                }}
                onBlur={(e) => {
                  dispatch({
                    type: "emailHelp",
                    data: validateEmail(e.target.value),
                  });
                }}
                onInput={(e) => {
                  dispatch({
                    type: "emailHelp",
                    data: validateEmail(e.target.value),
                  });
                }}
              />

              <div
                className={`${
                  info.emailHelp === "hidden"
                    ? giftcard.hidden
                    : info.emailHelp === "error"
                    ? giftcard.error
                    : giftcard.success
                }`}
              >
                {" "}
                {info.emailHelp === "success" ? (
                  <FormattedMessage
                    id="giftcard.success"
                    defaultMessage="Dejligt"
                  />
                ) : (
                  <FormattedMessage
                    id="giftcard.email.error"
                    defaultMessage="Indtast venligst en gyldig e-mailadress"
                  />
                )}{" "}
              </div>
            </div>

            {/* amount field */}
            <div className={giftcard.field}>
              <label className={giftcard.label} htmlFor="giftcard_amount">
                <FormattedMessage
                  id="giftcard.info.amount_label"
                  defaultMessage="Beløb (DKK) *"
                />
              </label>
              <input
                className={giftcard.input}
                id="giftcard_amount"
                type="text"
                placeholder={intl.formatMessage({
                  id: "giftcard.info.amount_placeholder",
                  defaultMessage: "Skriv dit efternavn her...",
                })}
                value={info.amount}
                onChange={(e) => {
                  dispatch({ type: "amount", data: e.target.value });
                }}
                onBlur={(e) => {
                  dispatch({
                    type: "amountHelp",
                    data: validateAmount(e.target.value),
                  });
                }}
                onInput={(e) => {
                  dispatch({
                    type: "amountHelp",
                    data: validateAmount(e.target.value),
                  });
                }}
              />

              <div
                className={`${
                  info.amountHelp === "hidden"
                    ? giftcard.hidden
                    : info.amountHelp === "error"
                    ? giftcard.error
                    : giftcard.success
                }`}
              >
                {" "}
                {info.amountHelp === "success" ? (
                  <FormattedMessage
                    id="giftcard.success"
                    defaultMessage="Dejligt"
                  />
                ) : (
                  <FormattedMessage
                    id="giftcard.amount.error"
                    defaultMessage="Indtast venligst et beløb mellem 50 og 2000, kun cifre"
                  />
                )}{" "}
              </div>
            </div>

            {/* note field */}
            <div className={giftcard.field}>
              <label className={giftcard.label} htmlFor="giftcard_note">
                <FormattedMessage
                  id="giftcard.info.note_label"
                  defaultMessage="Bemærk"
                />
              </label>
              <textarea
                rows="6"
                className={giftcard.input}
                id="giftcard_note"
                type="text"
                placeholder={intl.formatMessage({
                  id: "giftcard.info.note_placeholder",
                  defaultMessage: "Skriv bemærk her...",
                })}
                value={info.note}
                onChange={(e) => {
                  dispatch({ type: "note", data: e.target.value });
                }}
              ></textarea>
            </div>
          </fieldset>

          {/* date of receiving fieldset */}
          <fieldset>
            {/* date radio inputs */}
            <div className={giftcard.date}>
              <legend className={giftcard.date_label}>
                <FormattedMessage
                  id="giftcard.info.date_label"
                  defaultMessage="Dato modtaget *"
                />
              </legend>
              <label htmlFor="giftcard_now">
                <input type="radio" id="giftcard_now" name="date" />
                <FormattedMessage
                  id="giftcard.info.now_label"
                  defaultMessage="Nu"
                />
              </label>
              <label htmlFor="giftcard_later">
                <input type="radio" id="giftcard_later" name="date" />
                <FormattedMessage
                  id="giftcard.info.later_label"
                  defaultMessage="Senere"
                />
              </label>
            </div>

            {/* datepicker */}
            <div></div>
          </fieldset>

          <button type="submit" onClick={handleSubmit}>
            next
          </button>
        </form>
        {/* gift card infornation form  --- end*/}
      </div>
    </>
  );
}

export default Giftcard;
