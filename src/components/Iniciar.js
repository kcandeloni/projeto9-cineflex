import List from "./List";

export default function Iniciar ({setId}) {

    return (
        <>
            <div className="subtitle">
            <h2>Selecione o Filme</h2>
            </div>
            <div>
                <List setId={setId} />
            </div>
        </>
    );
}