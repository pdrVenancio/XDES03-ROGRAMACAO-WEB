import Propriedade from "./Propriedade"

export default function ListaPropriedades({propriedades}){

    let listaProp = propriedades.map(p => {
        // <Propriedade nome={p.nome} avaliacao={p.avaliacao} preco={p.preco} />
        return(<Propriedade {...p}/>)
    })
    
    return(
        <>
            {listaProp}
        </>
    )
}