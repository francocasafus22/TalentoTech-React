import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import { getAllProductsByCategory } from '../services/ProductsServices'

export default function HomePage() {

  const [smartphones, setSmartphones] = useState()
  const [accesorios, setAccesorios] = useState()
  const [laptops, setLaptops] = useState()
  const [isLoading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(()=>{
    
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const resSmartphones = await getAllProductsByCategory("smartphones", 10);
        const resAccesorios = await getAllProductsByCategory("mobile-accessories", 10);
        const resLaptops = await getAllProductsByCategory("laptops", 10);
        setSmartphones(resSmartphones.products);
        setAccesorios(resAccesorios.products);
        setLaptops(resLaptops.products);
        
      } catch (error) {
        setError(error.message)
      } finally{
        setLoading(false)
      }
    }
    fetchProducts()

  }, [])
  

  if(isLoading) return <p className='text-white text-center'>Cargando productos...</p>
  if(error) return <p>Error: {error}</p>

  return (
    <>

      <h1 className='text-blue-600 text-5xl mt-10'>Celulares</h1>

      <div className='rounded-xl grid grid-cols-1 md:grid-cols-3 gap-5 mt-10'>
        
        {smartphones ? smartphones.map(producto => <ProductCard key={producto.id} producto={producto}/>) : <p className='text-white text-center'>No hay productos</p>}
        
      </div>

      <h1 className='text-blue-600 text-5xl mt-10'>Accesorios de Celulares</h1>
      <div className=' rounded-xl grid grid-cols-1 md:grid-cols-3 gap-5 mt-10'>
        
        {accesorios ? accesorios.map(producto => <ProductCard key={producto.id} producto={producto}/>) : <p className='text-white text-center'>No hay productos</p>}
        
      </div>


      <h1 className='text-blue-600 text-5xl mt-10'>Notebooks</h1>
      <div className=' rounded-xl grid grid-cols-1 md:grid-cols-3 gap-5 mt-10'>
        
        {laptops ? laptops.map(producto => <ProductCard key={producto.id} producto={producto}/>) : <p className='text-white text-center'>No hay productos</p>}
        
      </div>

    </>
  )
}
