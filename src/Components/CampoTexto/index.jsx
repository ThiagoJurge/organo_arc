import React from 'react'
import { useState } from 'react'
import './CampoTexto.css'

const CampoTexto = ({ valor, placeholder, label, obrigatorio, aoAlterado }) => {

  const aoDigitado = (evento) => {
    aoAlterado(evento.target.value)
  }

  return (
    <div className='campo-texto'>
      <label>{label}</label>
      <input onChange={aoDigitado} value={valor} required={obrigatorio} placeholder={placeholder} />
    </div>
  )
}

export default CampoTexto