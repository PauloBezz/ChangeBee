import { useState } from "react"
import styles from "./styles.module.css"
import { Link } from "react-router-dom"

export function Login() {

    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    async function handleEmail() {
        return (
            console.log(`Usuário ${email} autorizado`)
        )
    }

    return (
        <form className={styles.container}>
            <section className={styles.content}>
                <article className={styles.title}>
                    <h1>Cadastro</h1>
                    <div className={styles.subtitle}>
                        <h3>Não tem cadastro?</h3>
                        <Link to={''}>Clique aqui</Link>
                    </div>
                </article>

                <div className={styles.register}>
                    <article>
                        <h3>Email</h3>
                        <input type="text" required value={email} onChange={(e) => setEmail(e.target.value)} />
                    </article>

                    <article>
                        <h3>Senha</h3>
                        <input type="password" required value={pass} onChange={(e) => setPass(e.target.value)} />
                        <Link>Esqueceu a senha?</Link>
                    </article>
                </div>
                <button className={styles.btnLogin} onClick={handleEmail}>
                    Login
                </button>
            </section>
        </form>
    )
}