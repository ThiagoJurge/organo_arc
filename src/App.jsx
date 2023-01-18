import { useState } from 'react'
import Banner from './Components/Banner'
import Footer from './Components/Footer'
import Form from './Components/Form'
import Team from './Components/Team'
import { v4 as uuidv4 } from 'uuid'

function App() {

  const [setor, setSetor] = useState([
    {
      id: uuidv4(),
      nome: 'Engenharia',
      cor: '#57C278',
    },

    {
      id: uuidv4(),
      nome: 'NOC Nível 1',
      cor: '#82CFFA',
    },

    {
      id: uuidv4(),
      nome: 'NOC Nível 2',
      cor: '#A6D157',
    },

    {
      id: uuidv4(),
      nome: 'NOC Nível 3',
      cor: '#E06B69',
    }
  ])

  const [colaboradores, setColaboradores] = useState([
    {
      id: uuidv4(),
      favorito: false,
      nome: "1",
      imagem: "1",
      cargo: "Engenharia"
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "2",
      imagem: "2",
      cargo: "NOC Nível 1"
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "3",
      imagem: "3",
      cargo: "NOC Nível 2"
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "4",
      imagem: "4",
      cargo: "NOC Nível 3"
    }
  ])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
    console.log(colaborador)
  }

  function deletarColaborador(id) {
    console.log(id)
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id));
  }

  function mudarCordoSetor(cor, id) {
    setSetor(setor.map((setor) => {
      if (setor.id === id) {
        setor.cor = cor
      }
      return setor
    }))
  }

  function cadastrarTime(novoTime) {
    setSetor([...setor, { ...novoTime, id: uuidv4() }])
  }

  function resolverFavorito(id) {
    setColaboradores(colaboradores.map(colaborador => {
      if(colaborador.id === id) colaborador.favorito = !colaborador.favorito;
      return colaborador;
    }))
  }

  return (
    <div>
      <Banner />
      <Form
        cadastrarTime={cadastrarTime}
        aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}
        setor={setor.map(item => item.nome)}
      />

      {setor.map((item, key) =>
        <Team
        aoFavoritar={resolverFavorito}
          favorito={colaboradores.filter(colaborador=>colaborador.favorito)}
          mudarCor={mudarCordoSetor}
          key={key}
          setor={item.nome}
          id={item.id}
          cor={item.cor}
          colaboradores={colaboradores.filter(colaborador => colaborador.cargo == item.nome)}
          aoDeletar={deletarColaborador}
        />
      )}
      <Footer />
    </div>
  )
}

export default App