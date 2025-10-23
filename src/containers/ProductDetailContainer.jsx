import React, { use, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { getProductByID } from '../services/ProductsServices';
import {ShoppingCart} from "lucide-react"
import ProductDetail from '../components/ProductDetail';

import useCart from "../contexts/CartContext/useCart"

export default function ProductDetailContainer() {

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
  }, [productID])



  if(isLoading) return <p className='text-white text-center'>Cargando productos...</p>
  if(error) return <p>Error: {error}</p>

  return (
    
          <>
            {product ? (<ProductDetail product={product}/>) : ( <p className="text-white text-center">Cargando...</p>) }
          </>

  ) 
  
}
