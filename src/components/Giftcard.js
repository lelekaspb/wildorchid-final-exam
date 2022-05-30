import { FormattedMessage, useIntl, FormattedDate } from "react-intl";
import Navbar from "./Navbar";
import giftcard from "../styles/Giftcard.module.css";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import "../styles/day-picker.css";
import en from "date-fns/locale/en-gb";
import da from "date-fns/locale/da";
import { Context } from "./ContextWrapper";
import { useContext } from "react";

function Giftcard() {
  // for redirecting user to the payment page after form validation
  let navigate = useNavigate();
  const redirectToPayment = () => {
    navigate("/payment");
  };

  // in order to use translations in input placeholder
  const intl = useIntl();

  // fetch states and functions from context provider
  const { locale, info, dispatch } = useContext(Context);

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

  // datePicker footer
  const dpFooter = info.giftcard.date ? (
    <p>
      <FormattedMessage
        id="giftcard.datepicker.footer.selected"
        defaultMessage="Du valgte"
      />{" "}
      <FormattedDate
        value={info.giftcard.date}
        year="numeric"
        month="long"
        day="numeric"
        weekday="long"
      />
    </p>
  ) : (
    <p>
      <FormattedMessage
        id="giftcard.datepicker.footer.select"
        defaultMessage="Vælg venligst en dag."
      />
    </p>
  );
  // locale for datePicker
  const dpLocale = {
    da: da,
    en: en,
  };

  // refs for accessing input elements
  const firstNameRef = useRef("");
  const lastNameRef = useRef("");
  const emailRef = useRef("");
  const amountRef = useRef("");

  const checkForErrors = () => {
    dispatch({
      type: "fnameHelp",
      data: validateName(info.giftcard.firstName),
    });
    dispatch({ type: "lnameHelp", data: validateName(info.giftcard.lastName) });
    dispatch({ type: "emailHelp", data: validateEmail(info.giftcard.email) });
    dispatch({
      type: "amountHelp",
      data: validateAmount(info.giftcard.amount),
    });

    if (validateName(info.giftcard.firstName) === "error") {
      return firstNameRef;
    } else if (validateName(info.giftcard.lastName) === "error") {
      return lastNameRef;
    } else if (validateEmail(info.giftcard.email) === "error") {
      return emailRef;
    } else if (validateAmount(info.giftcard.amount) === "error") {
      return amountRef;
    }
  };

  const scrollToError = (errorField) => {
    const offset = errorField.current.offsetTop;
    window.scroll({
      top: offset,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // validate
    const errorField = checkForErrors();
    if (!errorField) {
      // if validated correctly, redirect to payment
      dispatch({ type: "validated", data: true });
      redirectToPayment();
    } else {
      // if not, focus on the first error field in the flow
      scrollToError(errorField);
    }
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
        <form className={giftcard.info_form} autoComplete="off">
          <fieldset>
            <div className={giftcard.name}>
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
                  autoFocus
                  ref={firstNameRef}
                  placeholder={intl.formatMessage({
                    id: "giftcard.info.first_name_placeholder",
                    defaultMessage: "Skriv dit fornavn her...",
                  })}
                  value={info.giftcard.firstName}
                  onChange={(e) => {
                    dispatch({ type: "fname", data: e.target.value });
                  }}
                  onBlur={(e) => {
                    dispatch({
                      type: "fnameHelp",
                      data: validateName(e.target.value),
                    });
                  }}
                />
                <div
                  className={`${
                    info.giftcard.firstNameHelp === "hidden"
                      ? giftcard.hidden
                      : info.giftcard.firstNameHelp === "error"
                      ? giftcard.error
                      : giftcard.success
                  }`}
                >
                  {" "}
                  {info.giftcard.firstNameHelp === "success" ? (
                    <FormattedMessage
                      id="giftcard.success"
                      defaultMessage="Godt"
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
                  ref={lastNameRef}
                  placeholder={intl.formatMessage({
                    id: "giftcard.info.last_name_placeholder",
                    defaultMessage: "Skriv dit efternavn her...",
                  })}
                  value={info.giftcard.lastName}
                  onChange={(e) => {
                    dispatch({ type: "lname", data: e.target.value });
                  }}
                  onBlur={(e) => {
                    dispatch({
                      type: "lnameHelp",
                      data: validateName(e.target.value),
                    });
                  }}
                />

                <div
                  className={`${
                    info.giftcard.lastNameHelp === "hidden"
                      ? giftcard.hidden
                      : info.giftcard.lastNameHelp === "error"
                      ? giftcard.error
                      : giftcard.success
                  }`}
                >
                  {" "}
                  {info.giftcard.lastNameHelp === "success" ? (
                    <FormattedMessage
                      id="giftcard.success"
                      defaultMessage="Godt"
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
                ref={emailRef}
                placeholder={intl.formatMessage({
                  id: "giftcard.info.email_placeholder",
                  defaultMessage: "Skriv dit efternavn her...",
                })}
                value={info.giftcard.email}
                onChange={(e) => {
                  dispatch({ type: "email", data: e.target.value });
                }}
                onBlur={(e) => {
                  dispatch({
                    type: "emailHelp",
                    data: validateEmail(e.target.value),
                  });
                }}
              />

              <div
                className={`${
                  info.giftcard.emailHelp === "hidden"
                    ? giftcard.hidden
                    : info.giftcard.emailHelp === "error"
                    ? giftcard.error
                    : giftcard.success
                }`}
              >
                {" "}
                {info.giftcard.emailHelp === "success" ? (
                  <FormattedMessage
                    id="giftcard.success"
                    defaultMessage="Godt"
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
              <span className={giftcard.directive}>
                <FormattedMessage
                  id="giftcard.amount.directive"
                  defaultMessage="Du kan vælge beløb mellem 50 og 2000"
                />
              </span>
              <input
                className={giftcard.input}
                id="giftcard_amount"
                type="text"
                ref={amountRef}
                placeholder={intl.formatMessage({
                  id: "giftcard.info.amount_placeholder",
                  defaultMessage: "Skriv dit efternavn her...",
                })}
                value={info.giftcard.amount}
                onChange={(e) => {
                  dispatch({ type: "amount", data: e.target.value });
                }}
                onBlur={(e) => {
                  dispatch({
                    type: "amountHelp",
                    data: validateAmount(e.target.value),
                  });
                }}
              />

              <div
                className={`${
                  info.giftcard.amountHelp === "hidden"
                    ? giftcard.hidden
                    : info.giftcard.amountHelp === "error"
                    ? giftcard.error
                    : giftcard.success
                }`}
              >
                {" "}
                {info.giftcard.amountHelp === "success" ? (
                  <FormattedMessage
                    id="giftcard.success"
                    defaultMessage="Godt"
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
                value={info.giftcard.note}
                onChange={(e) => {
                  dispatch({ type: "note", data: e.target.value });
                }}
              ></textarea>
            </div>
          </fieldset>

          {/* date of receiving fieldset */}
          <fieldset className={giftcard.day_picker}>
            {/* datepicker */}
            <div>
              <label className={giftcard.label} htmlFor="day_picker">
                <FormattedMessage
                  id="giftcard.info.date_label"
                  defaultMessage="Dato modtaget *"
                />
              </label>
              <DayPicker
                id="day_picker"
                mode="single"
                required
                disabled={[{ before: new Date() }]}
                locale={dpLocale[locale]}
                selected={info.giftcard.date}
                onSelect={(day) => {
                  dispatch({ type: "date", data: day });
                }}
                footer={dpFooter}
              />
            </div>
          </fieldset>

          <button
            className={giftcard.next_btn}
            type="submit"
            onClick={handleSubmit}
          >
            <FormattedMessage id="giftcard.next_btn" defaultMessage="Næste" />
          </button>
        </form>

        <section className={giftcard.giftcard_photo}>
          <div className={giftcard.photo_wrapper}>
            <img
              className={giftcard.photo}
              src="./../photos/giftcard_photo.jpg"
              alt="gift card "
            />
          </div>
        </section>
        <img
          className={giftcard.orchid}
          src="./../illustrations/giftcard-info-orchid.svg"
          alt="orchid illustration"
        />
        {/* gift card infornation form  --- end*/}
      </div>
    </>
  );
}

export default Giftcard;
