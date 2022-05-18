import text from "../styles/Text.module.css";
import { FormattedMessage } from "react-intl";
import Navbar from "./Navbar";
import { useContext } from "react";
import { Context } from "./ContextWrapper";

function AboutUs() {
  const context = useContext(Context);
  console.log(context.menuOpen);
  return (
    <>
      <Navbar activePage="about_us" />
      <div>
        <h2>
          <FormattedMessage id="navigation.about_us" defaultMessage="Om os" />
        </h2>
        <p className={text.header}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen .
        </p>
      </div>
    </>
  );
}

export default AboutUs;
