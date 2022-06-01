import styles from "./../styles/Procedures.module.css";
import { FormattedMessage } from "react-intl";

function Products({ webpSrc, jpegSrc, altText, messages }) {
  return (
    <article className={styles.products}>
      <picture className={styles.products_img_wrapper}>
        <source type="image/webp" srcSet={webpSrc} />
        <source type="image/jpeg" srcSet={jpegSrc} />
        <img className={styles.products_img} src={jpegSrc} alt={altText} />
      </picture>

      <div className={styles.products_text}>
        <p>
          <FormattedMessage
            id={messages[0].id}
            defaultMessage={messages[0].text}
          />
        </p>
        <p>
          <FormattedMessage
            id={messages[1].id}
            defaultMessage={messages[1].text}
          />
        </p>
        <p>
          <FormattedMessage
            id={messages[2].id}
            defaultMessage={messages[2].text}
          />
        </p>
      </div>
    </article>
  );
}

export default Products;
