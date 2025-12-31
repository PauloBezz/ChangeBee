import styles from "./styles.module.css";

export default function Video({ title, description }) {
  return (
    <section id="video" className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.video}>
        <iframe
          src="https://www.youtube.com/embed/fVFK2DVViXk"
          title="Como fazer preparo passo a passo"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <p className={styles.description}>{description}</p>
    </section>
  );
}