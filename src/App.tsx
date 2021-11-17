import Modal from 'react-modal';
import { useState } from 'react';

import { GlobalStyle } from "./styles/global";
import { Header } from './components/Header';
import { Dashboard } from "./components/Dashboard";
import { NewTransactionModal } from './components/NewTransactionsTable';
import { TransactionsProvider } from './TransactionsContext';

Modal.setAppElement('#root');

export default function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

    function handleOpenNewTransactionModal(){
        setIsNewTransactionModalOpen(true)
    }

    function handleCloseNewTransactionModal(){
        setIsNewTransactionModalOpen(false)
    }

  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />

      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal} />
      <GlobalStyle />
    </TransactionsProvider>
  );
}