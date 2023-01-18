import React from 'react'
import { useState } from 'react'
import './Campo.css'

const Campo = ({ valor, placeholder, label, obrigatorio, aoAlterado, type }) => {

  const aoDigitado = (evento) => {
    aoAlterado(evento.target.value)
  }

  return (
    <div className={`campo campo-${type}`}>
      <label>{label}</label>
      <input onChange={aoDigitado} type={type} value={valor} required={obrigatorio} placeholder={placeholder} />
    </div>
  )
}

export default Campo