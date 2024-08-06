import styles from './styles.module.css'

export default function Client({ id, title, description, image }) {
    return (
        <div className={styles.content} key={id}>
            <article className={styles.text}>
                <h1>{title}</h1>
                <p>{description}</p>
            </article>
            <article className={styles.image}>
                <div>
                    {image}
                </div>
                
            </article>
        </div>
    )
}