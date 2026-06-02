import { LuUserSearch } from "react-icons/lu";

export default function ListaPendencia({alunos}){
    
    const resultado = alunos.map((aluno, index) =>{
        if(aluno.pendencia){
            return <tr key={index.matricula}>
                <td>{aluno.matricula}</td>
                <td>{aluno.nome}</td>
                <td>{aluno.media}</td>
            </tr> 
        }
        return null
    })

    return(
        <>  <div className="titulo-table">
                <LuUserSearch />
                <h2>Lista de Alunos com Pendências</h2>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Matricula</th>
                        <th>Nome</th>
                        <th>Media</th>
                    </tr>
                </thead>
                <tbody>
                    {resultado}
                </tbody>
            </table>
        </>
    )


}