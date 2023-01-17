import React from 'react'
import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Form.css'

const Form = (props) => {

    const [nome, setNome] = useState('')
    const [imagem, setImagem] = useState('')
    const [cargo, setCargo] = useState('')

    const onSubmit = (event) => {
        event.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            imagem,
            cargo
        })
        setImagem('')
        setNome('')
        setCargo('')
    }
    return (
        <section className='form'>
            <form onSubmit={onSubmit}>
                <h2>Cadastrar colaborador</h2>
                <CampoTexto obrigatorio={true} valor={nome} label='Nome' placeholder="Digite seu nome" aoAlterado={valor => setNome(valor)} />
                <CampoTexto obrigatorio={true} valor={imagem} label='Imagem' placeholder="Digite o endereço da imagem" aoAlterado={valor => setImagem(valor)} />
                <ListaSuspensa obrigatorio={true} valor={cargo} itens={props.setor} label='Cargo' aoAlterado={valor => setCargo(valor)} />
                <Botao>
                    Cadastrar
                </Botao>
            </form>
        </section>
    )
}

export default Form