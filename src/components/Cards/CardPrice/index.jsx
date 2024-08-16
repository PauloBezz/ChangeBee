import styles from './styles.module.css'

export function CardPrice({ title, image, info, infoTwo, infoThree, infoFour, price }) {
    return (
        <article className={styles.container}>
            <h1 className={styles.title}>{title}</h1>
            <div className={styles.image}>{image}</div>

            <div className={styles.content}>
                <div className={styles.list}>
                    <p>{info}</p>
                    <p>{infoTwo}</p>
                    <p>{infoThree}</p>
                    <p>{infoFour}</p>
                </div>

                <div>
                    <h2 className={styles.price}>{price}</h2>
                    <button className={styles.btnContract}>Contratar</button>
                </div>
            </div>
        </article>
    )
}