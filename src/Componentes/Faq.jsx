import React from "react";
import styles from "./Faq.module.css";
import arrow from "../img/arrow-down.png";

const Faq = () => {
  function handleClick(e) {
    const imagem = e.target;
    const proximoElemento = e.target.nextElementSibling;
    imagem.classList.toggle("girar");
    proximoElemento.classList.toggle("displayNone");
  }

  return (
    <article>
      <div className={styles.titulo}>
        <h2>Tire sua dúvida: </h2>
      </div>

      <div className={`${styles.containerPerguntas} js-scroll displayNone`}>
        <div className={styles.perguntas}>
          <h3>A Preserve trabalha com capacitação? </h3>
          <img
            className="girar"
            onClick={handleClick}
            src={arrow}
            alt="Seta para baixo"
          />
          <div className={`${styles.resposta} js-scroll animaLeft`}>
            <p>
              Sim, trabalhamos com capitação em NRs, com profissionais
              capacitados e material de primeira para lhe atender, se quiser
              sabe mais sobre os nossos treinamentos, clique na área de
              Serviços.
            </p>
          </div>
        </div>
        <div className={styles.perguntas}>
          <h3>Como posso agendar um orçamento? </h3>
          <img onClick={handleClick} src={arrow} alt="Seta para baixo" />
          <div className={`${styles.resposta} displayNone js-faq animaLeft`}>
            <p>
              Pode entrar em contato pelo nosso e-mail
              (comercial@preservesst.com.br) ou pelo nosso telefone
              disponibilizado na área de Contatos.
            </p>
          </div>
        </div>
        <div className={styles.perguntas}>
          <h3>Vocês atendem em qual região?</h3>
          <img onClick={handleClick} src={arrow} alt="Seta para baixo" />

          <div className={`${styles.resposta} displayNone js-faq animaLeft`}>
            <p>
              Atendemos em todo Norte do estado, desde avaliaçãoes ocupacionas a
              capacitação em empresas.
            </p>
          </div>
        </div>
        <div className={styles.perguntas}>
          <h3>Fornecerem profissionais para atuar na minha empresa? </h3>
          <img onClick={handleClick} src={arrow} alt="Seta para baixo" />
          <div className={`${styles.resposta} displayNone js-faq animaLeft`}>
            <p>
              Sim, a preserve conta com uma gama de Técnicos em Segurança do
              Trabalho, onde prestamos serviço para terceiro na OFI e Cobra
              Engenharia.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Faq;
