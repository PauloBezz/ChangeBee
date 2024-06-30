import { CardSmall } from "./CardSmall"
import { Quality } from './assets/images/svg/Quality'
import { Shield } from './assets/images/svg/Shield'
import { Speed } from "./assets/images/svg/Speed"
import { Squad } from "./assets/images/svg/Squad"
import styles from './styles.module.css'

export const SmallInfo = [
    {
        image: <Shield />,
        description: 'Seguro contra roubo e com rastreio remoto'
    },
    {
        image: <Speed />,
        description: 'Tempo de carga e entrega com eficiência e rápidez'
    },
    {
        image: <Squad />,
        description: 'Equipe cautelosa e unida pela sua mudança'
    },
    {
        image: <Quality />,
        description: 'Qualidade nas caixas para o carregamento'
    }

]

export default function ContentSmall() {
    return (
        <section className={styles.container}>
            <article className={styles.cards}>
                {SmallInfo.map((info, key) => {
                    return (
                        <CardSmall
                            key={key}
                            image={info.image}
                            description={info.description} />
                    )
                })}
            </article>

            <article>

            </article>
        </section>
    )
}