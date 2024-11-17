import React, { useState } from 'react';
import deleteIcon from '../assets/icon-delete.svg'
import { useAppContext } from '../App';

const History = () => {

  const {addedItems, setAddedItems} = useAppContext();

  const handleDelete = (indexToDelete) => {
    setAddedItems((prevItems) =>
      prevItems.filter((_, index) => index !== indexToDelete)
    );
  };

  return (
    <div>
      <h2 className='font-semibold py-1 border-b-2 border-gray-200'>History</h2>
      <div className='flex flex-col gap-1 mt-3'>
        {addedItems.length === 0 ? (

          <div className='flex items-center justify-center py-7 bg-blue-100 rounded-md'>
            <h1 className='text-lg text-gray-500'>No history</h1>
          </div>
        ) :
        (
          addedItems.map((item, index) => (
          <div
            key={index}
            className={`border-r-8 ${
              item.amnt[0] === '+' ? 'border-green-500' : 'border-red-600'
            } bg-gray-100 flex justify-between px-2 py-1 sm:py-2 sm:px-3 w-full rounded-[0.2rem] overflow-hidden`}
          >
            <div className='flex gap-4'>
              <img 
                onClick={() => handleDelete(index)}
                src={deleteIcon} alt="delete icon" 
                className='p-1 bg-blue-800 rounded-md cursor-pointer hover:bg-blue-600 transition duration-100' 
              />
              <p className='text-gray-700'>{item.name}</p>
            </div>
            <p>{parseFloat(item.amnt.slice(1)).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
          </div>
        )))}
      </div>
    </div>
  );
}


export default History;

