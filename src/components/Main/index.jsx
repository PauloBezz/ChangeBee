import styles from "./styles.module.css";

export function Main(props) {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>{props.title}</h1>
      <p className={styles.subtitle}>{props.subtitle}</p>
    </main>
  );
}
