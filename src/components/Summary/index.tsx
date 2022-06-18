import { useContext } from "react";
import incomeImg from "../../assets/entradas.svg";
import outcomeImg from "../../assets/saídas.svg";
import total from "../../assets/total.svg";
import { TransactionsContext } from "../../TransactionsContext";
import { Container } from "./styles";

export function Summary() {
  const transactions = useContext(TransactionsContext);
  console.log(transactions);

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>R$ 1000,000</strong>
      </div>

      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Saídas" />
        </header>
        <strong>-R$ 5000,000</strong>
      </div>

      <div className="hightlight-backgroung">
        <header>
          <p>Total</p>
          <img src={total} alt="Total" />
        </header>
        <strong>R$ 500,000</strong>
      </div>
    </Container>
  );
}
