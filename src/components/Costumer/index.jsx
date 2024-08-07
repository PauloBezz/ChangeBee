import styles from './styles.module.css'
import ArrowL from './assets/img/svg/ArrowLeft'
import ArrowR from './assets/img/svg/ArrowRight'

import { client } from '../../data/carousel.json'
import { useState } from 'react'

export const ContentCostumer = ({ data }) => {
    const { slide, setSlide } = useState(0);


    return (
        <section className={styles.carousel}>
            {data.map((element, index) => {
                return (
                    <>
                        <div key={index} className={slide === index ? styles.contentNone : styles.content}>
                            <article className={styles.text}>
                                <h1>{element.title}</h1>
                                <p>{element.description}</p>
                            </article>
                            <article className={styles.image}>
                                <img src={element.image} alt="" />
                            </article>
                        </div>
                        <div className={styles.buttons}>
                            <button className={styles.button} key={index}><ArrowL /></button>
                            <button className={styles.button}><ArrowR /></button>
                        </div>
                    </>

                );
            })}
        </section>
    )
}