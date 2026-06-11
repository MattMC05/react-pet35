import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Secao from './components/Secao'
import Card from './components/CardExperiencia'

function App() {

  return (
    <div className='curriculo'>
      <Header/>
      <Secao titulo={"Formação Acadêmica"}
        elementos={
          <>
            <Card titulo={"Ensino Médio Profissionalizante Técnico em Informática"}
            empresa={"Escola Firjan Senai Sesi"}
            periodo={"01/2021 - 12/2023"}
            />
            <br/>
            <Card titulo={"Curso de Edição de Vídeo"}
            empresa={"Graph-it"}
            periodo={"08/07/2024 - 12/11/2024"}
            />
            <br/>
            <Card titulo={"Residência em TIC em Software"}
            empresa={"Serratec / Firjan SENAI"}
            periodo={"03/2026 - 07/2026"}
            />
          </>
        }
      />
      <Secao titulo={"Experiências Profissionais"}
        elementos={
          <>
            <Card titulo={"Estágio Supervisionado pelo Setor de Informática"}
            empresa={"Firjan SENAI"}
            periodo={"07/2022 - 12/2023"}
            />
            <br/>
            <Card titulo={"Auxiliar de Produção (Menor Aprendiz)"}
            empresa={"Wilcos do Brasil Indústria e Comércio Limitada"}
            periodo={"14/10/2024 - 14/09/2025"}
            />
          </>
        }
      />
      <Secao titulo={"Idiomas"}
        elementos={
          <>
            <h2 id='idiomas'>Português (avançado), Inglês (avançado), Espanhol (iniciante)</h2>
          </>
        }
      />
    </div>
  )
}

export default App
