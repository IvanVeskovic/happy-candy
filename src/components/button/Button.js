import { ShopContext } from "../ShopContext";

import { useContext } from "react";
import { useHistory } from "react-router";

const Button = ({text, classType, item, handleAddedToCart, path, limit, setLimit, bgColor, width}) => {

    const [cart, setCart, showCart, setShowCart, handleAddToCartUnique] = useContext(ShopContext);

    const history = useHistory();

    const handleClick = () => {

        if(limit){
            setLimit(prevValue => prevValue + 15);
        }
        else if(item) {
            handleAddedToCart();
            handleAddToCartUnique(item)
        } else {
            history.push(path);
        }
        // if(path){
        //     history.push(path);
        // }
    }

    return ( 
            <button type='button' className={`btn ${classType}`} onClick={handleClick} style={{backgroundColor: `${bgColor ? bgColor : ''}`, width: `${width}`}} >{text}</button>
     );
}
 
export default Button;