import React, { use, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductByID } from '../services/ProductsServices';
import {ShoppingCart} from "lucide-react"

export default function ProductDetailsPage() {

  const productID = useParams();
  const [isLoading, setIsLoading] = useState();
  const [error, setError] = useState();
  const [product, setProduct] = useState();

  useEffect(()=>{
    async function fetchProductByID() {
     try {
        setIsLoading(true)
        const product = await getProductByID(productID.id);
        setProduct(product)
     } catch (error) {
        setError(error.message)
     } finally{
      setIsLoading(false)
     }
    } 
    fetchProductByID()
  }, [])
  

  if(isLoading) return <p className='text-white text-center'>Cargando productos...</p>
  if(error) return <p>Error: {error}</p>

  if (!product) return <p className="text-white text-center">No existe ese producto</p>;


  return (
    
          <div className='flex flex-col lg:flex-row w-full  items-center lg:h-[80vh]'>
              <div className='flex justify-center items-center lg:w-1/2 my-10'>
                <img src={product.images[0]} alt={product.title} className=' max-h-[400px] w-auto object-contain'/>
              </div>
              <div className='lg:w-1/2 flex flex-col gap-5'>
                <h1 className='text-6xl text-amber-50 text-center'>{product.title}</h1>
                <p className='text-amber-50'>{product.description}</p>
                <div className='flex flex-col gap-2'>
                  <p className='text-amber-50'>Categoria: <span className='text-blue-600'>{product.category}</span></p>
                <p className='text-amber-50'>Marca: <span className='text-blue-600'>{product.brand}</span></p>
                <p className='text-amber-50'>Rating: <span className='text-blue-600'>{product.rating}</span></p>
                <p className='text-amber-50'>Stock: <span className='text-blue-600'>{product.stock}</span></p>
                <p className='text-amber-50'>SKU: <span className='text-blue-600'>{product.sku}</span></p>                
                <div className='w-full flex justify-start gap-5'>                
                  <span className='text-amber-50'>Tags:</span>
                  {product.tags.map(tag=><p className='text-amber-50 bg-blue-600 rounded-xl px-5 py-1'>{tag}</p>)}
                </div>
                </div>

                
                <p className='text-center text-blue-600 text-6xl my-5'>${product.price}</p>
                <button className='w-full bg-blue-600 rounded-xl py-2 text-amber-50 text-2xl flex justify-center gap-2 items-center hover:brightness-80 cursor-pointer transition-all duration-200'><ShoppingCart/>Agregar al Carrito</button>
              </div>
          </div>

  ) 
  
}
