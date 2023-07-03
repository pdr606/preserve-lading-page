import React from "react";
import missao from "../img/missao.png";
import visao from "../img/visao.png";
import valores from "../img/valores.png";
import styles from "./Valores.module.css";

const Valores = () => {
  return (
    <section>
      <div className="js-scroll displayNone">
        <img src={missao} alt="Logo Missao" />
        <h2>Missão</h2>
        <p>
          Apresentar soluções adaptáveis para atender às reais necessidades dos
          seus clientes, buscando ser uma empresa adaptável a mudanças,
          inclusive nos requisitos/procedimentos internos, e política de seus
          parceiros.
        </p>
      </div>

      <div className={styles.visao}>
        <img src={visao} alt="Logo Visao" />
        <h2>Visão</h2>
        <p>
          Ser referência no ramo de Segurança e Saúde Ocupacional, buscando
          sempre o aprimoramento e inovação nos serviços.
        </p>
      </div>

      <div className="js-scroll displayNone">
        <img src={valores} alt="Logo Valores" />
        <h2>Valores</h2>
        <p>
          Ética, transparência, confiança, compromisso, respeito e integridade.
        </p>
      </div>
    </section>
  );
};

export default Valores;
