import { Container } from "./styles";

import icomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import { useContext } from "react";
import { TransactionsContext } from "../../TransactionsContext";

export function Summary(){
    const data = useContext(TransactionsContext);

    return(
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={icomeImg} alt="Entradas" />
                </header>
                <strong>R$1000</strong>
            </div>

            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcomeImg} alt="Entradas" />
                </header>
                <strong>- R$500</strong>
            </div>

            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Entradas" />
                </header>
                <strong>R$500</strong>
            </div>
        </Container>
    )
}