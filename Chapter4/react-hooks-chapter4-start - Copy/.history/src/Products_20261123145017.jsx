import React, { Component } from 'react';
import Product from './Product';


const getProducts = () => {
 return [

  {
 imageUrl: "https://avatars.githubusercontent.com/u/97165289",
 productName: "Product 1",
 releasedDate: "May 31, 2016",
 description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Aenean porttitor, tellus laoreet venenatis facilisis, enim ex faucibus nulla, idrutrum ligula purus sit amet mauris. ",
 rating: 4,
 numOfReviews: 2
 },
 {
 imageUrl: "https://avatars.githubusercontent.com/u/97165289",
 productName: "Product 2",
 releasedDate: "October 31, 2016",
 description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Aenean porttitor, tellus laoreet venenatis facilisis, enim ex faucibus nulla, id rutrum ligula purus sit amet mauris. ",
 rating: 2,
 numOfReviews: 12
 },
 {
 imageUrl: "https://avatars.githubusercontent.com/u/97165289",
 productName: "Product 3",
 releasedDate: "July 30, 2016",
 description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porttitor, tellus laoreet venenatis facilisis, enim ex faucibus nulla, id utrum ligula purus sit amet mauris. ",
 rating: 5,
 numOfReviews: 2
 }];
 }

const Products = () => {
  const products = getProducts()

 const listProducts = products.map((product) =>
 <Product key={product.productName} data={product} />
 );

 return (
 <div>
 <ul>{listProducts}</ul>
 </div>
 );
}

export default Products




