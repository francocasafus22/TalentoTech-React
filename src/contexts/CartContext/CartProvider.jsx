import { useEffect, useState } from "react";
import {CartContext} from "./CartContext"

export default function CartProvider({children}) {

    const getCartFromLocalStorage = () => {
        const data = localStorage.getItem("cart");
        return data ? JSON.parse(data) : [];
    }

    const saveCartToLocalStorage = (cart) => {
        localStorage.setItem("cart", JSON.stringify(cart));
    } 


    const [cart, setCart] = useState(getCartFromLocalStorage)
    useEffect(()=>{
        saveCartToLocalStorage(cart)
    }, [cart])

    const addToCart = (product) => {
        if(!cart.some(p => p.id === product.id)){
            const newProduct = {...product, quantity: 1, subtotal: product.price};
            setCart(prevCart=>[...prevCart, newProduct]);
        } else{
            const updatedCart = cart.map(prod=>
                prod.id === product.id ? {
                    ...prod,
                    quantity: prod.quantity + 1,
                    subtotal: prod.subtotal + product.price
                } : prod
            );
            setCart(updatedCart)
        }
    };

    const deleteItemById = (id) => {
        setCart(prevCart=>prevCart.filter(item=>item.id!==id))
    }

    const emptyCart = () => {
        setCart([])
    }

    const countItemsCart = () => {
        return cart.length;
    }

    const itemQuantityIncreaseById = (id) => {
        const updatedCart = cart.map(prod=>
            prod.id === id ? {
                ...prod, quantity: prod.quantity + 1,
                subtotal: (prod.quantity+1) * prod.price
            } : prod
        )

        setCart(updatedCart)
    }

    const itemQuantityDecreaseById = (id) => {
        const existingItem = cart.find(item => item.id === id);

        if (!existingItem || existingItem.quantity <= 1)
            return;

        const updatedCart = cart.map(prod =>
            prod.id === id && prod.quantity > 1
                ? {
                    ...prod,
                    quantity: prod.quantity - 1,
                    subtotal: (prod.quantity - 1) * prod.price
                }
                : prod
        );

        setCart(updatedCart);
    }

    const getTotalAmount = () => {
        return cart.reduce((subtotal, item) => subtotal += item.subtotal, 0);
    };

    const values = {
        cart, 
        addToCart,
        deleteItemById,
        countItemsCart, 
        getTotalAmount,
        emptyCart,
        itemQuantityDecreaseById,
        itemQuantityIncreaseById
    }

    return <CartContext.Provider value={values}>{children}</CartContext.Provider>
}
