import React from "react";
import imagem1 from './imagens/proj1.jpg'
import imagem2 from './imagens/proj2.jpg'
import imagem3 from './imagens/proj3.jpg'
import './style.css'

function Project(){

  return(
    <section className="projects">
      <div className="title-projects">
        <h1>Projetos</h1>
      </div>
      <div className="img-project">
        <div className="img-project-info">s
          <img src={imagem1} />
        </div>
      </div>
      <div className="img-project">
        <img src={imagem2} />
        <div className="img-info">

        </div>
      </div>
      <div className="img-project">
        <img src={imagem3} />
        <div className="img-info">
        </div>
      </div>
    </section>
  )
}

export default Project