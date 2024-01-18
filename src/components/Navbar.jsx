import { NavLink } from "react-router-dom";
import {FaShoppingCart} from "react-icons/fa"
import { useSelector } from "react-redux/es/hooks/useSelector";

const Navbar = () => {
    const {cart}=useSelector((state)=>state);

  return (
  <div>
    <NavLink to="/">
      <img src="../logo.png" width={'150px'}></img>
    </NavLink>
    <div>
      <NavLink to="/">
        <p>Home</p>
      </NavLink>
      <div>
      <NavLink to="/cart">
         <FaShoppingCart/>
      </NavLink>
      <div>
        { cart.length}
      </div>
      </div>
    </div>

  </div>);
};

export default Navbar;
