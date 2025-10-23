import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Logo from './Logo'
import { ShoppingCart, Menu, X } from 'lucide-react'
import useCart from '../contexts/CartContext/useCart'

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const {countItemsCart} = useCart()

    const navigate = useNavigate()

    return (
        <header className='bg-transparent border-b border-zinc-700 text-blue-600'>
            <div className='flex justify-between px-5 md:px-10 py-5 items-center'>
                
                {/* Logo */}
                <div>
                    <Logo/>
                </div>

                {/* Escritorio */}
                <nav className="hidden md:flex text-xl gap-3">
                    <Link to={"/"} className='py-2 px-5 hover:bg-amber-50 rounded-xl transition-all duration-300'>Home</Link>
                    <Link to={"/"} className='py-2 px-5 hover:bg-amber-50 rounded-xl transition-all duration-300'>Categorias</Link>
                    <Link to={"/"} className='py-2 px-5 hover:bg-amber-50 rounded-xl transition-all duration-300'>Nosotros</Link>   
                </nav>

                {/* Celular Toggle */}
                <div className='flex items-center gap-5 md:hidden'>
                     <Link className='relative cursor-pointer' to={"/cart"}>
                        <ShoppingCart/>
                        <span className='absolute -top-2 -right-2 bg-blue-600 text-amber-50 text-center text-xs  rounded-full w-5 h-5 flex items-center justify-center'>
                            {countItemsCart()}
                        </span>
                    </Link>
                    <button 
                        onClick={() => setIsOpen(!isOpen)}
                        className='p-2 rounded-md hover:bg-zinc-200 transition'>
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>

                {/* Login */}
                <div className='hidden md:flex md:items-center md:gap-5'>
                    <Link className='relative cursor-pointer' to={"/cart"}>
                        <ShoppingCart/>
                        <span className='absolute -top-2 -right-2 bg-blue-600 text-amber-50 text-center text-xs  rounded-full w-5 h-5 flex items-center justify-center'>
                            {countItemsCart()}
                        </span>
                    </Link>
                    <button className='hover:bg-amber-50 hover:text-blue-600 py-2 px-5 rounded-xl font-bold bg-blue-600 text-amber-50 transition-all duration-300 ease-in-out cursor-pointer'>Login</button>
                </div>
            </div>

            {/* Menu Celular */}
            {isOpen && (
                <nav className='md:hidden flex flex-col px-5 py-5 gap-2 text-lg shadow-xl bg-blue-600 text-amber-50'>
                    <Link to={"/"} className='py-2 px-5 hover:bg-amber-50 hover:text-blue-600 rounded-xl transition-all duration-300'>Home</Link>
                    <Link to={"/"} className='py-2 px-5 hover:bg-amber-50 hover:text-blue-600 rounded-xl transition-all duration-300'>Categorias</Link>
                    <Link to={"/"} className='py-2 px-5 hover:bg-amber-50 hover:text-blue-600 rounded-xl transition-all duration-300'>Nosotros</Link>
                    <button className='hover:brightness-90 py-2 px-5 rounded-xl font-bold bg-amber-50 text-blue-600 transition-all duration-300 ease-in-out cursor-pointer'>Login</button>
                </nav>
            )}
        </header>
    )
}
