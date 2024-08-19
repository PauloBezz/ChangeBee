import { Link } from "react-router-dom"
import styles from "./styles.module.css"

export default function Sidebar() {
  return (
    <div className={styles.container}>
      <nav className={styles.menu}>
        <Link className={styles.link} to={""}>
          Vantagens
        </Link>
        <Link className={styles.link} to={""}>
          Sonho
        </Link>
        <Link className={styles.link} to={""}>
          Clientes
        </Link>
        <Link className={styles.link} to={""}>
          Preços
        </Link>
        <Link className={styles.link} to={""}>
          Parceiros
        </Link>
      </nav>
      <button className="btnChange">Mudar</button>
    </div>
  )
}