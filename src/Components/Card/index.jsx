import React from 'react'
import Default from './../../imagens/Default.png'
import './Card.css'
import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import topCard from '../../imagens/backgroundTopCard.png'

const Card = ({ nome, cargo, imagem, background, aoDeletar, id, favorito, aoFavoritar }) => {
  function favoritar (){
    aoFavoritar(id)
  }
  
  return (
    <div className='colaborador'>
      <AiFillCloseCircle size={25} className='deletar' onClick={() => aoDeletar(id)} />
      <div className='cabecalho' style={{ backgroundColor: background, backgroundImage: `url(${topCard})` }}>
        <img
          src={imagem}
          alt={nome}
          onError={e => {
            e.currentTarget.src = Default
          }} />
      </div>
      <div className='rodape'>
        <h4>{nome}</h4>
        <h5>{cargo}</h5>
        <div className='favoritar'>
          {favorito ? <AiFillHeart onClick={favoritar} /> : <AiOutlineHeart onClick={favoritar}/>}
        </div>
      </div>
    </div>
  )
}

export default Card