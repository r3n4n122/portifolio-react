import React from "react";
import imagem from './imagens/skils.png';
import './style.css'

function Skils(){
  return (
    <section className="section-skils">
      <div className="title-skils">
        <h1>Conhecimentos</h1>
      </div>
      <div className="skils">
        <div className="skil">
          <div className="skil-header">
            <i className="fab fa-html5"></i>
            <h3>HTML</h3>
          </div>
          <div className="skil-text">
            <p>HTML abreviação para a expressão inglesa HyperText Markup Language, que significa: "Linguagem de Marcação de Hipertexto" é uma linguagem de marcação utilizada na construção de páginas na Web. Documentos HTML podem ser interpretados por navegadores.</p>
          </div>
        </div>
        <div className="skil">
          <div className="skil-header">
            <i className="fab fa-css3-alt"></i>
            <h3>CSS</h3>
          </div>
          <div className="skil-text">
            <p>Cascading Style Sheets é um mecanismo para adicionar estilo a um documento web. O código CSS pode ser aplicado diretamente nas tags ou ficar contido dentro das tags style. Também é possível, em vez de colocar a formatação dentro do documento, criar um link para um arquivo CSS que contém os estilos.</p>
          </div>
        </div>
        <div className="skil">
          <div className="skil-header">
            <i className="fas fa-pencil-alt"></i>
            <h3>Ruby on rails</h3>
          </div>
          <div className="skil-text">
            <p>Ruby on Rails é um framework livre que promete aumentar velocidade e facilidade no desenvolvimento de sites orientados a banco de dados, uma vez que é possível criar aplicações com base em estruturas pré-definidas.</p>
          </div>
        </div>
        <div className="skil">
          <div className="skil-header">
            <i className="fab fa-js"></i>
            <h3>Javascript</h3>
          </div>
          <div className="skil-text">
            <p>História e desenvolvimento inaugura uma série de publicações do historiador marxista Caio Prado Júnior que a Boitempo publicará ao longo dos próximos anos, sob coordenação de Luiz Bernardo Pericás</p>
          </div>
        </div>
        <div className="skil">
          <div className="skil-header">
            <i className="fa-brands fa-react"></i>
            <h3>React</h3>
          </div>
          <div className="skil-text">
            <p>O React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web. É mantido pelo Facebook, Instagram, outras empresas e uma comunidade de desenvolvedores individuais. É utilizado nos sites da Netflix, Imgur, Feedly, Airbnb, SeatGeek, HelloSign, Walmart e outros. </p>
          </div>
        </div>
        <div className="skil">
          <div className="skil-header">
            <i className="fab fa-github"></i>
            <h3>Git e GitHub</h3>
          </div>
          <div className="skil-text">
            <p>GitHub é uma plataforma de hospedagem de código-fonte e arquivos com controle de versão usando o Git. Ele permite que programadores, utilitários ou qualquer usuário cadastrado na plataforma contribuam em projetos privados e/ou Open Source de qualquer lugar do mundo.</p>
          </div>
        </div>
        <div className="skils-img">
          <img src={imagem} alt="imagem conhecimento"/>
        </div>
      </div>
    </section>
  )
}

export default Skils;