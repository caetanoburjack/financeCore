import { Container } from "./styles";

export function TransactionsTable() {

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

                </tbody>
            </table>
        </Container>
    )
}