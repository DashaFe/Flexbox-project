import Button from '../Button/Button.jsx';
import styles from './PinkCta.module.css';

export default function PinkCta() {
  return (
    <div className={styles.cta} id="services" aria-labelledby="pink-cta-title">
      <h2 id="pink-cta-title" className={styles.title}>
        Wicked &amp; whack, bang bang boo!
      </h2>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut
      </p>
      <Button href="#contact" variant="white">
        Get Started Today
      </Button>
    </div>
  );
}
