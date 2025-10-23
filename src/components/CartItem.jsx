import React from 'react'
import useCart from '../contexts/CartContext/useCart'
import { Minus, Plus} from "lucide-react"

export default function CartItem({p}) {

      const {cart, deleteItemById, getCartFromLocalStorage, getTotalAmount, itemQuantityDecreaseById, itemQuantityIncreaseById, emptyCart} = useCart()

  return (
    <div key={p.id} className='flex flex-col md:flex-row items-center gap-5 bg-zinc-800 rounded-xl shadow-md border border-zinc-700 px-5 py-4'>
            
            {/* Imagen */}
            <div className="w-32 h-32 overflow-hidden rounded-lg flex items-center justify-center bg-zinc-700">
              <img
                src={p.images?.[0]}
                alt={p.title}
                className="object-contain w-full h-full"
              />
            </div>

            {/* Info principal */}
            <div className='flex flex-col justify-center text-amber-50 flex-1 px-5'>
              <p className='text-xl font-semibold'>{p.title}</p>
              <p className='text-sm text-zinc-400'>SKU: {p.sku}</p>
              <p className='text-sm text-zinc-400'>Marca: {p.brand}</p>
            </div>

            <div className='flex flex-col sm:flex-row gap-5'>
              {/* Cantidad */}
            <div className='flex flex-col justify-center items-center text-amber-50'>
              <p className='text-sm text-zinc-400 mb-2'>Cantidad</p>
              <div className='flex gap-2 bg-zinc-600 p-2 rounded-xl'>
                <Minus className='hover:text-blue-600 transition-all duration-200' onClick={()=>itemQuantityDecreaseById(p.id)}/>
                <p className='text-lg font-medium'>{p.quantity}</p>
                <Plus className='hover:text-blue-600 transition-all duration-200' onClick={()=>itemQuantityIncreaseById(p.id)}/>
              </div>
            </div>

            <div className='flex gap-5'>
              {/* Precio unitario */}
            <div className='flex flex-col justify-center items-center text-amber-50'>
              <p className='text-sm text-zinc-400'>Precio</p>
              <p className='text-lg font-medium'>${p.price}</p>
            </div>

            {/* Subtotal */}
            <div className='flex flex-col justify-center items-center text-amber-50'>
              <p className='text-sm text-zinc-400'>Subtotal</p>
              <p className='text-lg font-semibold'>${p.subtotal.toFixed(2)}</p>
            </div>
            </div>
            </div>
            <button className='px-5 py-2 bg-red-500 rounded-xl text-amber-50' onClick={()=>deleteItemById(p.id)}>X</button>
          </div>
  )
}
