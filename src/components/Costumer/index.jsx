import styles from './styles.module.css'
import ArrowL from './assets/img/svg/ArrowLeft'
import ArrowR from './assets/img/svg/ArrowRight'
import Client from './assets/img/svg/client.svg'

export default function Costumer() {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <article className={styles.text}>
                    <h1>Evandro Reis - Jaguariúna</h1>
                    <p>Empresa eficiente e respeitada, não tive problemas na viagem e existe um cuidado com minha mudança.
                        Obrigado ChangeBee.</p>
                </article>
                <article className={styles.image}>
                    <img src={Client} alt="Foto do cliente" title='Foto do cliente'/>
                </article>
            </div>
            <div className={styles.buttons}>
                <button className={styles.button}><ArrowL /></button>
                <button className={styles.button}><ArrowR /></button>

            </div>
        </section>
    )
}