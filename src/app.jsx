import { useState } from 'react'
import Items from './components/Items';
import Header from './components/Header';
import Product from './components/Product';

function App() {
  const [products, setProducts] = useState([
    { id: 0, name: 'Shipcy',   price: 100, items: 1 },
    { id: 1, name: 'Pepsi',    price: 200, items: 1 },
    { id: 2, name: 'Molto',    price: 300, items: 1 },
    { id: 3, name: 'Kranshy',  price: 400, items: 1 },
    { id: 4, name: 'Cigaretes',price: 500, items: 1  }
  ])

  const [headProducts] = useState([
    { id: 0, name: 'Shipcy',   price: 100, items: 1 },
    { id: 1, name: 'Pepsi',    price: 200, items: 1 },
    { id: 2, name: 'Molto',    price: 300, items: 1 },
    { id: 3, name: 'Kranshy',  price: 400, items: 1 },
    { id: 4, name: 'Cigaretes',price: 500, items: 1 }
  ])

  
  const [theme, setTheme] = useState(false)
  
  const reset = () => {
    setProducts(products.map(product => ({...product, items: product.items = 1})))
  }

  const increment = (id) => {
    setProducts(products.map(product => product.id === id ? {...product, items: product.items + 1} : product))
  }

  const decrement = (id) => {
    setProducts(products.map(product => product.id === id ? {...product, items: product.items - 1} : product))
  }

  const deleteItem = (id) => {
    setProducts(products.filter(product => product.id !== id))
  }

  const addItem = (id) => {
    if (products.find(product => product.id === id)) {
      increment(id)
    }
    else {
      setProducts([...products, ...headProducts.filter(product => product.id === id)])
    }
  }


  const deleteAll = () => {
    setProducts([])
  }
 
  const switchTheme = () => {
    setTheme(!theme)
  }

  return (
    <div className={`${!theme ? "bg-[#cfcfcf]" : 'bg-[#05011c8d]'} h-full`}>
      <Header headProducts={headProducts} products={products}  theme={theme} addItem={addItem}  />
      <Items products={products} reset={reset} deleteAll={deleteAll} increment={increment} decrement={decrement} deleteItem={deleteItem} theme={theme} switchTheme={switchTheme} />
      <div>
        <h1 className={`${!theme ? "text-black" : 'text-white'} text-center text-lg font-bold p-3`}> 2025 Designed By: Mostafa Atta</h1>
      </div>
    </div>
  )
}

export default App