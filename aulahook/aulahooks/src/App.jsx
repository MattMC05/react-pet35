
import axios from "axios";
import { useEffect, useState } from "react";

const url = "https://api.serratec.mwmsoftware.com/aliens";

function App() {
  const [aliens, setAliens] = useState([]);

  async function buscarAliensComAxios() {
    try {
      const resposta = await axios.get(url);
      setAliens(resposta.data);
    } catch (error) {
      console.error("Erro ao buscar aliens com axios:", error);
    }
  }

  useEffect(() => {
    buscarAliensComAxios();
  }, []);


  useEffect(() => {
    console.log("Estado aliens atualizado:", aliens);
  }, [aliens]);


  return (
    <section>
      <h1>Aliens</h1>
      {aliens.map((alien) => (
        <div style={{ border: "1px solid #ccc", margin: "10px" ,padding: "10px"}} key={alien.id}>
          <p>nome:{alien?.nome === 'string' ? 'Nome não disponível' : alien?.nome}</p>
          <p>especie: {alien?.especie}</p>
          <p>planeta: {alien?.planeta}</p>
        </div>
      ))}
    </section>
  );
}

export default App;