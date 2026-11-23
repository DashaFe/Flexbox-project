import styles from './Features.module.css';

const ITEMS = [
  { title: 'A fantastic heading' },
  { title: 'Good day blokes' },
  { title: 'Blaz Robar for president' },
  { title: 'Vote for Robar' },
];

const TEXT =
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud';

export default function Features() {
  return (
    <div className={styles.features} id="how-it-works" aria-labelledby="features-title">
      <h2 id="features-title" className={styles.visuallyHidden}>
        How it works
      </h2>
      <ul className={styles.list}>
        {ITEMS.map((item) => (
          <li className={styles.item} key={item.title}>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.text}>{TEXT}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
