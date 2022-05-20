import text from "../styles/Text.module.css";
import about from "../styles/About.module.css";
import { FormattedMessage } from "react-intl";
import Navbar from "./Navbar";

function AboutUs() {
  return (
    <>
      <Navbar activePage="about_us" />
      <div className={` ${about.div} `}>
        <h2 className={` ${about.title} `}>
          <FormattedMessage id="navigation.about_us" defaultMessage="Om os" />
        </h2>

        <img
          className={` ${about.FrontPic} ${about.FrontHidden} `}
          src="./photos/Salon-outside.jpg"
          alt=""
        ></img>
      </div>

      <div className={` ${about.section} `}>
        <div className={` ${about.SubSection} `}>
          <img
            src="./photos/Salon.jpg"
            className={` ${about.SectionPic} `}
            alt=""
          ></img>
          <p>
            Hos Wild Orchid er du sikker på at få en god og grundig behandling -
            uanset hvilken du vælger. Julia Kurkova elsker sit arbejde med
            skønhedsbehandlinger og går op i at levere en god service og
            fantastiske behandlinger hver gang. Julia Kurkova har arbejdet med
            skønhed siden 2014 og er efterhånden en ekspert inden for de
            behandlinger, hun tilbyder.
          </p>
        </div>

        <div className={` ${about.SubSection} `}>
          <img
            src="./photos/Clean.jpg"
            className={` ${about.SectionPic} `}
            alt=""
          ></img>
          <p>
            Hos Wild Orchid vil vi sørge for, at du er sikker. Vi tager vores
            forholdsregler for at sikre, at ingen smitte spredes fra én kunde
            til en anden. For at opnå dette bruger vi engangsværktøj og
            steriliserer engangsudstyr korrekt. Vi tager også særligt hensyn til
            vores genanvendelige udstyr. Alle instrumenter vi bruger gennemgår
            en 4-trins rengøringsproces. Redskaberne er behandlet med
            desinficerende spray; for det andet, derefter vasket for at sikre,
            at der ikke er nogen hudpartikler tilbage efter en procedure;
            instrumenterne udsættes for varmluftsterilisering; og til sidst
            lægges værktøjerne i en UV-sterilisator, hvor de opbevares indtil
            næste procedure.
          </p>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
