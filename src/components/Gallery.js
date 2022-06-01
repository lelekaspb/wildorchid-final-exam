import styles from "./../styles/Procedures.module.css";

function Gallery({ images }) {
  return (
    <article className={styles.gallery}>
      <picture>
        <source type="image/webp" srcSet={images[0].webpSrc} />
        <source type="image/jpeg" srcSet={images[0].jpegSrc} />
        <img
          className={styles.gallery_img}
          src={images[0].jpegSrc}
          alt={images[0].altText}
        />
      </picture>
      <picture>
        <source type="image/webp" srcSet={images[1].webpSrc} />
        <source type="image/jpeg" srcSet={images[1].jpegSrc} />
        <img
          className={styles.gallery_img}
          src={images[1].jpegSrc}
          alt={images[1].altText}
        />
      </picture>
      <picture>
        <source type="image/webp" srcSet={images[2].webpSrc} />
        <source type="image/jpeg" srcSet={images[2].jpegSrc} />
        <img
          className={styles.gallery_img}
          src={images[2].jpegSrc}
          alt={images[2].altText}
        />
      </picture>
    </article>
  );
}

export default Gallery;
