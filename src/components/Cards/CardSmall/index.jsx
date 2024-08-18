import styles from "./styles.module.css"

export function CardSmall({ image, description }) {

    return (
        <div className={styles.container}>
            <div className={styles.icon}>
                {image}
            </div>
            <p className={styles.text}>{description}</p>
        </div>
    )
}