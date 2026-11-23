import styles from './Button.module.css';

export default function Button({ href = '#contact', variant = 'purple', children }) {
  const className = `${styles.button} ${variant === 'white' ? styles.white : styles.purple}`;
  return (
    <a className={className} href={href}>
      {children}
    </a>
  );
}
