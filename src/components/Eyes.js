import { FormattedMessage } from "react-intl";
import data from "../procedures/eyes.json";
import styles from "../styles/Procedures.module.css";

function Eyes() {
  const procedures = data.map((procedure, index) => {
    return (
      <div key={index} className={styles.line}>
        <span className={styles.name}>
          <FormattedMessage
            id={procedure.translId}
            defaultMessage={procedure.translDefould}
          />
        </span>
        <span className={styles.price}> {procedure.price},- </span>
      </div>
    );
  });
  return (
    <section className={styles.section}>
      <article className={styles.products}>
        <div className={styles.products_img_wrapper}>
          <img
            className={styles.products_img}
            src="../photos/eyes_products.jpg"
            alt="brows and lashes products"
          />
        </div>
        <div className={styles.products_text}>
          <p>
            <FormattedMessage
              id="services.eyes.intro_one"
              defaultMessage="Vi farver bryn og vipper, og vi tilbyder både Lash Lift og vippeextensions."
            />
          </p>
          <p>
            <FormattedMessage
              id="services.eyes.intro_two"
              defaultMessage="Med Lash Lift løfter og former vi dine naturlige øjenvipper, så de fremstår buede og større. Det åbner øjnene op og vipperne virker længere. Effekten efter behandlingen varer i cirka fire uger."
            />
          </p>
          <p>
            <FormattedMessage
              id="services.eyes.intro_three"
              defaultMessage="Vi bruger kendte og betroede mærker, som kombineret med vores professionalisme giver flotte resultater. De mærker, vi bruger, giver os et bredt udvalg af nuancer, som vi kan blande for at matche enhver hudtype og hårfarve."
            />
          </p>
        </div>
      </article>
      <article className={styles.procedures}>
        {procedures}
        <div className={styles.book}>
          <a
            className={styles.book_btn}
            href="https://wildorchid.onlinebooq.dk/"
          >
            <FormattedMessage id="book" defaultMessage="Book nu" />
          </a>
        </div>
      </article>
      <article className={styles.gallery}>
        <img
          className={styles.gallery_img}
          src="../photos/eyes_gallery_3.jpg"
          alt="brows and lashes gallery "
        />
        <img
          className={styles.gallery_img}
          src="../photos/eyes_gallery_2.jpg"
          alt="brows and lashes gallery "
        />
        <img
          className={styles.gallery_img}
          src="../photos/eyes_gallery_1.jpg"
          alt="brows and lashes gallery "
        />
      </article>
    </section>
  );
}

export default Eyes;
