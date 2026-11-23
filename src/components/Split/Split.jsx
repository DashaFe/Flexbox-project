import styles from './Split.module.css';

export default function Split({ id, reverse = false, heading, lead, text, image }) {
  return (
    <div className={`${styles.split} ${reverse ? styles.reverse : ''}`} id={id}>
      <div className={styles.media}>
        <img
          className={styles.image}
          src={image.src}
          srcSet={image.srcSet}
          sizes="(max-width: 900px) 100vw, 42vw"
          width={image.width}
          height={image.height}
          alt={image.alt}
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className={styles.body}>
        <h2 className={styles.heading}>{heading}</h2>
        <p className={styles.lead}>{lead}</p>
        <p className={styles.text}>{text}</p>
      </div>
    </div>
  );
}
