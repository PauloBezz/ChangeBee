import styles from './styles.module.css'
import { CardSmall } from "./CardSmall"
import { Quality } from './assets/images/svg/Quality'
import { Shield } from './assets/images/svg/Shield'
import { Speed } from "./assets/images/svg/Speed"
import { Squad } from "./assets/images/svg/Squad"
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
        title: 'Pacote para transporte seco',
        image: '0',
        info: 'Equipe de apoio',
        infoTwo: 'Segundo Motorista',
        infoThree: 'Apenas R$9,99/Km',
        infoFour: '',
        price: '1599,90',
    },
    {
        title: 'Pacote para transporte seco',
        image: '0',
        info: 'Equipe de apoio',
        infoTwo: 'Segundo Motorista',
        infoThree: 'Apenas R$9,99/Km',
        infoFour: '',
        price: '1599,90',
    },
    {
        title: 'Pacote para transporte seco',
        image: '0',
        info: 'Equipe de apoio',
        infoTwo: 'Segundo Motorista',
        infoThree: 'Apenas R$9,99/Km',
        infoFour: '',
        price: '1599,90',
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
        <section className={styles.container}>
            <article className={styles.prices}>
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