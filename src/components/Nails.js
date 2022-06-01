import { FormattedMessage } from "react-intl";
import data from "./../procedures/nails.json";
import styles from "./../styles/Procedures.module.css";
import { getDOMProcedures } from "./../utilities/procedures.js";

function Nails() {
  const procedures = getDOMProcedures(data);
  return (
    <section className={styles.section}>
      <article className={styles.products}>
        <picture className={styles.products_img_wrapper}>
          <source type="image/webp" srcSet="./../photos/nails_products.webp" />
          <source type="image/jpeg" srcSet="./../photos/nails_products.jpg" />
          <img
            className={styles.products_img}
            src="./../photos/nails_products.jpg"
            alt="nails products"
          />
        </picture>

        <div className={styles.products_text}>
          <p>
            <FormattedMessage
              id="services.nails-intro_one"
              defaultMessage="Vi har både styrkende neglebehandlinger og forskellige former for shellakbehandlinger."
            />
          </p>
          <p>
            <FormattedMessage
              id="services.nails.intro_two"
              defaultMessage="Vi bruger produkter af høj kvalitet, som ikke indeholder skadelige kemikalier, og som holder længe. Vores behandlinger giver et smukt og holdbart resultat i flere uger. Vi har utallige farver at vælge imellem, og vi kan også lave neglekunst såsom tegninger, mønstre og glitter."
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
          <source type="image/webp" srcSet="./../photos/nails_gallery_1.webp" />
          <source type="image/jpeg" srcSet="./../photos/nails_gallery_1.jpg" />
          <img
            className={styles.gallery_img}
            src="./../photos/nails_gallery_1.jpg"
            alt="nails gallery "
          />
        </picture>
        <picture>
          <source type="image/webp" srcSet="./../photos/nails_gallery_2.webp" />
          <source type="image/jpeg" srcSet="./../photos/nails_gallery_2.jpg" />
          <img
            className={styles.gallery_img}
            src="./../photos/nails_gallery_2.jpg"
            alt="nails gallery "
          />
        </picture>
        <picture>
          <source type="image/webp" srcSet="./../photos/nails_gallery_3.webp" />
          <source type="image/jpeg" srcSet="./../photos/nails_gallery_3.jpg" />
          <img
            className={styles.gallery_img}
            src="./../photos/nails_gallery_3.jpg"
            alt="nails gallery "
          />
        </picture>
      </article>
    </section>
  );
}

export default Nails;
