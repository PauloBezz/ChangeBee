import styles from './styles.module.css'

export default function Banner({ figure }) {
    return (
        <article className={styles.container}>
            <h1>Antes do pé na estrada têm vantagens!</h1>
            <div className={styles.figure}>{figure}</div>
            <p>Seria difícil não apresentar nossas principais vantagens para você, aqui na ChangeBee você não perde tempo, basta nos receber e notará um destaque sobre o fluxo de trabalho.</p>
        </article>
    )
}