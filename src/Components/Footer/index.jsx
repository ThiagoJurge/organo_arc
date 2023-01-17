import './Footer.css'
import logo from './../../imagens/logo_frinet.png'

import React from 'react'

const Footer = () => {
    return (
        <div className="pos">
            <div className="tela">
                <img src={logo} alt="" className='logo' />
            </div>
        </div>
    )
}

export default Footer