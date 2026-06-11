function CardExperiencia ({ titulo, empresa, periodo}){

    return(
        <div  className="card">
            <h2>{titulo}</h2>
            <span><h3>Empresa: {empresa}</h3>
            <h3>Período: {periodo}</h3></span>
        </div>
    );
}
export default CardExperiencia;