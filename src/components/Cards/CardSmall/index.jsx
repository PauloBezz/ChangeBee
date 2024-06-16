import styles from "./styles.module.css"
import icon from "../../../assets/shield.svg"

export function CardSmall() {
    return (

        <div className={styles.container}>
            <img src={icon} alt="icon" className={styles.icon} />
            <p className={styles.text}>Lorem ipsum dolor sit amet, molestiae. Nostrum quos, libero totam officiis voluptates iste!</p>
        </div>

    )
}