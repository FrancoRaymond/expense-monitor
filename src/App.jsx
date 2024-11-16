import React, { createContext, useState, useContext, useEffect } from 'react';
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
        return acc + parseInt(curr.amnt.slice(1)); 
      } else if (curr.amnt[0] === '-') {
        return acc - parseInt(curr.amnt.slice(1)); 
      }
      return acc;
    }, 0);
  
    const newIncome = addedItems.reduce((acc, curr) => {
      if (curr.amnt[0] === '+') {
        return acc + parseInt(curr.amnt.slice(1)); 
      }
      return acc;
    }, 0);
  
    const newExpense = addedItems.reduce((acc, curr) => {
      if (curr.amnt[0] === '-') {
        return acc + parseInt(curr.amnt.slice(1)); 
      }
      return acc; 
    }, 0);
  
    setBalance(newBalance);
    setIncome(newIncome);
    setExpense(newExpense);

    localStorage.setItem('addedItems', JSON.stringify(addedItems));
  
  }, [addedItems]);
  
  return (
    <div className='max-w-96 app'>
      <div className='py-5 w-full flex flex-col bg-blue-700 rounded-b-md rounded-t-none'>
        <h1 className='ml-auto font-semibold mx-auto text-lg text-white'>Expense Monitor</h1>
        <div className='mt-5'>
          <div className='pl-2'>
            <p className='text-sm text-white'>YOUR BALANCE</p>
            <h2 className='font-medium text-[1.5rem] text-white'>{`R ${balance}`}</h2>
          </div>
          <div className='flex w-5/6 gap-6 mx-auto mt-5'>
            <div className='flex flex-col px-4 py-3 w-1/2 items-center rounded-md bg-white bg-opacity-80 backdrop-blur-md'>
              <p className='text-sm text-green-600'>INCOME</p>
              <p className='text-green-600 font-semibold'>{`R ${income}`}</p>
            </div>
            <div className='flex flex-col px-4 py-3 w-1/2 items-center rounded-md bg-white bg-opacity-80'>
              <p className='text-sm text-red-600'>EXPENSE</p>
              <p className='text-red-600 font-semibold'>{`R ${expense}`}</p>
            </div>
          </div>
        </div>
      </div>
      <AppContext.Provider value={{ setBalance, setIncome, setExpense, addedItems, setAddedItems }}>
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



