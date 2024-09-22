import styles from './styles.module.css'

export const Banner = ({ data, current }) => {

    const { figure } = data[current];

    return (
        <article className={styles.container}>
            <h1>Antes do pé na estrada têm vantagens!</h1>
            <img className={styles.figure} src={figure}  />
            <p>Seria difícil não apresentar nossas principais vantagens para você, aqui na ChangeBee você não perde tempo, basta nos receber e notará um destaque sobre o fluxo de trabalho.</p>
        </article>
    )
}