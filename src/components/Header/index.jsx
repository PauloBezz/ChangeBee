import styles from "./styles.module.css";
import logo from "./../../assets/logo.svg";
import { Truck, TruckBlack } from "./../../assets/Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import menu from '../../assets/menu.svg'


export function Header() {
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false)

  const handleOpen = () => {
    setVisible(visible);
  }

  return (
    <header className={styles.header}>
      <div className={styles.inline}>
        <Link className={styles.logo} to={""} ><img src={logo} alt="logo" /></Link>

        <div>
          <img src={menu} alt="" />
        </div>
        {visible && (
          <Sidebar/>
        )}

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

        <Link className={styles.button} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
          {hovered ? <TruckBlack /> : <Truck />}
        </Link>
      </div>

      <div className={styles.line}></div>
    </header>
  );
}
