function Secao({ titulo, elementos}) {
    return (
        <section>
            <h1 className="titulo-secao">{titulo}</h1>
            <div>{elementos}</div>
        </section>
    );
}
export default Secao;