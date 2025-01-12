import styles from "./styles.module.css"
import { useState } from "react"
import { Link, Navigate, useNavigate } from "react-router-dom"

export function Login() {

    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    async function handleEmail() {
        return (
            console.log(`Usuário ${email} autorizado`)
        )
    }

    return (
        <main className={styles.container}>
            <form className={styles.content}>
                <article className={styles.title}>
                    <h1>Login</h1>
                    <div className={styles.subtitle}>
                        <h3>Não tem conta?</h3>
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
                    Acessar
                </button>
            </form>
        </main>
    )
}

export function Register() {
    const [user, setUser] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [confpass, setConfpass] = useState('')
    const navigate = useNavigate()


    const handleCreate = () => {
        navigate('/register')
    }

    return (
        <main>
            <form>
                <article className={styles.title}>
                    <h1>Registro</h1>
                </article>

                <div className={styles.register}>
                    <article>
                        <h3>Nome completo</h3>
                        <input type="text" required value={user} onChange={(e) => setUser(e.target.value)} />
                    </article>

                    <article>
                        <h3>Email</h3>
                        <input type="text" required value={email} onChange={(e) => setEmail(e.target.value)} />
                    </article>

                    <article>
                        <h3>Senha</h3>
                        <input type="password" required value={pass} onChange={(e) => setPass(e.target.value)} />
                    </article>

                    <article>
                        <h3> Confirme a Senha</h3>
                        <input type="password" required value={confpass} onChange={(e) => setConfpass(e.target.value)} />
                        <Link>Já tenho conta</Link>
                    </article>
                </div>
                <button className={styles.btnCreate} onClick={handleCreate}>
                    Criar conta
                </button>
            </form>
        </main>
    )
}