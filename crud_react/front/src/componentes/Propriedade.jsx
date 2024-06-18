
export default function Propriedade({nome,preco,avaliacao}) {
  
   return (
    <tr>
        <td>{nome}</td>
        <td>{preco}</td>
        <td>{avaliacao}</td>
        <td>
            <button>Atualizar</button>
            <button>Apagar</button>
        </td>
    </tr>
  )
}