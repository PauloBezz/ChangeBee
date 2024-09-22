import styles from "./styles.module.css"

export function CardSmall({ id, onClick, image, description }) {
    return (
        <button className={styles.container} onClick={onClick} >
            <div className={styles.icon}>
                {image}
            </div>
            <p className={styles.text}>{description}</p>
        </button>
    )
}