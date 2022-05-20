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
          src="./photos/"
          alt=""
        ></img>
      </div>
    </>
  );
}

export default AboutUs;
