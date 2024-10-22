import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import "./Cart.css";
const Cart = () => {
  const cartData = useSelector((state) => state.cartData);
  const amount=cartData.length&&cartData.map((item)=>item.price).reduce((prev,next)=>prev+next);
console.warn("Amount",amount);

  return (
    
    <div>
              <Link to="/">Go to product page</Link>
              <div className="container">

      <div className="cart-page-container">
        <table className="">
          <tr>
            <td>Name</td>
            <td>Brand</td>
            <td>Category</td>
            <td>Color</td>
            <td>Price</td>
          </tr>
          {cartData.map((item) => (
            <tr key={item.key}>
              <td>{item.name}</td>
              <td>{item.brand}</td>
              <td>{item.catogory}</td>
              <td>{item.color}</td>
              <td>{item.price}</td>
            </tr>
          ))}
        </table>
       
      </div>
<div className="price-detail">
<div className="adjust-price"><span>Amount</span><span>{amount}</span></div>
<div className="adjust-price"><span>Discount</span><span>{amount/10}</span></div>
<div className="adjust-price"><span>Tax</span><span>000</span></div>
<div className="adjust-price"><span>Total</span><span>{amount-(amount/10)}</span></div>
</div>
      <br/>
    </div>
    </div>
  );
};
export default Cart;
