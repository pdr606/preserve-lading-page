import React from "react";
import logotipo from "../img/logotipo.png";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <img src={logotipo} alt="Logotipo da Empresa" />
      </div>
      <nav className={styles.right}>
        <Link className={styles.link} to="/">
          Home
        </Link>
        {/* <Link className={styles.link} to="/serviços">
          Serviços
        </Link> */}
        <br />
        {/* <Link className={styles.linkPlataforma} to="/plataforma">
          Plataforma
        </Link> */}
      </nav>
    </header>
  );
};

export default Header;
