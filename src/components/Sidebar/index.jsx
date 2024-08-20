import { Link, useNavigate } from "react-router-dom"
import styles from "./styles.module.css"

export default function Sidebar() {

  const navigate = useNavigate();

  const handleForSection = (sectionId) => {
    navigate("/")
    const subLink = document.getElementById(sectionId);
    if (subLink) {
      subLink.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <div className={styles.container}>
      <nav className={styles.menu}>
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
      <button className="btnChange">Mudar</button>
    </div>
  )
}