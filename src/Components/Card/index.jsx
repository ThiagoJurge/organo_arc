import React from 'react'
import './Card.css'

const Card = ({nome,cargo,imagem, background}) => {
  return (
    <div className='colaborador'>
        <div className='cabecalho' style={{backgroundColor: background}}>
            <img src={imagem} alt='' />
        </div>
        <div className='rodape'>
            <h4>
{nome}
            </h4>
            <h5>
{cargo}
            </h5>
        </div>
    </div>
  )
}

export default Card