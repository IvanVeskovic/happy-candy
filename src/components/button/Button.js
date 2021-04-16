import { ShopContext } from "../ShopContext";

import { useContext } from "react";

const Button = ({text, className, item, handleAddedToCart}) => {

    const [cart, setCart, showCart, setShowCart, handleAddToCartUnique] = useContext(ShopContext);

    const handleClick = () => {
        handleAddedToCart();
        if(item) {
            handleAddToCartUnique(item)
        };
    }

    return ( 
            <button type='button' className={`btn ${className}`} onClick={handleClick}>{text}</button>
     );
}
 
export default Button;