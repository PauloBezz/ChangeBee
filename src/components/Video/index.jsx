import styles from './styles.module.css'

export default function Video({ title, description }) {
    return (
        <section className={styles.container}>
            <h1 className={styles.title}>{title}</h1>
            <div className={styles.video}>
                <video src=""></video>
            </div>
            <p className={styles.description}>{description}</p>
        </section>
    )
}