import React, { useEffect, useState, useReducer } from "react";
import { IntlProvider } from "react-intl";
import Danish from "./../lang/da.json";
import English from "./../lang/en.json";

export const Context = React.createContext();

function ContextWrapper(props) {
  // find preferred language from browser settings
  const lang = navigator.language.split(/[-_]/)[0]; // language without region code

  // get chosen language from sessionStorage
  // in order to see if the page has been open
  // so that the chosen language doesn't change on page reload
  const sessionLang = sessionStorage.getItem("lang");

  // gather translations in one object
  const translations = {
    da: Danish,
    en: English,
  };

  // save language and corresponding translations in states
  const [locale, setLocale] = useState(sessionLang || lang);
  const [messages, setMessages] = useState(
    translations[sessionLang] || translations[lang]
  );

  // change language on button click
  const changeLang = (e) => {
    const newLocale = e.target.getAttribute("data-lang");
    setLocale(newLocale);
    setMessages(translations[newLocale]);
  };

  // every time language changes, re-set the chosen language in sessionStorage
  useEffect(() => {
    sessionStorage.setItem("lang", locale);
  }, [locale]);

  // hamburger menu state for tracking whether it's open or not
  const [menuOpen, setMenuOpen] = useState(false);

  // gift card information state and functionn for manipulating it
  // initial info object (state)
  const initInfo = {
    giftcard: {
      firstName: "",
      lastName: "",
      email: "",
      amount: "",
      note: "",
      firstNameHelp: "hidden",
      lastNameHelp: "hidden",
      emailHelp: "hidden",
      amountHelp: "hidden",
      date: new Date(),
      validated: false,
      reset: false,
    },
    creditcard: {
      number: "",
      numberHelp: false,
      name: "",
      nameHelp: false,
      expiry: "",
      expiryHelp: false,
      expiryInvalid: false,
      cvc: "",
      cvcHelp: false,
    },
  };

  // use reducer hook for updating info state
  const [info, dispatch] = useReducer(reducer, initInfo);

  // reducer function to update info state
  function reducer(info, action) {
    switch (action.type) {
      case "fname":
        return {
          ...info,
          giftcard: { ...info.giftcard, firstName: action.data },
        };
      case "lname":
        return {
          ...info,
          giftcard: { ...info.giftcard, lastName: action.data },
        };
      case "email":
        return { ...info, giftcard: { ...info.giftcard, email: action.data } };
      case "amount":
        return { ...info, giftcard: { ...info.giftcard, amount: action.data } };
      case "note":
        return { ...info, giftcard: { ...info.giftcard, note: action.data } };
      case "fnameHelp":
        return {
          ...info,
          giftcard: { ...info.giftcard, firstNameHelp: action.data },
        };
      case "lnameHelp":
        return {
          ...info,
          giftcard: { ...info.giftcard, lastNameHelp: action.data },
        };
      case "emailHelp":
        return {
          ...info,
          giftcard: { ...info.giftcard, emailHelp: action.data },
        };
      case "amountHelp":
        return {
          ...info,
          giftcard: { ...info.giftcard, amountHelp: action.data },
        };
      case "date":
        return { ...info, giftcard: { ...info.giftcard, date: action.data } };
      case "validated":
        return {
          ...info,
          giftcard: { ...info.giftcard, validated: action.data },
        };
      case "reset":
        return { ...info, giftcard: { ...info.giftcard, reset: action.data } };

      default:
        throw new Error();
    }
  }

  useEffect(() => {
    if (info.reset) {
      dispatch({ type: "fname", data: "" });
      dispatch({ type: "lname", data: "" });
      dispatch({ type: "email", data: "" });
      dispatch({ type: "amount", data: "" });
      dispatch({ type: "note", data: "" });
      dispatch({ type: "fnameHelp", data: "hidden" });
      dispatch({ type: "lnameHelp", data: "hidden" });
      dispatch({ type: "emailHelp", data: "hidden" });
      dispatch({ type: "amountHelp", data: "hidden" });
      dispatch({ type: "date", data: new Date() });
      dispatch({ type: "validated", data: false });
      dispatch({ type: "reset", data: false });
    }
  }, [info.reset]);

  return (
    <Context.Provider
      value={{ locale, changeLang, menuOpen, setMenuOpen, info, dispatch }}
    >
      <IntlProvider messages={messages} locale={locale}>
        {props.children}
      </IntlProvider>
    </Context.Provider>
  );
}

export default ContextWrapper;
