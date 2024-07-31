import styles from './styles.module.css'

export function CardPrice({ title, image, info, infoTwo, infoThree, infoFour, price }) {
    return (
        <article className={styles.container}>
            <h1 className={styles.title}>{title}</h1>
            <div className={styles.image}>{image}</div>
            <ul className={styles.list}>
                <li>{info}</li>
                <li>{infoTwo}</li>
                <li>{infoThree}</li>
                <li>{infoFour}</li>
            </ul>
            <h2 className={styles.price}>{price}</h2>
            <button className={styles.btnContract}>Contratar</button>
        </article>
    )
}