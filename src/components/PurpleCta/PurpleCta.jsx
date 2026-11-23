import Button from '../Button/Button.jsx';
import styles from './PurpleCta.module.css';

export default function PurpleCta() {
  return (
    <section className={styles.cta} id="faq" aria-labelledby="purple-cta-title">
      <div className={styles.content}>
        <h2 id="purple-cta-title" className={styles.title}>
          Experience the rush today
        </h2>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua consectetur adipisicing elit.
        </p>
        <Button href="#contact">Get Started Today</Button>
        <p className={styles.caption}>Lorem ipsum dolor sit amet, consectetur</p>
      </div>
    </section>
  );
}
