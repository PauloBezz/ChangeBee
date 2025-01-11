import { Link, useNavigate } from "react-router-dom"
import cancel from './assets/cancel.svg'
import styles from "./styles.module.css"

export default function Sidebar({ handleOpen }) {
  const navigate = useNavigate();

  const handleForSection = (sectionId) => {
    navigate("/")
    const subLink = document.getElementById(sectionId);
    if (subLink) {
      subLink.scrollIntoView({ behavior: "smooth" });
      handleOpen();
    }
  }

  const handleChange = () => {
    navigate("/login");
  }

  return (
    <main className={styles.container}>
        <div className={styles.btnClose}>
          <img src={cancel} alt="Close" onClick={handleOpen} />
        </div>
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
        <button className={styles.btnChange} onClick={handleChange}>Mudar</button>
      </nav>
    </main>
  )
}