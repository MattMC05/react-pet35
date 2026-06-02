import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import {alunos} from './data/alunos'
import Alunos from './components/Alunos'
import ListaPendencia from './components/ListaPendencia'
import ContarPendencias from './components/ContarPendencias'

function App() {

  return (
    <>
      <h1>Nome do Curso</h1>
      <h3>tudo está sendo renderizado dentro desse return</h3>
      <Alunos alunos={alunos}/>
      <br/>
      <ListaPendencia alunos={alunos}/>
      <br/>
      <ContarPendencias alunos={alunos}/>
    </>//fragment (<> vazio)
  )
}

export default App
