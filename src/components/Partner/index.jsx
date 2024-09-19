import { Link } from 'react-router-dom'
import styles from './styles.module.css'
import FourTruck from './assets/img/svg/Icon4Truck'
import Good from './assets/img/svg/IconGood'
import Graal from './assets/img/svg/IconGraal'
import Porto from './assets/img/svg/IconPorto'
import NuBank from './assets/img/svg/IconNubank'
import Mercedes from './assets/img/svg/IconMercedes'
import Stanley from './assets/img/svg/IconStanley'
import { Info } from '../Info'
import { brand } from '../../data/carousel.json'
import { useState } from 'react'


export default function Partner() {
    const [info, setInfo] = useState(0)

    const handleInfo = (index) =>{
        setInfo(index)
    }

    return (
        <section id='partner' className={styles.container}>
            <h1 className={styles.title}>Nossos parceiros de viagem</h1>

            <article className={styles.icons}>
                <Link onClick={() => handleInfo(0)}><FourTruck /></Link>
                <Link onClick={() => handleInfo(1)}><Mercedes /></Link>
                <Link onClick={() => handleInfo(2)}><Good /></Link>
            </article>

            <Info data={brand} current={info} />

            <article className={styles.icons}>
                <Link onClick={() => handleInfo(3)}><NuBank /></Link>
                <Link onClick={() => handleInfo(4)}><Porto /></Link>
                <Link onClick={() => handleInfo(5)}><Graal /></Link>
                <Link onClick={() => handleInfo(6)}><Stanley /></Link>
            </article>


            <p className={styles.description}>Somos gratos por todas parcerias das estradas dessa vida e a gratidão de nossos amados clientes é um presente. Vamos viajar juntos ao novo e com felicidade.</p>
        </section>
    )
}