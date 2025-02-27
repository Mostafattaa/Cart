const Header = ({headProducts, products ,addItem , theme}) => {
  // let cart = 0
  // products.forEach(product => {
  //   if (product.items > 0) {
  //     cart += 1
  //   }
  // })
  return (
    <div className={`${!theme ? 'bg-[#ffffff]' : 'bg-[#000000]'} ${!theme ? 'text-[#000000]' : 'text-[#ffffff]'} navbar fixed flex flex-wrap shadow-sm justify-around gap-3`}>
      <div className="">
        <h1 className="font-bold text-xl">Cart</h1>
      </div>
      <div className='flex flex-wrap gap-2 justify-center'>
        { headProducts.map(({id,name}) => (
          <button key={id} onClick={() => addItem(id)} className="btn btn-ghost">{name}</button>
        )) }
      </div>
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
          <div className="indicator">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /> </svg>
            <span className="badge badge-sm indicator-item">
              {products.length}
            </span>
          </div>
        </div>
        <div
          tabIndex={0}
          className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow">
        </div>
      </div>
    </div>
  )
}

export default Header