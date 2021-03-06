import { FormEvent, useState } from 'react'
import Modal from 'react-modal'
import { Container, RadioBox, TransactionTypeContainer } from './styles'
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { api } from '../../services/api'

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
    const [title, setTitle] = useState('')
    const [value, setValue] = useState(0)
    const [category, setCategory] = useState('')

    const [typeTransaction, setTypeTransaction] = useState('deposit');


    function handleCreateNewTransaction(event: FormEvent) {
        event.preventDefault();
        const data = {
            title, value, category, typeTransaction
        }

        api.post('/transactions', data)
    }


    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button className="btn-react-modal-close" type="button" onClick={onRequestClose}>
                <img src={closeImg} alt="Fechar Modal" />
            </button>
            <Container onSubmit={handleCreateNewTransaction}>
                <h2>Cadastrar Transação</h2>
                <input type="text" placeholder="Título" value={title} onChange={event => setTitle(event.target.value)} />
                <input type="number" placeholder="Valor" value={value} onChange={event => setValue(Number(event.target.value))} />

                <TransactionTypeContainer>

                    <RadioBox
                        type="button"
                        onClick={() => { setTypeTransaction('deposit') }}
                        isActive={typeTransaction === 'deposit'}
                        activeColor="green"
                    >
                        <img src={incomeImg} alt="Income" />
                        <span>Entrada</span>
                    </RadioBox>

                    <RadioBox
                        type="button"
                        onClick={() => { setTypeTransaction('withdraw') }}
                        isActive={typeTransaction === 'withdraw'}
                        activeColor="red">
                        <img src={outcomeImg} alt="outcome" />
                        <span>Saída</span>
                    </RadioBox>

                </TransactionTypeContainer>

                <input type="text" placeholder="Categoria" value={category} onChange={event => setCategory(event.target.value)} />
                <button type="submit">Cadastrar</button>
            </Container>

        </Modal >
    )
}