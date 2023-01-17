import { useState } from 'react'
import Banner from './Components/Banner'
import Form from './Components/Form'
import Team from './Components/Team'

function App() {
  const [colaboradores, setColaboradores] = useState([])

  const setor = [
    {
      nome: 'Engenharia',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9'
    },

    {
      nome: 'NOC Nível 1',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },

    {
      nome: 'NOC Nível 2',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },

    {
      nome: 'NOC Nível 3',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    }
  ]

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
    console.log(colaborador)
  }
  return (
    <div>
      <Banner />
      <Form aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} setor={setor.map(item => item.nome)} />

      {setor.map((item, key) =>
        <Team
          key={key}
          setor={item.nome}
          cor1={item.corPrimaria}
          cor2={item.corSecundaria}
          colaboradores={colaboradores.filter(colaborador => colaborador.cargo == item.nome)}
          />
          )}

    </div>
  )
}

export default App
