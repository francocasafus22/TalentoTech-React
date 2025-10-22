const apiURL = "https://dummyjson.com/products"

export const getAllProductsByCategory = async (category, limit) => {
    
    try {
        
        const response = await fetch(`${apiURL}/category/${category}?limit=${limit}`);
        if(!response.ok){
            throw new Error("Hubo un error al obtener los productos.");
        }

        const data = await response.json()

        return {
            products: data.products,        
        }

    } catch (error) {
        throw new Error(error.message)
    }

}