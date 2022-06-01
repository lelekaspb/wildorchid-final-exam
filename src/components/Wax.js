import { FormattedMessage } from "react-intl";
import waxing from "./../procedures/waxing.json";
import sugaring from "./../procedures/sugaring.json";
import styles from "./../styles/Procedures.module.css";
import { getWaxingDOMProcedures } from "./../utilities/procedures.js";

function Wax() {
  const waxingProcedures = getWaxingDOMProcedures(waxing);
  const sugaringProcedures = getWaxingDOMProcedures(sugaring);

  return (
    <section className={styles.section}>
      <article className={styles.products}>
        <picture className={styles.products_img_wrapper}>
          <source type="image/webp" srcSet="./../photos/waxing_products.webp" />
          <source type="image/jpeg" srcSet="./../photos/waxing_products.jpg" />
          <img
            className={styles.products_img}
            src="./../photos/waxing_products.jpg"
            alt="waxing products"
          />
        </picture>

        <div className={styles.products_text}>
          <p>
            <FormattedMessage
              id="services.waxing.intro_one"
              defaultMessage="Hos Wild Orchid fjerner vi hår med sukkerpasta og med voks."
            />
          </p>
          <p>
            <FormattedMessage
              id="services.waxing.intro_two"
              defaultMessage="Vi bruger højkvalitets, EU-producerede produkter i voks- og sukkerbehandlingsprocedurerne. Med disse produkter sørger vi for, at hår ikke knækker under indgrebet, men fjernes med en hårsæk. Det betyder, at hårhuden ser glattere ud, og håret vokser langsommere."
            />
          </p>
          <p>
            <FormattedMessage
              id="services.waxing.intro_three"
              defaultMessage="Over en længere periode med hårfjerning opnås så meget reduktion af hårvæksten, at vækstfasen stoppes."
            />
          </p>
          <p>
            <FormattedMessage
              id="services.waxing.intro_four"
              defaultMessage="Hver voks-/sukkerbehandling inkluderer {value}"
              values={{
                value: (
                  <strong>
                    {""}
                    {
                      <FormattedMessage
                        id="services.waxing.ingrown_hair"
                        defaultMessage="indgroet hår behandling"
                      />
                    }
                    {""}
                  </strong>
                ),
              }}
            />
          </p>
        </div>
      </article>

      <article className={styles.procedures}>
        <section className={styles.sugaring}>
          <div className={styles.table_header}>
            <span className={styles.table_name}>
              <FormattedMessage
                id="services.sugaring"
                defaultMessage="Sugaring"
              />
            </span>
            <span className={styles.table_price_smaller}>
              <FormattedMessage
                id="services.waxing.before_six_weeks"
                defaultMessage="Inden 6 uger"
              />
            </span>
            <span className={styles.table_price_bigger}>
              <FormattedMessage
                id="services.waxing.after_six_weeks"
                defaultMessage="Efter 6 uger*"
              />
            </span>
          </div>
          {sugaringProcedures}
          <div className={styles.book_waxing}>
            <a
              className={styles.book_btn}
              href="https://wildorchid.onlinebooq.dk/"
            >
              <FormattedMessage id="book" defaultMessage="Book nu" />
            </a>
            <span className={styles.valid_for}>
              <FormattedMessage
                id="services.waxing.valid_for"
                defaultMessage="*gælder også for barbering eller førstegangskunde"
              />
            </span>
          </div>
        </section>
        <section className={styles.waxing}>
          <div className={styles.table_header}>
            <span className={styles.table_name}>
              <FormattedMessage id="services.waxing" defaultMessage="Voks" />
            </span>
            <span className={styles.table_price_smaller}>
              <FormattedMessage
                id="services.waxing.before_six_weeks"
                defaultMessage="Inden 6 uger"
              />
            </span>
            <span className={styles.table_price_bigger}>
              <FormattedMessage
                id="services.waxing.after_six_weeks"
                defaultMessage="Efter 6 uger*"
              />
            </span>
          </div>
          {waxingProcedures}
          <div className={styles.book_waxing}>
            <a
              className={styles.book_btn}
              href="https://wildorchid.onlinebooq.dk/"
            >
              <FormattedMessage id="book" defaultMessage="Book nu" />
            </a>
            <span className={styles.valid_for}>
              <FormattedMessage
                id="services.waxing.valid_for"
                defaultMessage="*gælder også for barbering eller førstegangskunde"
              />
            </span>
          </div>
        </section>
      </article>

      <article className={styles.gallery}>
        <picture>
          <source
            type="image/webp"
            srcSet="./../photos/waxing_gallery_1.webp"
          />
          <source type="image/jpeg" srcSet="./../photos/waxing_gallery_1.jpg" />
          <img
            className={styles.gallery_img}
            src="./../photos/waxing_gallery_1.jpg"
            alt="waxing gallery "
          />
        </picture>
        <picture>
          <source
            type="image/webp"
            srcSet="./../photos/waxing_gallery_2.webp"
          />
          <source type="image/jpeg" srcSet="./../photos/waxing_gallery_2.jpg" />
          <img
            className={styles.gallery_img}
            src="./../photos/waxing_gallery_2.jpg"
            alt="waxing gallery "
          />
        </picture>
        <picture>
          <source
            type="image/webp"
            srcSet="./../photos/waxing_gallery_3.webp"
          />
          <source type="image/jpeg" srcSet="./../photos/waxing_gallery_3.jpg" />
          <img
            className={styles.gallery_img}
            src="./../photos/waxing_gallery_3.jpg"
            alt="waxing gallery "
          />
        </picture>
      </article>
    </section>
  );
}

export default Wax;
