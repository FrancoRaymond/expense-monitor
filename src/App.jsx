import React, { createContext, useState, useContext, useEffect } from 'react';
import Header from './components/Header';
import History from './components/History';
import Additem from './components/Additem';

const AppContext = createContext();

const App = () => {
  const [balance, setBalance] = useState(0);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [addedItems, setAddedItems] = useState(() => {
    const storedItems = localStorage.getItem('addedItems');
    return storedItems ? JSON.parse(storedItems) : [];
  });

  useEffect(() => {
    const newBalance = addedItems.reduce((acc, curr) => {
      if (curr.amnt[0] === '+') {
        return acc + parseFloat(curr.amnt.slice(1));
      } else if (curr.amnt[0] === '-') {
        return acc - parseFloat(curr.amnt.slice(1));
      }
      return acc;
    }, 0);
  
    const newIncome = addedItems.reduce((acc, curr) => {
      if (curr.amnt[0] === '+') {
        return acc + parseFloat(curr.amnt.slice(1));
      }
      return acc;
    }, 0);
  
    const newExpense = addedItems.reduce((acc, curr) => {
      if (curr.amnt[0] === '-') {
        return acc + parseFloat(curr.amnt.slice(1));
      }
      return acc;
    }, 0);
  
    // Format the numbers using toLocaleString
    setBalance(newBalance.toLocaleString('en-US'));
    setIncome(newIncome.toLocaleString('en-US'));
    setExpense(newExpense.toLocaleString('en-US'));
  
    localStorage.setItem('addedItems', JSON.stringify(addedItems));
  }, [addedItems]);
  
  
  
  return (
    <div className='max-w-3xl app'>
      <AppContext.Provider value={{ setBalance, setIncome, setExpense, addedItems, setAddedItems,balance, income, expense }}>
        <Header />
        <History />
        <Additem />
      </AppContext.Provider>    
    </div>
  );
};

  export const useAppContext = () => {
    return useContext(AppContext);
  };

export default App;



