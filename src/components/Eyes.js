import { FormattedMessage } from "react-intl";
import data from "./../procedures/eyes.json";
import styles from "./../styles/Procedures.module.css";
import { getDOMProcedures } from "./../utilities/procedures.js";

function Eyes() {
  const procedures = getDOMProcedures(data);
  return (
    <section className={styles.section}>
      <article className={styles.products}>
        <picture className={styles.products_img_wrapper}>
          <source type="image/webp" srcSet="./../photos/eyes_products.webp" />
          <source type="image/jpeg" srcSet="./../photos/eyes_products.jpg" />
          <img
            className={styles.products_img}
            src="./../photos/eyes_products.jpg"
            alt="brows and lashes products"
          />
        </picture>

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
        <picture>
          <source type="image/webp" srcSet="./../photos/eyes_gallery_3.webp" />
          <source type="image/jpeg" srcSet="./../photos/eyes_gallery_3.jpg" />
          <img
            className={styles.gallery_img}
            src="./../photos/eyes_gallery_3.jpg"
            alt="brows and lashes gallery "
          />
        </picture>
        <picture>
          <source type="image/webp" srcSet="./../photos/eyes_gallery_2.webp" />
          <source type="image/jpeg" srcSet="./../photos/eyes_gallery_2.jpg" />
          <img
            className={styles.gallery_img}
            src="./../photos/eyes_gallery_2.jpg"
            alt="brows and lashes gallery "
          />
        </picture>
        <picture>
          <source type="image/webp" srcSet="./../photos/eyes_gallery_1.webp" />
          <source type="image/jpeg" srcSet="./../photos/eyes_gallery_1.jpg" />
          <img
            className={styles.gallery_img}
            src="./../photos/eyes_gallery_1.jpg"
            alt="brows and lashes gallery "
          />
        </picture>
      </article>
    </section>
  );
}

export default Eyes;
