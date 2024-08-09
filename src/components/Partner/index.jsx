import styles from './styles.module.css'
import FourTruck from './assets/img/svg/Icon4Truck'
import Good from './assets/img/svg/IconGood'
import Graal from './assets/img/svg/IconGraal'
import Porto from './assets/img/svg/IconPorto'
import NuBank from './assets/img/svg/IconNubank'
import Mercedes from './assets/img/svg/IconMercedes'
import Stanley from './assets/img/svg/IconStanley'

export default function Partner() {
    return (
        <section className={styles.container}>
            <h1 className={styles.title}>Nossos parceiros de viagem</h1>
            <article className={styles.icons}>
                <FourTruck />
                <Mercedes />
                <Good />
            </article>

            <div className={styles.more}>
                <p>teste</p>
            </div>

            <article className={styles.icons}>
                <NuBank />
                <Porto />
                <Graal />
                <Stanley />
            </article>


            <p className={styles.description}>Somos gratos por todas parcerias das estradas dessa vida e a gratidão de nossos amados clientes é um presente. Vamos viajar juntos ao novo e com felicidade.</p>
        </section>
    )
}