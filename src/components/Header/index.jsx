import styles from "./styles.module.css";
import logo from "./../../assets/logo.svg";
import logoSmall from "./assets/icon-page.svg"
import { Truck, TruckBlack } from "./../../assets/Button";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import menu from '../../assets/menu.svg'
import ContentSmall from "../Cards";
import Sidebar from "../Sidebar";

export function Header() {
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false)
  const navigate = useNavigate();

  const handleOpen = () => {
    setVisible(!visible);
  }

  const handleForScroll = (idLink) => {
    navigate("/");
    const subLink = document.getElementById(idLink)
    if (subLink) {
      subLink.scrollIntoView({ behavior: "smooth" });
    } else {
      alert('Algo errado aconteceu!')
    }
  }

  return (
    <header className={styles.header}>
      <div className={styles.inline}>
        <Link className={styles.logo} target="self"><img src={logo} alt="Logo" /></Link>
        <Link className={styles.logoSmall} target="self"><img src={logoSmall} alt="Logo Small" /></Link>

        <img src={menu} className={styles.btnMenu} alt="menu" title="Menu" onClick={handleOpen} />

        {visible && (
          <Sidebar />
        )}

        <nav className={styles.nav}>
          <Link className={styles.link} onClick={() => handleForScroll("advantage")}>
            Vantagens
          </Link>
          <Link className={styles.link} onClick={() => handleForScroll("client")}>
            Clientes
          </Link>
          <Link className={styles.link} onClick={() => handleForScroll("video")}>
            Sonho
          </Link>
          <Link className={styles.link} onClick={() => handleForScroll("price")}>
            Preços
          </Link>
          <Link className={styles.link} onClick={() => handleForScroll("partner")}>
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
