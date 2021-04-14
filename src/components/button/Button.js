import { ShopContext } from "../ShopContext";

import { useContext } from "react";

const Button = ({text, className, item}) => {

    const [cart, setCart, showCart, setShowCart, handleAddToCartUnique] = useContext(ShopContext);

    return ( 
            <button type='button' className={`btn ${className}`} onClick={() => handleAddToCartUnique(item)}>{text}</button>
     );
}
 
export default Button;