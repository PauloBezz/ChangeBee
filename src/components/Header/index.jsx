import logo from "./../../assets/logo.svg";
import { Truck } from "./../../assets/Button";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

export function Header() {
  return (
    <header className={styles.header}>
    <div className={styles.inline}>
      <img src={logo} alt="logo" />
      
        <nav className={styles.nav}>
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

      
        <Link className={styles.button}>
          <Truck />
        </Link>
        </div>
      
        <div className={styles.line}></div>
    </header>
  );
}
