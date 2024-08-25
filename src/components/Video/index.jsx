import styles from './styles.module.css'
import movie from './assets/movie.mp4'

export default function Video({ title, description }) {
    return (
        <section id='video' className={styles.container}>
            <h1 className={styles.title}>{title}</h1>
            <div className={styles.video}>
                <video src={movie} controls></video>
            </div>
            <p className={styles.description}>{description}</p>
        </section>
    )
}