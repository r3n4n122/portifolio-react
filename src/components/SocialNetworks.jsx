import React from 'react'
import {FaLinkedin, FaGithub, FaWhatsapp} from "react-icons/fa"
import "../styles/components/socialnetworks.sass"

const socialNetworks = [
    { name: "linkedin", icon: <FaLinkedin />, link: "https://www.linkedin.com/in/renan-santos-94b9951a2/" },
    { name: "github", icon: <FaGithub />, link: "https://github.com/r3n4n122"},
    { name: "whatsapp", icon: <FaWhatsapp />, link: "https://api.whatsapp.com/send?phone=5511966151832&text=Texto%20aqui"},
];

export const SocialNetworks = () => {
  return (
    <section id="socialnetworks">
        {socialNetworks.map((network) => (
        <a href={network.link} className="social-btn" id={network.name} key={network.name} target="_blank">
            {network.icon}
        </a>
        ))}
    </section>
  )
}
