import CartProvider from "../contexts/CartContext/CartProvider";


export default function ContextsProvider({children}) {
  return (
    <CartProvider>
        {children}
    </CartProvider>
  )
}
