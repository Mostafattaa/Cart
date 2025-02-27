import { useState } from 'react';
import Product from './Product'
import { MdOutlineLightMode, MdDarkMode } from "react-icons/md";

const Items = ({products, reset, deleteAll, increment, decrement, deleteItem, theme, switchTheme }) => {
    
        // let total = 0
        // products.forEach(product => {
        //     total += product.price * product.items
        // })
  return (
    <div className={`flex flex-col justify-start items-center gap-10 p-5 pt-20 `}>
        <h1 className={`${!theme ? 'text-[#000000]' : 'text-[#ffffff]'} text-2xl font-bold text-center p-3 `}>
            Your Cart
        </h1>
        <div className='w-full flex flex-wrap gap-5 justify-evenly'>
            <button className="bg-yellow-500 p-2.5 shadow-md rounded-lg" onClick={reset}>Reset</button>
            <button className="bg-red-700 p-2.5  shadow-md rounded-lg" onClick={deleteAll}>Delete</button>
            <button className="btn btn-light" onClick={switchTheme}>
                { theme ?  <MdOutlineLightMode /> :<MdDarkMode /> }
            </button>
            
        </div>
         <h3 className={`text-2xl bg-orange-400 shadow-lg p-2.5 rounded-lg ${!theme ? 'text-[#000000]' : 'text-[#ffffff]'}`}>Total: {products.reduce((x, y) => x + y.items * y.price, 0)} EGP</h3>
        { products.map((product) => ( product.items == 0 ? null : <Product key={product.id} {...product} increment={increment} decrement={decrement} deleteItem={deleteItem} theme={theme}  />)) } 
        <h3 className={`${!theme ? 'text-[#000000]' : 'text-[#ffffff]'} text-2xl`}>Your card is empty!</h3>  <h3 className={`text-2xl bg-orange-400 shadow-lg p-2.5 rounded-lg ${!theme ? 'text-[#000000]' : 'text-[#ffffff]'}`}>Total: {products.reduce((x, y) => x + y.items * y.price, 0)}EGP</h3>
    </div>
  )
}

export default Items