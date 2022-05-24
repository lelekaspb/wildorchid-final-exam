// import text from "../styles/Text.module.css";
import contact from "../styles/Contact.module.css";
import { useIntl, FormattedMessage } from "react-intl";
import Navbar from "./Navbar";

function Contact() {
  const intl = useIntl();
  return (
    <>
      <Navbar activePage="contact" />
      <div>
        <h2 className={contact.title}>
          <FormattedMessage id="navigation.contact" defaultMessage="Kontakt" />
        </h2>

        <div className={contact.BackgroundWrap}>
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

              <div className={contact.IllustrationWrap}>
                <img
                  src="./illustrations/burger-menu-orchid.svg"
                  className={contact.illustration}
                  alt=""
                ></img>
              </div>
            </div>
          </div>
        </div>

        <h2 className={contact.title}>
          <FormattedMessage id="about.find" defaultMessage="Find Vej" />
        </h2>

        <div className={contact.FindBackground}>
          <div className={contact.FindContainer}>
            <div className={contact.FindIconTextWrap}>
              <div className={contact.FindTitleIconWrap}>
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
              <div className={contact.FindTitleIconWrap}>
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
              <div className={contact.FindTitleIconWrap}>
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

        {/* <iframe
          title="wildorchid"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2249.236726178961!2d12.53938015182533!3d55.68487198043961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465253f591c5993d%3A0x1011c06cef26fe04!2sWild%20Orchid!5e0!3m2!1sen!2sse!4v1653394275961!5m2!1sen!2sse"
          width="100px"
          height="450px"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe> */}
        <div className={` ${contact.MapWrap} ${contact.MobileHidden}  `}>
          <iframe
            className={contact.map}
            title="maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2249.236726178961!2d12.53938015182533!3d55.68487198043961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465253f591c5993d%3A0x1011c06cef26fe04!2sWild%20Orchid!5e0!3m2!1sen!2sse!4v1653394566096!5m2!1sen!2sse"
            // width="1000"
            // height="600"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className={contact.TitleFormWrap}>
          <div className={contact.TitleIconWrap}>
            <img src="./icons/write.svg" className={contact.WriteIcon}></img>
            <h2 className={contact.WriteTitle}>
              <FormattedMessage
                id="contact.title"
                defaultMessage="Skriv til os"
              />
            </h2>
          </div>
          <form>
            <div className={contact.LabelInputWrap}>
              <label for="name">
                <FormattedMessage id="contact.name" defaultMessage="Navn *" />
              </label>
              <input
                type="text"
                name="name"
                placeholder={intl.messages["contact.name.placeholder"]}
                className={contact.SmallInput}
                required
              ></input>
            </div>
            <div className={contact.LabelInputWrap}>
              <label for="email">Email</label>
              <input
                type="email"
                name="email"
                placeholder={intl.messages["contact.email.placeholder"]}
                className={contact.SmallInput}
              ></input>
            </div>
            <div className={contact.LabelInputWrap}>
              <label for="tel">
                <FormattedMessage id="contact.phone" defaultMessage="Telefon" />
              </label>
              <input
                type="tel"
                name="tel"
                placeholder={intl.messages["contact.phone.placeholder"]}
                className={contact.SmallInput}
                required
              ></input>
            </div>

            <div className={contact.LabelInputWrap}>
              <label for="inquiry">
                <FormattedMessage
                  id="contact.inquiry"
                  defaultMessage="Besked *"
                />
              </label>
              <textarea
                name="textarea"
                placeholder={intl.messages["contact.inquiry.placeholder"]}
                className={contact.BigInput}
                required
              ></textarea>
            </div>
            <input
              className={contact.ContactButton}
              type="submit"
              value="SEND"
            ></input>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
