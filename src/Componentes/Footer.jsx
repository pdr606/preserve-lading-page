import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer>
      <div className={styles.container}>
        <p>
          Avenida Dr José Antônio Palmeira da Silva, 631 - Três Barras -
          Linhares - ES.
        </p>
        <p>
          Copyright © 2023 - Preserve Soluções em Segurança - Todos os direitos
          reservados.
        </p>
        <p> Desolvivdo por Pedro Guarnieri</p>
      </div>
    </footer>
  );
};

export default Footer;
