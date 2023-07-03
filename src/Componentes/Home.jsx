import React, { useState, useEffect } from "react";
import trabalhadores from "../img/trabalhadores.jpg";
import styles from "./Home.module.css";
import Valores from "./Valores";
import Faq from "./Faq";
import EmpresasClientes from "./EmpresasClientes";
import ChamadosServiços from "./ChamadosServiços";
import capacete from "../img/capacete.png";
import saude from "../img/protecao.png";
import Esocial from "./Esocial";
import whatsapp from "../img/whatsapp-logo.png";
import useAnimaScroll from "../Hook/useAnimaScroll.jsx";

const Home = () => {
  useAnimaScroll(".js-scroll", "animaLeft");
  const tituloH1 = "Quem somos?";
  const [letraAtual, setLetraAtual] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setLetraAtual((letraAtual) => letraAtual + 1);
    }, 200);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <>
      <main>
        <img
          className={styles.logoWhatssap}
          src={whatsapp}
          alt="logo whatssap"
        />
        <div className={`${styles.left} animaLeft `}>
          <h1>
            {tituloH1.substring(0, letraAtual)}
            <span className="piscar">|</span>
          </h1>
          <h2>
            Inaugurada em Fevereiro de 2014, com sede no município de Linhares
            Espirito Santo, a Preserve é uma empresa prestadora de serviços
            relacionados com segurança e saúde ocupacional, que se mantem sempre
            em busca de novas técnicas de trabalho e equipamentos, onde com uma
            visão inovadora, trás para seus clientes e parceiros o que há de
            mais moderno no mercado, valorizando sempre a saúde das empresas e
            de seus colaboradores{" "}
          </h2>
          <button>Entre em contato</button>
        </div>

        <div className={styles.right}>
          <h2 className={`${styles.seguranca} animaRight`}>
            <img src={capacete} alt="icone capacete" />
            Segurança do Trabalho
          </h2>
          <div className={`${styles.containerImg} animaLeft`}>
            <img
              src={trabalhadores}
              alt="Trabalhadores Segurança do Trabalho"
            />
          </div>
          <h2 className={`${styles.saude} animaRight`}>
            <img src={saude} alt="icone saude" />
            Priorizando o bem-estar
          </h2>
        </div>
      </main>
      <Valores />
      <Faq />
      <EmpresasClientes />
      <ChamadosServiços />
      <Esocial />
    </>
  );
};

export default Home;
