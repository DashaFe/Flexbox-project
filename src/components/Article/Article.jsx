import styles from './Article.module.css';
import article800 from '../../assets/article-800.webp';
import article1600 from '../../assets/article-1600.webp';
import avatar from '../../assets/avatar-94.webp';

export default function Article() {
  return (
    <div className={styles.wrapper} aria-labelledby="article-title">
      <img
        className={styles.image}
        src={article1600}
        srcSet={`${article800} 800w, ${article1600} 1600w`}
        sizes="100vw"
        width="1600"
        height="1066"
        alt=""
        loading="lazy"
        decoding="async"
      />
      <div className={styles.shade} />
      <article className={styles.content}>
        <p className={styles.tag}>Photography</p>
        <h2 id="article-title" className={styles.title}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit
        </h2>
        <p className={styles.author}>
          <img className={styles.avatar} src={avatar} width="47" height="47" alt="Blaz Robar" loading="lazy" />
          <span className={styles.name}>Blaz Robar, god like web designer</span>
        </p>
      </article>
    </div>
  );
}
