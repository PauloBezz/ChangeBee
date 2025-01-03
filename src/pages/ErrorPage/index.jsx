import logo from "../../assets/logo.svg"
import styles from "./styles.module.css"
import { Link } from "react-router-dom"

export function ErrorPage() {
    return (
        <main className={styles.container}>
            <img src={logo} alt="Logo" title="Logo" />
            <section>
                <article className={styles.title}>
                    <h1>404</h1>
                    <h3>Desculpe, página não encontrada</h3>
                </article>

                <article className={styles.actions}>
                    <p>A página que você tentou acessar não existe.</p>
                    <Link to={"/"} >Voltar ao início</Link>
                </article>
            </section>
        </main>
    )
}