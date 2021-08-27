import { useContext } from 'react';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import { TransactionsContext } from '../../TransactionsContext';

import { Container } from "./styles";

export function Summary() {

    const transactions = useContext(TransactionsContext)

    console.log(transactions)

    return (
        <Container>

            <div>
                <header>
                    <p>Entrada</p>
                    <img src={incomeImg} alt="Entradas" />
                </header>
                <strong>R$ 1.000</strong>
            </div>
            <div>
                <header>
                    <p>Saída</p>
                    <img src={outcomeImg} alt="Entradas" />
                </header>
                <strong>R$ 500</strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>Saldo</p>
                    <img src={totalImg} alt="Entradas" />
                </header>
                <strong>R$ 500</strong>
            </div>
        </Container>
    )
}