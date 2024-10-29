import { useState } from "react"
import Plus, { PlusWhite } from "../assets/images/svg/Plus"
import styles from "./styles.module.css"

export function CardSmall({ image, onClick, description }) {
    const [color, setColor] = useState(false)

    return (
        <article className={styles.container}
            onMouseEnter={() => { setColor(true) }}
            onMouseLeave={() => { setColor(false) }}>
            <div className={styles.icon}>
                {image}
            </div>
            <p className={styles.text}>{description}</p>
            <button className={styles.plus} onClick={onClick}>
                {color ? <PlusWhite /> : <Plus />}</button>
        </article>
    )
}