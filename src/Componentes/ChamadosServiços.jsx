import React from "react";
import styles from "./ChamadosServicos.module.css";
import nr35 from "../img/n35.jpg";
import nr06 from "../img/nr06.jpg";
import nr10 from "../img/nr10.jpg";
import brigada from "../img/brigada.png";
import { Link } from "react-router-dom";

const ChamadosServiços = () => {
  return (
    <div className={styles.containerGeral}>
      <div className={styles.titulo}>
        <h2>Alguns de nossos Serviços: </h2>
      </div>
      <div className={styles.containerServicos}>
        <div className={styles.img}>
          <img src={nr06} alt="logo cacaushow" />
          <h3>NR-06: EQUIPAMENTO DE PROTEÇÃO INDIVIDUAL (EPI)</h3>
        </div>
        <div className={styles.img}>
          <img src={nr10} alt="logo cacaushow" />
          <h3>NR-10: SERVIÇOS COM ELETRICIDADE</h3>
        </div>
        <div className={styles.img}>
          <img src={nr35} alt="logo cacaushow" />
          <h3>NR-35: TRABALHO EM ALTURA</h3>
        </div>
        <div className={styles.img}>
          <img src={brigada} alt="logo cacaushow" />
          <h3>BRIGADA NBR 14276</h3>
        </div>
      </div>
      <div className={styles.linkContainer}>
        <Link className={styles.link} aria-disabled to="/">
          Veja mais
        </Link>
      </div>
    </div>
  );
};

export default ChamadosServiços;
