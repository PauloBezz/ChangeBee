import styles from "./styles.module.css"
import { Link, useNavigate } from "react-router-dom"
import cancel from './assets/cancel.svg'
import { useState } from "react";

export default function Sidebar({handleOpen}) {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false)

  const handleForSection = (sectionId) => {
    navigate("/")
    const subLink = document.getElementById(sectionId);
    if (subLink) {
      subLink.scrollIntoView({ behavior: "smooth" });
    }
  }

  const handleChange = () => {
    navigate("/login");
  }

  return (
    <>
      {!visible && (
        <div className={styles.container}>
          <nav className={styles.menu}>
            <img src={cancel} alt="Close" className={styles.btnClone} onClick={handleOpen} />
            <Link className={styles.link} onClick={() => handleForSection("advantage")}>
              Vantagens
            </Link>
            <Link className={styles.link} onClick={() => handleForSection("client")}>
              Clientes
            </Link>
            <Link className={styles.link} onClick={() => handleForSection("video")}>
              Sonho
            </Link>
            <Link className={styles.link} onClick={() => handleForSection("price")}>
              Preços
            </Link>
            <Link className={styles.link} onClick={() => handleForSection("partner")}>
              Parceiros
            </Link>
          </nav>
          <button className={styles.btnChange} onClick={handleChange}>Mudar</button>
        </div>)}
    </>
  )
}