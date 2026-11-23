import styles from './Contact.module.css';

export default function Contact() {
  return (
    <div className={styles.contact} id="contact" aria-labelledby="contact-title">
      <h2 id="contact-title" className={styles.title}>
        Get in touch
      </h2>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.
      </p>
      <a className={styles.mail} /*href="mailto:help@help.com"*/>
        help@help.com
      </a>
    </div>
  );
}
