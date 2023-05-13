import React from 'react'
import Avatar from '../img/perfil_portifolio.jpeg'
import '../styles/components/sidebar.sass'

export const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Renan Santos" />
      <p className="title">Desenvolvedor</p>
      <p>redes sociais</p>
      <p>informações de contato</p>
      <a href="" className="btn">Download currículo</a>
    </aside>
  )
}
