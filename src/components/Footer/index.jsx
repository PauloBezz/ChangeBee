import styles from './styles.module.css'
import { Link, useNavigate } from "react-router-dom"
import { Whats } from "./assets/svg/Whatsapp"
import { Face } from "./assets/svg/Facebook"
import { Insta } from "./assets/svg/Instagram"

export function Footer() {
    const navigate = useNavigate();

    const handleAlert = () => {
        alert("Desculpe, no momento estamos sem vagas disponíveis. Em breve, abriremos processos seletivos para estágio. Fique por dentro através do nosso LinkedIn.")
    }

    const handleForScroll = (idLink) => {
        navigate("/")
        const subLink = document.getElementById(idLink)
        if (subLink) {
            subLink.scrollIntoView({ behavior: 'smooth' })
        } else {
            console.log("Algo deu errado")
        }
    }

    return (
        <footer className={styles.container}>
            <article className={styles.links}>

                <a onClick={() => handleAlert()}>Trabalhe conosco</a>
                <a onClick={() => handleForScroll("video")}>Sobre nós</a>
                <div className={styles.icons}>
                    <Link to={'https://play.google.com/store/search?q=whatsapp&c=apps&hl=pt_BR'}><Whats /></Link>
                    <Link to={'https://www.instagram.com'}><Insta /></Link>
                    <Link to={'https://www.facebook.com'}><Face /></Link>
                </div>
            </article>
            <article className={styles.text}>
                <p>Copyright © 1991-2024 ChangeBee. Respeito a todos os direitos de uso</p>
                <p>Desejamos um bom recomeço e reecontros na sua nova vida!</p>
            </article>
        </footer>
    )
}