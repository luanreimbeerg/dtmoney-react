import logoImg from "./../../assets/logo.svg";
import { Container, Content } from "./styles";

interface HeaderProps {
  onOpemMewTransactionModal: () => void;
}

export function Header({ onOpemMewTransactionModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button onClick={onOpemMewTransactionModal}>Nova transação </button>
      </Content>
    </Container>
  );
}
