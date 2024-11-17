import React, { useState, useEffect } from 'react';
import { useAppContext } from '../App';

const Additem = () => {
  const { setAddedItems} = useAppContext();
  const [itemName, setItemName] = useState('');
  const [amount, setAmount] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    if (itemName === '' || amount === '' || parseInt(amount.slice(1)) === NaN || amount[0] !== '+' && amount[0] !== '-') {
      return;
    }

    const newItem = {
      name: itemName,
      amnt: amount,
    };
 
    setAddedItems((prevItems) => [...prevItems, newItem]);
    setItemName('');
    setAmount('');
  }

  return (
    <div className='mt-3 mb-10'>
      <h3 className='font-semibold py-1 border-b-2 border-gray-200'>
        Add new transaction
      </h3>
      <form onSubmit={handleSubmit} className='mt-3 flex flex-col gap-2'>
        <label className='text-gray-700'>
          Text <br />
          <input
            onChange={(e) => setItemName(e.target.value)}
            value={itemName}
            name='Text'
            className='border border-gray-200 rounded-md w-full py-1 sm:py-2 sm:px-3 px-2 mt-1 outline-none bg-blue-100 focus:py-2 transition duration-100'
            type='text'
            placeholder='Enter text...'
          />
        </label>
        <label className='text-gray-700 m-0 p-0'>
          Amount <br />
          <span className='text-sm'>(negative-expense, positive-income)</span>{' '}
          <br />
          <input
            onChange={(e) => setAmount(e.target.value)}
            value={amount}
            name='Amount'
            className='border border-gray-200 rounded-md w-full py-1 px-2 sm:py-2 sm:px-3 mt-1 outline-none bg-blue-100 focus:py-2 transition duration-100'
            type='text'
            placeholder='Enter amount...'
          />
        </label>
        <button
          className='bg-blue-700 text-white mt-3 py-1 sm:py-2 active:bg-blue-800 transition duration-100 rounded-md w-10/12 mx-auto active:scale-110'
          type='submit'
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Additem;
