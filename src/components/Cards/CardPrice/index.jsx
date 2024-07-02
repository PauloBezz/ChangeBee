import styles from './styles.module.css'

export function CardPrice({ title, image, info, infoTwo, infoThree, infoFour, price }) {
    return (

        <article className={styles.container}>
            <h1>{title}</h1>
            <div>{image}</div>
            <ul>
                <li>{info}</li>
                <li>{infoTwo}</li>
                <li>{infoThree}</li>
                <li>{infoFour}</li>
            </ul>
            <h2>{price}</h2>
            <button>Contratar</button>
        </article>

    )
}