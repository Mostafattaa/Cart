const Product = ({id,name,price,items, increment, decrement, deleteItem, theme}) => {
    return (
        <div key={id} className={`
                ${!theme ? 'bg-[#aaacad]'  : 'bg-gray-700'} 
                ${!theme ? 'text-[#000000]' : 'text-[#ffffff]'} 
                text-xl w-full flex flex-wrap justify-between gap-5 text-center p-5 items-center rounded-3xl`}>
            <h2 className='col-span-2 lg:col-span-1'>{name}</h2>
            <p>Price: {price}</p>
            <p>Items: {items}</p>
            <div className='col-span-2 lg:col-span-1 flex flex-row gap-4 justify-around '>
                <button onClick={() => increment(id)} className="btn btn-primary">+</button>
                <button onClick={() => decrement(id)}  disabled ={items===1} className="btn btn-warning">-</button>
                <button onClick={() => deleteItem(id)} className="bg-red-600  shadow-md p-2 rounded-lg">Delete</button>
            </div>
            <p className='col-span-2 lg:col-span-1'>Total: {price * items} EGP</p>
        </div>
    )
}

export default Product