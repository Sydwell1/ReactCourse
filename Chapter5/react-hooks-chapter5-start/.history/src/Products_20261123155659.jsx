import Product from './Product'

const getProducts = () => {
return []
}

function Products() {
  const products = getProducts()

  const listProducts = products.map((product) =>
    <Product key={product.productName} data={product} />
  )

return (
 <div>
 {listProducts.length > 0 &&
 <ul>{listProducts}</ul>
 }
 {listProducts.length == 0 &&
 <ul>No Products to display</ul>
 }
 </div>
 );
}

export default Products
