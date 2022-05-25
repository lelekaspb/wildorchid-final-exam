import { FormattedMessage } from "react-intl";
import home from "./../styles/Homepage.module.css";
import Navbar from "./Navbar";

function Home() {
  return (
    <>
      <div className={home.background}>
        <Navbar activePage="home" />
        <div className={home.AllWelcomeWrap}>
          <div className={home.WelcomeWrap}>
            <h2 className={home.Welcomeh2}>
              <FormattedMessage
                id="greeting.one"
                defaultMessage="Velkommen til"
              />
            </h2>
            <h1 className={home.Welcomeh1}>Wild Orchid</h1>
            <h2 className={home.Welcomeh2}>
              <FormattedMessage
                id="greeting.two"
                defaultMessage="Vi venter på dig i vores udsøgte skønhedssklinik"
                values={{
                  breakingLine: <br />,
                }}
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
        </div>
      </div>

      <div className={home.FeatureWrap}>
        <div className={home.FeatureSectionWrap}>
          <img
            src="./icons/relax.svg"
            className={home.FeatureIcon}
            alt=""
          ></img>
          <div className={home.FeatureTitleText}>
            <h4 className={home.FeatureTitle}>
              <FormattedMessage
                id="home.relax.title"
                defaultMessage="Afslappende atmosfære"
              />
            </h4>
            <p className={home.FeatureText}>
              <FormattedMessage
                id="home.relax.text"
                defaultMessage="Hos Wild Orchid kan du glemme dine daglige bekymringer, slappe af og nyde en procedure."
              />
            </p>
          </div>
        </div>
        <div className={home.FeatureSectionWrap}>
          <img
            src="./icons/satisfaction.svg"
            className={home.FeatureIcon}
            alt=""
          ></img>
          <div className={home.FeatureTitleText}>
            <h4 className={home.FeatureTitle}>
              <FormattedMessage
                id="home.satisfaction.title"
                defaultMessage="Kundetilfredshed"
              />
            </h4>
            <p className={home.FeatureText}>
              <FormattedMessage
                id="home.satisfaction.text"
                defaultMessage="90 % af alle vores kunder er faste kunder, som bruger salonens tjenester mindst en gang om måneden."
              />
            </p>
          </div>
        </div>
        <div className={home.FeatureSectionWrap}>
          <img
            src="./icons/service.svg"
            className={home.FeatureIcon}
            alt=""
          ></img>
          <div className={home.FeatureTitleText}>
            <h4 className={home.FeatureTitle}>
              <FormattedMessage
                id="home.services.title"
                defaultMessage="Kvalitetstjenester"
              />
            </h4>
            <p className={home.FeatureText}>
              <FormattedMessage
                id="home.services.text"
                defaultMessage="Vi sætter en stor ære i vores arbejde, og vi er klar til at gå de ekstra mil for vores kunder."
              />
            </p>
          </div>
        </div>
      </div>
      <div className={home.IGsection}>
        <h2 className={home.IGtitle}>Check our Instagram out</h2>
        <div className={home.IGpics}>
          <div className={home.IGpicHover}>
            <img src="./photos/instagram-1.jpg" className={home.IGpic}></img>
          </div>
          <div className={home.IGpicHover}>
            <img src="./photos/instagram-2.jpg" className={home.IGpic}></img>
          </div>
          <div className={home.IGpicHover}>
            <img src="./photos/instagram-3.jpg" className={home.IGpic}></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
