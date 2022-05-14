import React, { useEffect, useState } from "react";
import { IntlProvider } from "react-intl";
import Danish from "../lang/da.json";
import English from "../lang/en.json";

export const Context = React.createContext();

function IntlWrapper(props) {
  // find preferred language from browser settings
  const lang = navigator.language.split(/[-_]/)[0]; // language without region code

  // check if the page has been open and language chosen
  // so that chosen language doesn't change on page reload
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

  return (
    <Context.Provider value={{ locale, changeLang }}>
      <IntlProvider messages={messages} locale={locale}>
        {props.children}
      </IntlProvider>
    </Context.Provider>
  );
}

export default IntlWrapper;
