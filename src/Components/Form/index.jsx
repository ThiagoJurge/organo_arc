import React from 'react'
import { useState } from 'react'
import Botao from '../Botao'
import Campo from '../Campo'
import ListaSuspensa from '../ListaSuspensa'
import './Form.css'

const Form = (props) => {

    const [nomeTime, setNomeTime] = useState('')
    const [corTime, setCorTime] = useState('')

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
                <Campo obrigatorio valor={nome} type={'text'} label='Nome' placeholder="Digite seu nome" aoAlterado={valor => setNome(valor)} />
                <Campo obrigatorio valor={imagem} type={'text'} label='Imagem' placeholder="Digite o endereço da imagem" aoAlterado={valor => setImagem(valor)} />
                <ListaSuspensa obrigatorio valor={cargo} itens={props.setor} label='Cargo' aoAlterado={valor => setCargo(valor)} />
                <Botao>
                    Cadastrar
                </Botao>
            </form>
            <form onSubmit={(evento)=>{
                evento.preventDefault()
                props.cadastrarTime({nome: nomeTime,cor: corTime})
            }}>
                <h2>Cadastrar time</h2>
                <Campo obrigatorio valor={nomeTime} type={'text'} label='Nome do Time' placeholder="Insira o nome do time" aoAlterado={valor => setNomeTime(valor)} />
                <Campo obrigatorio valor={corTime} type={'color'} label='Cor do Time' placeholder="Insira a cor do time" aoAlterado={valor => setCorTime(valor)} />
                <Botao>
                    Criar Time
                </Botao>
            </form>
        </section>
    )
}

export default Form