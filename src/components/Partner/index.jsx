import { useState } from 'react'
import { Link } from 'react-router-dom'
import FourTruck from './assets/img/svg/Icon4Truck'
import Good from './assets/img/svg/IconGood'
import Graal from './assets/img/svg/IconGraal'
import Porto from './assets/img/svg/IconPorto'
import NuBank from './assets/img/svg/IconNubank'
import Mercedes from './assets/img/svg/IconMercedes'
import Stanley from './assets/img/svg/IconStanley'
import { Info } from '../Info'
import { brand } from '../../data/carousel.json'
import styles from './styles.module.css'

export default function Partner() {
    const [visible, setVisible] = useState(false)
    const [info, setInfo] = useState(0)

    const handleInfo = (index) => {
        setInfo(index)
        if (index != info) {
            setVisible(visible)
        } else {
            setVisible(!visible)
        }
    }

    return (
        <section id='partner' className={styles.container}>
            <h1 className={styles.title}>Nossos parceiros de viagem</h1>

            <article className={styles.icons} >
                <Link onClick={() => handleInfo(1)}><FourTruck /></Link>
                <Link onClick={() => handleInfo(2)}><Mercedes /></Link>
                <Link onClick={() => handleInfo(3)}><Good /></Link>
            </article>

            {!visible && (
                <Info data={brand} current={info} />
            )
            }

            <article className={styles.icons}>
                <Link onClick={() => handleInfo(4)}><NuBank /></Link>
                <Link onClick={() => handleInfo(5)}><Porto /></Link>
                <Link onClick={() => handleInfo(6)}><Graal /></Link>
                <Link onClick={() => handleInfo(7)}><Stanley /></Link>
            </article>


            <p className={styles.description}>Somos gratos por todas parcerias das estradas desta vida e a gratidão de nossos amados clientes é um presente. Vamos viajar juntos ao novo e com felicidade.</p>
        </section>
    )
}