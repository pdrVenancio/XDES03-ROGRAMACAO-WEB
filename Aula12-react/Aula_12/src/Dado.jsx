export default function Dado({num_faces = 6}){

    let valor_dado = Math.trunc(Math.random() * num_faces) + 1

    return(
        <p>Valor do dado jogado: {valor_dado} </p>
    )
}