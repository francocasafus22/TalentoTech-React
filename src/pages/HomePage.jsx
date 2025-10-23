import ProductList from "../containers/ProductListContainer"

export default function HomePage() {

  return (
    <>

      <ProductList category={"smartphones"} categoryName={"Celulares"}/>
      <ProductList category={"mobile-accessories"} categoryName={"Accesorios de Celular"}/>
      <ProductList category={"laptops"} categoryName={"Notebooks"}/>
    </>
  )
}
