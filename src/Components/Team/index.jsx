import React from 'react'
import Card from '../Card'
import './Team.css'

const Team = ({ setor, cor1, cor2, colaboradores }) => {
  return (
    colaboradores.length > 0 &&
    <section className='time' style={{ backgroundColor: cor2 }}>
      <h3 style={{ borderColor: cor1 }}>{setor}</h3>
      <div className='colaboradores'>
        {colaboradores.map((colaborador, key) => <Card key={key} background={cor1} cargo={colaborador.cargo} imagem={colaborador.imagem} nome={colaborador.nome} />)}
      </div>
    </section>
  )
}

export default Team