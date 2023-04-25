import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Products = () => {

  const coffee = useSelector((state) => state.coffee)
  const isLoggedIn = useSelector((state) => state.isLoggedIn)
  const sugar = useSelector((state) => state.sugar)

  const dispatchFunc = useDispatch();

  const increment = () => {
    dispatchFunc({ type: 'incrementCoffee' })
  }
  const decrement = () => {
    dispatchFunc({ type: 'decrementCoffee' })
  }

  const increase = () => {
    dispatchFunc({ type: 'increase', number: 10 })
  }
  const increments = () => {
    dispatchFunc({ type: 'incrementsugar' })
  }
  const decrements = () => {
    dispatchFunc({ type: 'decrementsugar' })
  }

  const increases = () => {
    dispatchFunc({ type: 'increases', number: 10 })
  }

  return (
    <>
      <div className='product'>
        <span>{`Coffee: ${coffee}`}</span>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        { isLoggedIn && <button onClick={increase}>+10</button>}
      </div>
      <div className='product'>
        <span>{`Sugar: ${sugar} `}</span>
        <button onClick={increments}>+</button>
        <button onClick={decrements}>-</button>
        { isLoggedIn && <button onClick={increases}>+10</button>}
      </div>
    </>
  )
}

export default Products