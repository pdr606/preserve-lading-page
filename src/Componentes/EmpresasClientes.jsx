import React from "react";
import styles from "./EmpresasClientes.module.css";
import brametal from "../img/brametal-logo.png";
import agrocp from "../img/agrocp-logo.png";
import brinox from "../img/brinox-logo.png";
import cacaushow from "../img/cacau-show-logo.png";
import cacique from "../img/cacique-logo.png";
import cobra from "../img/cobra-engenharia-logo.png";
import frutmel from "../img/frutmel-logo.png";
import gea from "../img/gea-logo.png";
import nesher from "../img/nesher-logo.png";
import ofi from "../img/ofi-logo.png";
import proteinorte from "../img/proteinorte-logo.png";
import newtel from "../img/newtel-logo.png";

const EmpresasClientes = () => {
  return (
    <div className={`${styles.containerPrincipal}`}>
      <div className={`${styles.containerTitulo} js-scroll displayNone`}>
        <h2>Empresas que já confiam em nosso trabalho</h2>
      </div>

      <div className={`${styles.empresas}`}>
        <div className={`${styles.img}`}>
          <img src={brametal} alt="logo brametal" />
        </div>
        <div className={styles.img}>
          <img src={agrocp} alt="logo agro-acp" />
        </div>
        <div className={styles.img}>
          <img src={brinox} alt="logo grupo brinox" />
        </div>
        <div className={styles.img}>
          <img src={cacaushow} alt="logo cacaushow" />
        </div>

        <div className={styles.img}>
          <img src={cacique} alt="logo cafe cacique" />
        </div>

        <div className={styles.img}>
          <img src={cobra} alt="logo cobra engenharia" />
        </div>

        <div className={styles.img}>
          <img src={frutmel} alt="logo frutmel" />
        </div>

        <div className={styles.img}>
          <img src={gea} alt="logo gea" />
        </div>

        <div className={styles.img}>
          <img src={nesher} alt="logo moveis nesher" />
        </div>

        <div className={styles.img}>
          <img src={ofi} alt="logo ofi/olam" />
        </div>

        <div className={styles.img}>
          <img src={proteinorte} alt="logo proteinorte" />
        </div>

        <div className={styles.img}>
          <img src={newtel} alt="logo newtel" />
        </div>
      </div>
    </div>
  );
};

export default EmpresasClientes;
