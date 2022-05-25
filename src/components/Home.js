import { FormattedMessage } from "react-intl";
import home from "./../styles/Homepage.module.css";
import Navbar from "./Navbar";

function Home() {
  return (
    <>
      <Navbar activePage="home" />
      <div className={home.WelcomeWrap}>
        <h2 className={home.Welcomeh2}>
          <FormattedMessage id="greeting.one" defaultMessage="Velkommen til" />
        </h2>
        <h1 className={home.Welcomeh1}>Wild Orchid</h1>
        <h2 className={home.Welcomeh2}>
          <FormattedMessage
            id="greeting.two"
            defaultMessage="Vi venter på dig i vores udsøgte skønhedssklinik"
          />
        </h2>
      </div>

      <div className={home.WelcomePicWrap}>
        <div className={home.WelcomePicBorder}>
          <img
            className={home.WelcomePic}
            src="./photos/homepage-girl.jpg"
            alt=""
          ></img>
        </div>
      </div>
    </>
  );
}

export default Home;
