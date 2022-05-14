import React, { useEffect, useState } from "react";
import { IntlProvider } from "react-intl";
import Danish from "../lang/da.json";
import English from "../lang/en.json";

export const Context = React.createContext();

function IntlWrapper(props) {
  const lang = navigator.language.split(/[-_]/)[0]; // language without region code
  const sessionLang = sessionStorage.getItem("lang");

  const translations = {
    da: Danish,
    en: English,
  };

  const [locale, setLocale] = useState(sessionLang || lang);
  const [messages, setMessages] = useState(
    translations[sessionLang] || translations[lang]
  );

  const changeLang = (e) => {
    const newLocale = e.target.getAttribute("data-lang");
    setLocale(newLocale);
    setMessages(translations[newLocale]);
  };

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
