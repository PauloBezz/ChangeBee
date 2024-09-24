import styles from './styles.module.css'
import { CardSmall } from "./CardSmall"
import { Quality } from './assets/images/svg/Quality'
import { Shield } from './assets/images/svg/Shield'
import { Speed } from "./assets/images/svg/Speed"
import { Squad } from "./assets/images/svg/Squad"
import TrYellow from './assets/images/svg/TruckYellow'
import TrRed from './assets/images/svg/TruckRed'
import TrWine from './assets/images/svg/TruckWine'
import { Banner } from '../Banner'
import { CardPrice } from './CardPrice'
import { useState } from 'react'
import { banners } from '../../data/carousel.json'

export const SmallInfo = [
    {
        id: 1,
        image: <Shield />,
        description: 'Seguro contra roubo e com rastreio remoto'
    },
    {
        id: 2,
        image: <Speed />,
        description: 'Tempo de carga e entrega com eficiência e rápidez'
    },
    {
        id: 3,
        image: <Squad />,
        description: 'Equipe cautelosa e unida pela sua mudança'
    },
    {
        id: 4,
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
    const [banner, setBanner] = useState(0);

    const handleBanner = (index) => {
        setBanner(index)
    }

    return (
        <section id='advantage' className={styles.container}>
            <article className={styles.cards}>
                {SmallInfo.map((info, index) => {
                    return (
                        <CardSmall
                            key={info.id}
                            onClick={() => handleBanner(index)}
                            image={info.image}
                            description={info.description}
                        />
                    )
                })}
            </article>

            <article className={styles.banner}>
                <Banner data={banners} current={banner} />
            </article>
        </section>
    )
}

export function ContentPrice() {
    return (
        <section id='price' className={styles.containerPrice}>
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