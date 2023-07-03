import React from "react";
import styles from "./Servicos.module.css";
import nr35 from "../img/n35.jpg";
import nr05 from "../img/nr05.jpg";
import nr06 from "../img/nr06.jpg";
import nr10 from "../img/nr10.jpg";
import nr12 from "../img/nr12.jpg";
import nr20 from "../img/nr20.png";
import nr33 from "../img/nr33.jpg";
import ponterolante from "../img/ponterolante.jpg";
import primeirossocorros from "../img/primeirossocorros.jpg";
import transpaleteira from "../img/transpaleteira.jpg";
import ltcat from "../img/ltcat.jpg";
import pgr from "../img/pgr.png";
import pcmso from "../img/pcmso.png";
import ambientais from "../img/ambientais.jpg";
import whatsapp from "../img/whatsapp-logo.png";

import brigada from "../img/brigada.png";

const Servicos = () => {
  return (
    <div>
      <img className={styles.logoWhatssap} src={whatsapp} alt="logo whatssap" />
      <div className={styles.container}>
        <div className={styles.treinamentos}>
          <div className={styles.titulo}>
            <h2>Treinamentos: </h2>
          </div>
          <div className={`${styles.imagensTreinamentos} animaLeft`}>
            <div className={styles.img}>
              <img src={nr05} alt="logo cacaushow" />
              <h3>NR-05: COMISSÃO INTERNA DE PREVENÇÃO DE ACIDENTES</h3>
            </div>

            <div className={styles.img}>
              <img src={nr06} alt="logo cacaushow" />
              <h3>NR-06: EQUIPAMENTO DE PROTEÇÃO INDIVIDUAL (EPI)</h3>
            </div>
            <div className={styles.img}>
              <img src={primeirossocorros} alt="logo cacaushow" />
              <h3>NR-07: PRIMEIROS SOCORROS</h3>
            </div>
            <div className={styles.img}>
              <img src={nr10} alt="logo cacaushow" />
              <h3>NR-10: SERVIÇOS COM ELETRICIDADE</h3>
            </div>
            <div className={styles.img}>
              <img src={nr10} alt="logo cacaushow" />
              <h3>NR-10-SEP: SERVIÇOS COM ELETRICIDADE EM POTÊNCIA</h3>
            </div>
            <div className={styles.img}>
              <img src={ponterolante} alt="logo cacaushow" />
              <h3>NR-11: OPERADOR DE PONTE ROLANTE</h3>
            </div>
            <div className={styles.img}>
              <img src={transpaleteira} alt="logo cacaushow" />
              <h3>NR-11: OPERADOR DE EMPILHADEIRA</h3>
            </div>
            <div className={styles.img}>
              <img src={ponterolante} alt="logo cacaushow" />
              <h3>NR-11: OPERADOR DE TRANSPALETEIRA ELÉTRICA</h3>
            </div>
            <div className={styles.img}>
              <img src={nr12} alt="logo cacaushow" />
              <h3>NR-12: SEGURANÇA NO TRABALHO EM MÁQUINAS E EQUIPAMENTOS</h3>
            </div>
            <div className={styles.img}>
              <img src={nr20} alt="logo cacaushow" />
              <h3>NR-20: INFLAMÁVEIS E COMBUSTÍVEIS</h3>
            </div>
            <div className={styles.img}>
              <img src={nr33} alt="logo cacaushow" />
              <h3>NR-33: ESPAÇO CONFINADO</h3>
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
        </div>
        <div className={styles.documentacao}>
          <div className={styles.titulo}>
            <h2>Documentação: </h2>
          </div>
          <div className={`${styles.imagensDocumentacao} animaLeft`}>
            <div className={styles.img}>
              <img src={ltcat} alt="logo cacaushow" />
              <h3>
                LTCAT: LAUDO TÉCNICO DAS CONDIÇÕES DO AMBIENTE DE TRABALHO
              </h3>
            </div>
            <div className={styles.img}>
              <img src={pgr} alt="logo cacaushow" />
              <h3>PGR: PROGRAMA DE GERENCIAMENTO DE RISCOS</h3>
            </div>
            <div className={styles.img}>
              <img src={pcmso} alt="logo cacaushow" />
              <h3>PCMSO: PROGRAMA DE CONTROLE MÉDICO DE SAÚDE OCUPACIONAL</h3>
            </div>
          </div>
        </div>
        <div className={styles.aluguel}>
          <div className={styles.titulo}>
            <h2>Aluguel de equipamentos: </h2>
          </div>
          <div className={`${styles.imagensDocumentacao} animaLeft`}>
            <div className={styles.img}>
              <img src={ambientais} alt="logo cacaushow" />
              <h3>AVALIAÇÕES AMBIENTAIS E LOCAÇÃO DE APARELHOS</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servicos;
