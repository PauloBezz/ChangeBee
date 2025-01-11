import styles from './styles.module.css'

export const Banner = ({ data, current }) => {

    const { figure, description } = data[current];

    return (
        <article className={styles.container}>
            <h1>Antes de estradar têm vantagens!</h1>
            <img className={styles.figure} src={figure} />
            <p className={styles.text}>{description}</p>
        </article>
    )
}