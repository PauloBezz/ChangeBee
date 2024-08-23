import styles from './styles.module.css'

export const Info = ({ data }) => {
    return (
        <section className={styles.container}>
            {data.map((info, index) => {
                const { message, time, link, brandName } = info;
                return (
                    <>
                        <h1 key={index} className={styles.message}>{message}</h1>
                        <p className={styles.time}>{time}</p>
                        <a href={link}>{brandName}</a>
                    </>
                )
            })}
        </section>
    )
}