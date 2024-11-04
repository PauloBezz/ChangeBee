import styles from "./styles.module.css";
import image from "../../assets/home.svg"

export function Main(props) {
  return (
    <main className={styles.container}>
      <div className={styles.texts}>
        <aside className={styles.title}>
          <h1 className={styles.black}>{props.titleWhite}</h1>
          <h1 className={styles.title}>{props.titleYellow}</h1>
          <h1 className={styles.black}>{props.tWhiteSecond}</h1>
          <h1 className={styles.black}>{props.tWhiteThree}</h1>
          <h1 className={styles.title}>{props.tYellowSecond}</h1>
        <p className={styles.subtitle}>{props.subtitle}</p>
        </aside>
      </div>
      <img src={image} className={styles.image} />
    </main>
  );
}
