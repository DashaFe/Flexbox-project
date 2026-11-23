import Button from '../Button/Button.jsx';
import styles from './Hero.module.css';
import hero800 from '../../assets/hero-800.webp';
import hero1600 from '../../assets/hero-1600.webp';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <img
        className={styles.image}
        src={hero1600}
        srcSet={`${hero800} 800w, ${hero1600} 1600w`}
        sizes="100vw"
        width="1600"
        height="1072"
        alt="Starry night sky over a desert mountain range"
        fetchPriority="high"
      />
      <div className={styles.content}>
        <h1 className={styles.title}>
          Designs your eyeballs
          <br />
          will thank you for
        </h1>
        <Button href="#how-it-works">Get Started Today</Button>
        <p className={styles.caption}>Lorem ipsum dolor sit amet, consectetur</p>
      </div>
    </section>
  );
}
