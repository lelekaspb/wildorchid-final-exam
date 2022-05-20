import { useContext } from "react";
import { Context } from "./IntlWrapper";
import { FormattedMessage } from "react-intl";
import footer from "../styles/Footer.module.css";

export default function Footer({ activePage }) {
  return (
    <footer>
      <div className={` ${footer.FlexWrap} `}>
        <div className={` ${footer.Category} `}>
          <h1 className={` ${footer.CategoryName} `}>
            <FormattedMessage id="footer.hours" defaultMessage="Åbningstider" />
          </h1>
          <div className={` ${footer.CategoryTextDiv} `}>
            <p className={` ${footer.CategoryText} `}>
              <FormattedMessage
                id="footer.hours.one"
                defaultMessage="Tirsdag - Torsdag: 11 - 19"
              />
            </p>
            <p className={` ${footer.CategoryText} `}>
              <FormattedMessage
                id="footer.hours.two"
                defaultMessage="Fredag: 9 - 17"
              />
            </p>
            <p className={` ${footer.CategoryText} `}>
              <FormattedMessage
                id="footer.hours.three"
                defaultMessage="Lørdag: 9 - 16"
              />
            </p>
            <p className={` ${footer.CategoryText} `}>
              <FormattedMessage
                id="footer.hours.four"
                defaultMessage="Søndag - Mandag: Lukket"
              />
            </p>
          </div>
        </div>

        <div className={` ${footer.Category} `}>
          <h1 className={` ${footer.CategoryName} `}>
            <FormattedMessage id="footer.address" defaultMessage="Adresse" />
          </h1>
          <div className={` ${footer.CategoryTextDiv} `}>
            <p className={` ${footer.CategoryText} `}>Rolighedsvej 19,</p>
            <p className={` ${footer.CategoryText} `}>1958 Frederiksberg</p>
            <div className={` ${footer.CategoryContact} `}></div>
            <p className={` ${footer.CategoryText} `}>info@wildorchid.dk</p>
            <p className={` ${footer.CategoryText} `}>+45 93 93 81 63</p>
          </div>
        </div>

        <div className={` ${footer.Category} `}>
          <h1 className={` ${footer.CategoryName} `}>
            <FormattedMessage id="footer.follow" defaultMessage="Følg oss" />
          </h1>
          <div className={` ${footer.IconGroup} `}>
            <a href="https://www.facebook.com/WildOrchidDk/" target="_blank">
              <img
                className={` ${footer.icon} `}
                src="./icons/Facebook.svg"
                alt=""
              ></img>
            </a>

            <a href="https://www.instagram.com/wildorchiddk/" target="_blank">
              <img
                className={` ${footer.icon} `}
                src="./icons/Instagram.svg"
                alt=""
              ></img>
            </a>
          </div>
        </div>
      </div>

      <p className={` ${footer.CVRnumber} `}>
        <FormattedMessage
          id="footer.cvr"
          defaultMessage="CVR-nummer: 37892726"
        />
      </p>
    </footer>
  );
}
