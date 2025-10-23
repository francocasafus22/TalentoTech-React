import ProductList from "../containers/ProductListContainer"

export default function HomePage() {

  return (
    <>
      <div className="flex w-full my-10 items-center justify-center text-center">
        <div>
          <h1 className="text-8xl text-blue-600">+TECH</h1>
          <p className="text-4xl text-amber-50 max-w-xl">Los mejores smartphones y accesorios para acompañarte todos los días.</p>
        </div>
      </div>
      <ProductList category={"smartphones"} categoryName={"Celulares"}/>
      <ProductList category={"mobile-accessories"} categoryName={"Accesorios de Celular"}/>
      <ProductList category={"laptops"} categoryName={"Notebooks"}/>
    </>
  )
}
