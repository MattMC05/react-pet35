import { useState } from "react";
import foto from "../assets/FotoPerfil.jpeg"

function Header() {

    const nome = "Matheus Mendonça Cogliatti"
    const email = "matheusm.cogliatti@gmail.com"
    const telefone = "(xx) xxxxx-xxxx"
    const ocupacao = "Desenvolvedor FullStack"
    const [mostrarContato, setMostrarContato] = useState(false);

    return (
        <div className="head">
            <div>
                <img src={foto} alt="foto de perfil" className="foto" />
            </div>
            <div>
                <h1>{nome}</h1>
                <h2>{ocupacao}</h2>
                <button onClick={() => setMostrarContato(!mostrarContato)}>
                    {mostrarContato? "Ocultar" : "Contatos"}
                </button>

                {mostrarContato && (
                    <div className="contato">
                        <p>Email: {email}</p>
                        <p>Tel.: {telefone}</p>
                    </div>
                )}
                </div>
        </div>
    );
}

export default Header;