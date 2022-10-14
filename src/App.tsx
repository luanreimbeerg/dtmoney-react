import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import Modal from "react-modal";
import { useState } from "react";
import { NewTrasactionModal } from "./components/NewTrasactionModal";
import { TransactionsProvider } from "./hooks/useTransactionsContext";

Modal.setAppElement("#root");

export function App() {
  const [isNewTrasactionModalOpen, setIsNewTrasactionModalOpen] =
    useState(false);

  function handleOpenNewTrasactionModal() {
    setIsNewTrasactionModalOpen(true);
  }

  function handleCloseNewTrasactionModal() {
    setIsNewTrasactionModalOpen(false);
  }
  return (
    <TransactionsProvider>
      <Header onOpemMewTransactionModal={handleOpenNewTrasactionModal} />
      <Dashboard />

      <NewTrasactionModal
        isOpen={isNewTrasactionModalOpen}
        onRequestClose={handleCloseNewTrasactionModal}
      ></NewTrasactionModal>

      <GlobalStyle></GlobalStyle>
    </TransactionsProvider>
  );
}
