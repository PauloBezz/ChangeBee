import styles from './styles.module.css'
import { Link } from "react-router-dom"
import { Whats } from "./assets/svg/Whatsapp"
import { Face } from "./assets/svg/Facebook"
import { Insta } from "./assets/svg/Instagram"

export function Footer() {
    return (
        <footer className={styles.container}>
            <article className={styles.links}>

                <a href="">Trabalhe conosco</a>
                <a href="">Sobre nós</a>
                <div className={styles.icons}>
                    <Link><Whats /></Link>
                    <Link><Insta /></Link>
                    <Link><Face /></Link>
                </div>
            </article>
            <article className={styles.text}>
                <p>Copyright © 1991-2024 ChangeBee. Respeito a todos os direitos de uso</p>
                <p>Desejamos um bom recomeço e reecontros na sua nova vida!</p>
            </article>
        </footer>
    )
}