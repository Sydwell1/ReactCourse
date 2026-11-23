import React from 'react';
import { IoIosStar, IoIosStarOutline } from 'react-icons/io'
function Rating(props) {
 return (
return (
 <div>
 <h1>Rating: {rating}</h1>
 {rating >= 1 ? (
 <IoIosStar />
 ) : (
 <IoIosStarOutline />
 )}
 {rating >= 2 ? (
 <IoIosStar />
 ) : (
 <IoIosStarOutline />
 )}
 {rating >= 3 ? (
 <IoIosStar />
 ) : (
 <IoIosStarOutline />
 )}
 {rating >= 4 ? (
 <IoIosStar />
 ) : (
 <IoIosStarOutline />
 )}
{rating >= 5 ? (
    <IoIosStar />
 ) : (
 <IoIosStarOutline />
 )}
 </div>)

}
export default Rating;