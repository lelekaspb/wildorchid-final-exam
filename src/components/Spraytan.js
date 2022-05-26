import { FormattedMessage } from "react-intl";
import data from "./../procedures/spraytan.json";
import styles from "./../styles/Procedures.module.css";
import { getDOMProcedures } from "./../utilities/procedures.js";

function Spraytan() {
  const procedures = getDOMProcedures(data);
  return (
    <section className={styles.section}>
      <article className={styles.products}>
        <div className={styles.products_img_wrapper}>
          <img
            className={styles.products_img}
            src="./../photos/spraytan_products.jpg"
            alt="spraytan products"
          />
        </div>
        <div className={styles.products_text}>
          <p>
            <FormattedMessage
              id="services.spraytan.intro_one"
              defaultMessage="For at få det bedste resultat med vores spray tan, peel huden dagen før (eller om morgenen på behandlingsdagen). Det kan enten gøres med en bodyscrub, handske eller bare et håndklæde efter badet. Det er vigtigt, at du skrubber hele din krop."
            />
          </p>
          <p>
            <FormattedMessage
              id="services.spraytan.intro_two"
              defaultMessage="Den spray tan vi bruger i vores behandling består af naturlige ingredienser, der ikke kun får din hud til at gløde, men også har en fugtgivende effekt, der fører til blød og glat hud. Hos Wild Orchid får du gylden intens hudfarve med anti-aging effekt."
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
          src="./../photos/spraytan_gallery_1.jpg"
          alt="spraytan gallery "
        />
        <img
          className={styles.gallery_img}
          src="./../photos/spraytan_gallery_2.jpg"
          alt="spraytan gallery "
        />
        <img
          className={styles.gallery_img}
          src="./../photos/spraytan_gallery_3.jpg"
          alt="spraytan gallery "
        />
      </article>
    </section>
  );
}

export default Spraytan;
