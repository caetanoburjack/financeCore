import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionsTable() {
    useEffect(() => {
        api.get('/transactions')
            .then(response => console.log(response.data));
    }, [])
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Desenvolvimento de Website</td>
                        <td>R$ 15.000</td>
                        <td>Criação</td>
                        <td>12/12/2012</td>
                    </tr>
                    <tr>
                        <td>Desenvolvimento de Website</td>
                        <td>R$ 15.000</td>
                        <td>Criação</td>
                        <td>12/12/2012</td>
                    </tr>
                    <tr>
                        <td>Desenvolvimento de Website</td>
                        <td className="withdraw">R$ 15.000</td>
                        <td>Criação</td>
                        <td>12/12/2012</td>
                    </tr>
                    <tr>
                        <td>Desenvolvimento de Website</td>
                        <td className="deposit">R$ 15.000</td>
                        <td>Criação</td>
                        <td>12/12/2012</td>
                    </tr>

                </tbody>
            </table>
        </Container>
    )
}