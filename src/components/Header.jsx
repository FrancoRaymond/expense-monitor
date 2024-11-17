import React from 'react'
import { useAppContext } from '../App';

const Header = () => {
  const {balance, income, expense} = useAppContext();

  return (
    <div className='py-5 px-3 w-full flex flex-col bg-blue-700 sm:rounded-b-md rounded-t-none'>
        <h1 className='ml-auto font-semibold mx-auto text-lg sm:text-2xl text-white'>Expense Monitor</h1>
        <div className='mt-5'>
            <div className=''>
                <p className='text-sm text-white'>YOUR BALANCE</p>
                <h2 className='font-medium text-[1.5rem] sm:text-[2rem] text-white'>{`R ${balance.toLocaleString('en-US')}`}</h2>
            </div>
            <div className='flex w-full justify-around gap-5 mt-5'>
                <div className='flex flex-col px-4 py-3 w-1/2 items-center rounded-md bg-white bg-opacity-80 backdrop-blur-md'>
                <p className='text-sm text-green-600'>INCOME</p>
                <p className='text-green-600 font-semibold sm:text-xl'>{`R ${income.toLocaleString('en-US')}`}</p>
                </div>
                <div className='flex flex-col px-4 py-3 w-1/2 items-center rounded-md bg-white bg-opacity-80'>
                <p className='text-sm text-red-600'>EXPENSE</p>
                <p className='text-red-600 font-semibold sm:text-xl'>{`R ${expense.toLocaleString('en-US')}`}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header
