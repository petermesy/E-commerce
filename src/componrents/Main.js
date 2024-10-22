import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";

import { addToCart, removeFromCart, emtyCart } from "../redux/action";
import { productList } from "../redux/productAction";
import "./Main.css"


const Main = () => {
  const dispatch = useDispatch();
  let data = useSelector((state) => state.productData);
  console.warn("data in main component", data);

  const product = {
    name: "i Phonee",
    price: "999", 
    color: "red",
    catogory: "mobile",
  };
  useEffect(() => {
    dispatch(productList());
  }, []);
  return (
    <div>
        <div className="App">
      <button onClick={() => dispatch(emtyCart(product.name))}>Empty Cart</button>

    </div>
      <div className="product-container">
        {data.map((item) => (
            <div className="product-item" key={item.id}>
              <img src={item.image} alt="item" className="item-image"/>
              <div >
                {/* <div>{item.id}</div> */}
                <div>Name: {item.name}</div>
                <div> Price: {item.price}</div>
                <div>Color: {item.color}</div>
                <div> Category: {item.catogory}</div>
                <div>
                <button onClick={() => dispatch(addToCart(item))}>Add To Cart</button>
                <button onClick={() => dispatch(removeFromCart(product.id))}>Remove From Cart</button>
                </div>
              </div>
            </div>
          ))}
      </div>

    
    </div>
  );
};

export default Main;

// import { useDispatch, useSelector } from "react-redux";

// import { addToCart, removeFromCart, emptyCart } from "../redux/actions"; // Corrected typo in emptyCart
// import { fetchProducts } from "../redux/productActions"; // Corrected typo and assumed action name

// function Main() {
//   const dispatch = useDispatch();
//   const productData = useSelector((state) => state.productData); // More descriptive variable name

//   const product = {
//     name: "iPhone", // Corrected typo and capitalization for consistency
//     price: 999, // Removed unnecessary quotes for number
//     color: "red",
//     category: "mobile", // Corrected typo
//   };

//   useEffect(() => {
//     // Fetch product list on component mount
//     dispatch(fetchProducts());
//   }, [dispatch]); // Add dispatch as a dependency to prevent infinite loops

//   return (
//     <div>
//       <div className="App">
//         <button onClick={() => dispatch(addToCart(product))}>Add To Cart</button>
//         <button onClick={() => dispatch(removeFromCart(product.name))}>Remove From Cart</button>
//         <button onClick={() => dispatch(emptyCart())}>Empty Cart</button>
//         <button onClick={() => dispatch(fetchProducts())}>Product List (Refetch)</button>
//       </div>

//       <div className="product-container">
//         {productData.length > 0 ? ( // Check if data is loaded before mapping
//           productData.map((item) => (
//             <div className="product-item" key={item.id}>
//               <img src={item.image} alt="" />
//               <li key={item.id}>
//                 <h2>{item.id}</h2>
//                 <h2>{item.name}</h2>
//                 <h3>${item.price}</h3> {/* Added dollar sign for currency */}
//                 <p>{item.color}</p>
//                 <p>{item.category}</p>
//               </li>
//             </div>
//           ))
//         ) : (
//           <p>Loading products...</p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Main;
