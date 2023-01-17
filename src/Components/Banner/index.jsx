import React from 'react'
import banner_img from '../../imagens/banner.png'
import './Banner.css'

function Banner() {
    return (
        <header className='banner'>
            <img src={banner_img} alt="Main Banner" />
        </header>
    )
}

export default Banner