import CartContainer from "../containers/CartContainer";

export default function CartPage() {

  
  return (
    <div className='flex flex-col gap-5'>
      <h1 className='text-amber-50 text-5xl mt-5 font-semibold mb-8'>Mi Carrito</h1>
      <CartContainer/>
      </div>
  )
}
