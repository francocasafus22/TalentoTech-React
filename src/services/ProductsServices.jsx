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

export const getProductByID = async (id) => {
    try {
        const response= await fetch(`${apiURL}/${id}`);
        if(!response.ok){
            throw new Error("Hubo un error al obtener el producto.");
        }
        const data = await response.json()

        return data
    } catch (error) {
        throw new Error(error.message)
    }
}