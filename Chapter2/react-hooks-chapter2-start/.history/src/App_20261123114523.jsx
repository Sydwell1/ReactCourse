import React from 'react';
import Products from './Products';function formatName(user){
 return user.firstName + ' ' + user.lastName;
}

 const listProducts = Products.map((product) =>
 <li key={product.toString()}>{product}</li>
 );

function App() {
const user = {
 firstName:'Greg',
 lastName:'Tan',
 imageUrl:'https://picsum.photos/200/300'
 };
 return (
 <div>
 <h1>
 Hello, {formatName(user)}
 <br />
 <img src={user.imageUrl}></img>
 </h1>

 <ul>{listProducts}</ul>
 <ul>{listProducts}</ul>
 </div>
 
 );
}
export default App;