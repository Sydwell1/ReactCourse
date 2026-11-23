
import React from 'react';
function Products() {
 const products = ["Pro React","Pro React","Pro React"];
 const listProducts = products.map((product) =>
 <li >{product}</li>
 );

 return (
 <div>
 <ul>{listProducts}</ul>
 </div>
 );
}
export default Products;