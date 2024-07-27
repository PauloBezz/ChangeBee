import styles from "./styles.module.css";

export function Main(props) {
  return (
    <main className={styles.container}>
      <div className={styles.image}></div>
      <div className={styles.texts}>
        <aside className={styles.title}>
          <h1 className={styles.white}>{props.titleWhite}</h1>
          <h1 className={styles.title}>{props.titleYellow}</h1>
          <h1 className={styles.white}>{props.tWhiteSecond}</h1>
          <h1 className={styles.white}>{props.tWhiteThree}</h1>
          <h1 className={styles.title}>{props.tYellowSecond}</h1>
        </aside>
        <p className={styles.subtitle}>{props.subtitle}</p>
      </div>
    </main>
  );
}
