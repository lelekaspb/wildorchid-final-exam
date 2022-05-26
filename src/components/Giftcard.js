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

      default:
        throw new Error();
    }
  }

  // const handleInput = (e) => {
  //   console.log(e.target.value);
  //   setInfo({ ...info, firstName: e.target.value });
  // };

  const handleBlur = (e) => {
    console.log(e.target.value);
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

        <div className={giftcard.nav_scheme}>
          <div className={giftcard.step_done}>1</div>
          <div className={giftcard.step_middle}></div>
          <div className={giftcard.step_pending}>2</div>
        </div>

        <form className={giftcard.info_form}>
          <fieldset>
            <div className={giftcard.field}>
              <label className={giftcard.label} htmlFor="giftcard_fname">
                <FormattedMessage
                  id="giftcard.info.first_name_label"
                  defaultMessage="Fornavn *"
                />
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
                onBlur={handleBlur}
              />
              <div className={giftcard.name_hint}>
                {" "}
                {info.firstName.length < 2 ? (
                  <FormattedMessage id="giftcard.error" />
                ) : (
                  <FormattedMessage id="giftcard.success" />
                )}{" "}
              </div>
            </div>

            <div className={giftcard.lname}>
              <label className={giftcard.lname_label} htmlFor="giftcard_lname">
                <FormattedMessage
                  id="giftcard.info.last_name_label"
                  defaultMessage="Efternavn *"
                />
              </label>
              <input
                className={giftcard.lname_input}
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
                onBlur={handleBlur}
              />
              <div className={giftcard.name_hint}>
                {" "}
                {info.lastName.length < 2 ? (
                  <FormattedMessage id="giftcard.error" />
                ) : (
                  <FormattedMessage id="giftcard.success" />
                )}{" "}
              </div>
            </div>

            <div className={giftcard.email}>
              <label className={giftcard.email_label} htmlFor="giftcard_email">
                <FormattedMessage
                  id="giftcard.info.email_label"
                  defaultMessage="Email *"
                />
              </label>
              <input
                className={giftcard.email_input}
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
                onBlur={handleBlur}
              />
              <div className={giftcard.name_hint}>
                {" "}
                {info.email < 2 ? (
                  <FormattedMessage id="giftcard.error" />
                ) : (
                  <FormattedMessage id="giftcard.success" />
                )}{" "}
              </div>
            </div>

            <div className={giftcard.amount}>
              <label
                className={giftcard.amount_label}
                htmlFor="giftcard_amount"
              >
                <FormattedMessage
                  id="giftcard.info.amount_label"
                  defaultMessage="Beløb (DKK) *"
                />
              </label>
              <input
                className={giftcard.amount_input}
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
                onBlur={handleBlur}
              />
              <div className={giftcard.name_hint}>
                {" "}
                {info.amount < 2 ? (
                  <FormattedMessage id="giftcard.error" />
                ) : (
                  <FormattedMessage id="giftcard.success" />
                )}{" "}
              </div>
            </div>

            <div className={giftcard.note}>
              <label className={giftcard.note_label} htmlFor="giftcard_note">
                <FormattedMessage
                  id="giftcard.info.note_label"
                  defaultMessage="Bemærk"
                />
              </label>
              <textarea
                className={giftcard.note_input}
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
                onBlur={handleBlur}
              >
                {/* <FormattedMessage
                  id="giftcard.info.note_placeholder"
                  defaultMessage="Skriv bemærk her..."
                /> */}
              </textarea>
            </div>
          </fieldset>

          <fieldset>
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
          </fieldset>

          <button type="submit" onClick={handleSubmit}>
            next
          </button>
        </form>
      </div>
    </>
  );
}

export default Giftcard;
