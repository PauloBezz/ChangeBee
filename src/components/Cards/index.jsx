import styles from './styles.module.css'
import { CardSmall } from "./CardSmall"
import { Quality } from './assets/images/svg/Quality'
import { Shield } from './assets/images/svg/Shield'
import { Speed } from "./assets/images/svg/Speed"
import { Squad } from "./assets/images/svg/Squad"
import TrYellow from './assets/images/svg/TruckYellow'
import TrRed from './assets/images/svg/TruckRed'
import TrWine from './assets/images/svg/TruckWine'
import Banner from "../Banner"
import { CardPrice } from './CardPrice'

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

export const PriceInfo = [
    {
        title: 'Carga seca',
        image: <TrYellow />,
        info: 'Equipe de apoio',
        infoTwo: 'Segundo Motorista',
        infoThree: 'Apenas R$ 9,99/Km',
        price: 'R$ 1599,90',
    },
    {
        title: 'Grande Mudança',
        image: <TrRed />,
        info: 'Equipe de apoio',
        infoTwo: 'Segundo caminhão',
        infoThree: 'Segundo motorista',
        infoFour: 'Apenas R$ 8,99/km',
        price: 'R$ 2999,90',
    },
    {
        title: 'Mudança comum',
        image: <TrWine />,
        info: 'Equipe de apoio',
        infoTwo: 'Apenas R$ 6,99/Km',
        price: 'R$ 999,90',
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

            <article className={styles.banner}>
                <Banner />
            </article>
        </section>
    )
}

export function ContentPrice() {
    return (
        <section className={styles.containerPrice}>
            <article className={styles.cardsPrice}>
                {PriceInfo.map((index, key) => {
                    return (
                        <CardPrice
                            key={key}
                            title={index.title}
                            image={index.image}
                            info={index.info}
                            infoTwo={index.infoTwo}
                            infoThree={index.infoThree}
                            infoFour={index.infoFour}
                            price={index.price}
                        />
                    )
                })}
            </article>
        </section>
    )
}