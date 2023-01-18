import React from 'react'
import Card from '../Card'
import './Team.css'
import hexToRgba from 'hex-to-rgba';
import backgroundCard from '../../imagens/backgroundCard.png'

const Team = ({ setor, cor, colaboradores, aoDeletar, mudarCor, id, aoFavoritar }) => {
  return (
    colaboradores.length > 0 &&
    <section className='time' style={{ backgroundColor: hexToRgba(cor, 0.6), backgroundImage: `url(${backgroundCard})` }}>
      <input type={'color'} onChange={evento => mudarCor(evento.target.value, id)} className='input-cor' />
      <h3 style={{ borderColor: cor }}>{setor}</h3>
      <div className='colaboradores'>
        {colaboradores.map((colaborador, key) => {
          // console.log(<Card key={key} background={cor1} cargo={colaborador.cargo} imagem={colaborador.imagem} nome={colaborador.nome} aoDeletar={aoDeletar}/>);
          return <Card key={key} aoFavoritar={aoFavoritar} favorito={colaborador.favorito} background={cor} id={colaborador.id} cargo={colaborador.cargo} imagem={colaborador.imagem} nome={colaborador.nome} aoDeletar={aoDeletar} />
        })}
      </div>
    </section>
  )
}

export default Team