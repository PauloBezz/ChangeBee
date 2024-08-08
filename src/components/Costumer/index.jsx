import React, { useState } from 'react'
import styles from './styles.module.css'
import ArrowL from './assets/img/svg/ArrowLeft'
import ArrowR from './assets/img/svg/ArrowRight'


export const Costumer = ({ data }) => {
    const [slide, setSlide] = useState(0);

    const NextSlide = () => {
        setSlide(slide === data.length - 1 ? 0 : slide + 1);
    }
    
    const PrevSlide = () => {
        setSlide(slide ===  0 ? data.length -1 : slide - 1);
    }

    return (
        <section className={styles.carousel}>
            {data.map((element, index) => {
                console.log(index)
                console.log(slide)

                return (
                    <>
                        <div key={index} className={slide === index ? styles.content : styles.contentNone}>
                            <article className={styles.text}>
                                <h1>{element.title}</h1>
                                <p>{element.description}</p>
                            </article>
                            <article className={styles.image}>
                                <img src={element.image} alt="Foto do cliente" />
                            </article>
                        </div>
                        <div className={styles.buttons}>
                            <button className={styles.button} key={index} onClick={PrevSlide}><ArrowL /></button>
                            <button className={styles.button} onClick={NextSlide}><ArrowR /></button>
                        </div>
                    </>
                );
            })}
        </section>
    )
}