import { useSelector,useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import pic from "../asset/cart.avif";
import "./Header.css";
import {productSearch} from "../redux/productAction"
const Header = () => {
  const result = useSelector((state) => state.cartData);
  const dispatch=useDispatch();

  console.warn("data in header", result);
  return (
    <div className="header">
        <Link to="/">  
              <h1 className="ecom">E-Comm</h1>
        </Link>
        <div className="search-product">
          <input type="text" placeholder="Search Product" onChange={(event)=>dispatch(productSearch(event.target.value))}/>
        </div>
      <Link to="/cart"> 
        <span className="cart-div">
          {result.length}
          <img src={pic} className="cartpic" />
        </span>
      </Link>
    </div>
  );
};
export default Header;
