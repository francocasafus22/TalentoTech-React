import {useNavigate} from "react-router-dom";

export default function ProductCard({producto}) {
    const navigate = useNavigate();

    const handleProduct = () => {
        navigate(`/products/${producto.id}`)
    }

    return (
        <div className="bg-zinc-900 border border-zinc-700 rounded-xl shadow-md p-4 hover:shadow-2xl hover:border hover:border-blue-600 transition-all duration-200 cursor-pointer ease-in" onClick={handleProduct}>
            <div className="w-full h-60 overflow-hidden rounded-lg mb-3">
                <img
                src={producto.images[0]}
                alt={producto.title}
                className="w-full h-full object-contain"
                />
            </div>

            <h3 className="text-lg font-semibold text-white">{producto.title}</h3>
            <p className="text-zinc-400 text-sm mt-1 line-clamp-2">{producto.description}</p>
            <p className="text-blue-400 font-bold mt-2">${producto.price}</p>
        </div>
    )
}
