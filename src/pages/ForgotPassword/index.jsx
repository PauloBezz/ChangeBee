import styles from "./styles.module.css";
import { Link } from "react-router-dom";

export function ForgotPassword() {

    function handleSubmit(e) {
        e.preventDefault();
        alert("Link de recuperação enviado!");
    }

    return (
        <main className={styles.container}>
            <form className={styles.content} onSubmit={handleSubmit}>

                <div className={styles.title}>
                    <h1>Recuperar senha</h1>
                    <p>
                        Digite seu e-mail para receber um link de recuperação.
                    </p>
                </div>

                <div className={styles.form}>
                    <article>
                        <h3>E-mail</h3>
                        <input
                            type="email"
                            placeholder="seu@email.com"
                            required
                        />
                    </article>

                    <button
                        className={styles.btnEvent}
                        type="submit"
                    >
                        Enviar
                    </button>
                </div>

                <Link className={styles.back} to="/login">
                    Voltar ao Login
                </Link>

            </form>
        </main>
    );
}