import React, { useEffect, useState } from 'react'
import useCart from '../contexts/CartContext/useCart'

import CartItem from '../components/CartItem'

export default function CartContainer() {

  const {cart, deleteItemById, getCartFromLocalStorage, getTotalAmount, itemQuantityDecreaseById, itemQuantityIncreaseById, emptyCart} = useCart()

  if (!cart) return <p className='text-white text-xl mt-5 h-[70vh] flex items-center justify-center'>Cargando...</p>
  if (cart.length === 0) return <p className='text-white text-xl mt-5 text-center'>Tu carrito está vacío</p>

  return (
    
<>
      <div className='flex flex-col gap-6'>
        {cart.map((p) => (
          <CartItem p={p} key={p.id}></CartItem>
        ))}
      </div>

      <p className='text-amber-50 text-xl'>Total: <span className='text-blue-600'>${getTotalAmount().toFixed(2)}</span></p>
      <button className='bg-blue-600 w-full rounded-xl  py-2 text-amber-50 text-xl cursor-pointer hover:brightness-80 transition-all duration-200' onClick={()=>{emptyCart();alert("Gracias por su compra, en breve nuestro equipo de ventas le enviara un mail confirmando el pedido");
}}>Comprar Ahora</button>
</>

   
  )
}
