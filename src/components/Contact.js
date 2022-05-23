// import text from "../styles/Text.module.css";
import contact from "../styles/Contact.module.css";
import { FormattedMessage } from "react-intl";
import Navbar from "./Navbar";

function Contact() {
  return (
    <>
      <Navbar activePage="contact" />
      <div>
        <h2 className={contact.title}>
          <FormattedMessage id="navigation.contact" defaultMessage="Kontakt" />
        </h2>

        <div className={contact.background}>
          <div className={contact.ContactWrapper}>
            <div className={contact.CategoryWrapper}>
              <div className={contact.CategoryPadding}>
                <div className={contact.TitleIconWrap}>
                  <img
                    src="./icons/clock.svg"
                    className={contact.ContactIcon}
                    alt=""
                  ></img>
                  <h3 className={contact.ContactTitle}>
                    <FormattedMessage
                      id="about.hours"
                      defaultMessage="Åbningstider"
                    />
                  </h3>
                </div>
                <p className={contact.ContactText}>
                  <FormattedMessage
                    id="about.hours.one"
                    defaultMessage="Tirsdag - Torsdag: 11 - 19"
                  />
                </p>
                <p className={contact.ContactText}>
                  <FormattedMessage
                    id="about.hours.two"
                    defaultMessage="Fredag: 9 - 17"
                  />
                </p>
                <p className={contact.ContactText}>
                  <FormattedMessage
                    id="about.hours.three"
                    defaultMessage="Lørdag: 9 - 16"
                  />
                </p>
                <p className={contact.ContactText}>
                  <FormattedMessage
                    id="about.hours.four"
                    defaultMessage="Søndag - Mandag: Lukket"
                  />
                </p>
              </div>

              <div className={contact.CategoryPadding}>
                <div className={contact.TitleIconWrap}>
                  <img
                    src="./icons/address.svg"
                    className={contact.ContactIcon}
                    alt=""
                  ></img>
                  <h3 className={contact.ContactTitle}>Adresse</h3>
                </div>
                <div>
                  <p className={contact.ContactText}>Rolighedsvej 19,</p>
                  <p className={contact.ContactText}>1958 Frederiksberg</p>
                  <p className={contact.ContactText}>
                    Email: info@wildorchid.dk
                  </p>
                  <p className={contact.ContactText}>
                    Telefon: +45 93 93 81 63
                  </p>
                </div>
              </div>
            </div>

            <div>
              <img
                src="./illustrations/burger-menu-orchid.svg"
                className={contact.illustration}
                alt=""
              ></img>
            </div>
          </div>
        </div>

        <h2 className={contact.title}>
          <FormattedMessage id="about.find" defaultMessage="Find Vej" />
        </h2>

        <div className={contact.background}>
          <div className={contact.FindContainer}>
            <div className={contact.FindIconTextWrap}>
              <div className={contact.TitleIconWrap}>
                <img src="./icons/metro.svg" className={contact.FindIcon}></img>
                <h4 className={contact.FindTitle}>METRO</h4>
              </div>
              <p className={contact.FindText}>
                <FormattedMessage
                  id="about.find.metro.body"
                  defaultMessage="M1 og M2 ligger 800 meter fra klinikken. Benyt stoppestedet “Forum”. M3 linjen ligger 240 meter fra klinikken. Benyt stoppestedet “Aksel Møllers Have”."
                />
              </p>
            </div>
            <div className={contact.FindIconTextWrap}>
              <div className={contact.TitleIconWrap}>
                <img src="./icons/bus.svg" className={contact.FindIcon}></img>
                <h4 className={contact.FindTitle}>BUS</h4>
              </div>
              <p className={contact.FindText}>
                <FormattedMessage
                  id="about.find.bus.body"
                  defaultMessage="Bus 2A har stoppested 150 meter fra klinikken. Benyt stoppestedet “Falkoner Allé (Godthåbsvej)”. Bus 18 har stoppested 240 meter fra klinikken. Benyt stoppestedet “Rolighedsvej (Falkoner Allé)”."
                />
              </p>
            </div>
            <div className={contact.FindIconTextWrap}>
              <div className={contact.TitleIconWrap}>
                <img src="./icons/car.svg" className={contact.FindIcon}></img>
                <h4 className={contact.FindTitle}>
                  <FormattedMessage
                    id="about.find.parking.title"
                    defaultMessage="PARKERING"
                  />
                </h4>
              </div>
              <p className={contact.FindText}>
                <FormattedMessage
                  id="about.find.parking.body"
                  defaultMessage="Der er parkeringsmuligheder på sidegaderne til Rolighedsvej. Her er der 2 timers gratis parkering. Benyt Easypark mobil-app for at se tilgængelighed."
                />
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
