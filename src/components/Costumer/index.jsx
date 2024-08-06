import styles from './styles.module.css'
import ArrowL from './assets/img/svg/ArrowLeft'
import ArrowR from './assets/img/svg/ArrowRight'
import Client from './Client'
import ImageClient from './assets/img/svg/ImageClient'

export const InfoCostumer = [
    {
        id: 1,
        title: 'Evandro Reis - Jaguariúna',
        description: 'Empresa eficiente e respeitada, não tive problemas na viagem e existe um cuidado com minha mudança. Obrigado ChangeBee.',
        image: <ImageClient />,
    },
    // {
    //     id: 2,
    //     title: 'Maria Guedes - Terezina',
    //     description: 'Impressionada com essa empresa, tem meu voto de confiança e o cuidado com minhs coisas foi excelente Obrigado ChangeBee.',
    //     image: '',
    // },
    // {
    //     id: 3,
    //     title: '',
    //     description: ' Obrigado ChangeBee.',
    //     image: '',
    // },

]

export default function ContentCostumer() {


    return (
        <section className={styles.container}>
            {InfoCostumer.map((info) => {
                const { id, title, description, image } = info;
                return (
                    <Client
                        key={id}
                        title={title}
                        description={description}
                        image={image}
                    />
                );
            })}

            <div className={styles.buttons}>
                <button className={styles.button}><ArrowL /></button>
                <button className={styles.button}><ArrowR /></button>

            </div>
        </section>
    )
}