import '../repeticao/TabelaProdutos.css'
import React from 'react'
import Produtos from '../../data/produtos'

export default props => {

    function getLinhas() {
        return Produtos.map((produto, i) => {
            return (
                <tr key={produto.id} className={i % 2 === 0 ? 'Par' : ''}>
                    <td>{produto.id}</td>
                    <td>{produto.nome}</td>
                    <td>{produto.preco}</td>
                </tr>
            )
        })
    }

    return (
        <div className="TabelaProdutos">
            <table>
                <thead>
                    <th>Id</th>
                    <th>Nome</th>
                    <th>Preço</th>
                </thead>

                <tbody>
                    {getLinhas()}
                </tbody>

            </table>
        </div>
    )
}