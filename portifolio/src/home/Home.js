import React from "react";
import { useState } from "react";
import Modal from "react-modal";
import imagem from './imagens/bg.jpg';
import './style.css'


function Home(){

  const [open, setOpen] = useState(false);

  function modalOpen(){
    setOpen(true)
  }

  function modalClose(){
    setOpen(false)
  }

  return(
    <section className="home">
      <div className="img_home">
        <img src={imagem} alt="" />
      </div>

      <div className="banner">
        <h1>Desenvolvedor Full-stack</h1>
        <p>Renan Santos Gonçalves</p>
          <button className="btn-saiba" onClick={modalOpen}>
            Saiba Mais
          </button>
          <Modal isOpen={open} onRequestClose={modalClose} className="modal"  overlayClassName="modal-table">
            <div  >
              <h2>Sobre mim</h2>
              <p>Programador Web: É o programador especialista em criar sites que são considerados páginas dinâmicas, como portais e fóruns.[4] Linguagens geralmente utilizadas: HTML (incluindo JavaScript e CSS), Java, PHP, .NET (ASP, C# e VB), Ruby, Python e Perl.
Programador Desktop: É o programador que desenvolve aplicativos para rodar localmente nas máquinas. Linguagens geralmente utilizadas: C, C++, C# e Java.</p>
              <button className="btn-default" onClick={modalClose}>Voltar</button>
            </div>
          </Modal>
  
      </div>
    </section>
  )

}

export default Home