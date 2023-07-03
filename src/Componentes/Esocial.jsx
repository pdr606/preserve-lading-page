import React from "react";
import styles from "./Esocial.module.css";
import foto1 from "../img/foto1.jpg";
import foto2 from "../img/foto2.png";
import foto3 from "../img/foto 3.jpg";

const Esocial = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.left}>
          <img
            className={styles.foto1}
            src={foto1}
            alt="Homem segurando capacete"
          />
          <img
            className={styles.foto2}
            src={foto2}
            alt="Homem segurando pasta na mão"
          />
          <img className={styles.foto3} src={foto3} alt="Simbolo eSocial" />
        </div>
        <div className={styles.right}>
          <div className={styles.eSocial}>
            <h3>
              Sua empresa está em dia com o <span>eSocial</span> ?
            </h3>
            <p>
              Contamos com um Software de ponta para realizar os envios, levando
              <strong> praticidade</strong>, <strong>qualidade</strong> e
              <strong> entrega</strong> para os nossos clientes.
            </p>
          </div>
          <div className={styles.vantagens}>
            <h3>
              O que te entregamos de vantagem ao fazer o controle do eSocial da
              sua empresa?
            </h3>
            <ul>
              <li>Fazemos controle de mais de 20 empresas mensalmente;</li>
              <li>Temos extrema segurança para o controle de dados;</li>
              <li>Gestão eficiente;</li>
              <li>
                Comunicação direta com a contabilidade, agilizando os processos
                de envio;
              </li>
              <li>Qualidade no serviço.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Esocial;
