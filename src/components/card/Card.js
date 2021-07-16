import { useState, useContext } from "react";
import Button from "../button/Button"
import Description from "../description/Descritpion";
import { ShopContext } from "../ShopContext";

const Card = ({img, title, width, price, item}) => {
    const [addedToCart, setAddedToCart] = useState(false);
    const [showDescription, setShowDescription] = useState(false)
    const {handleAddToCartUnique} = useContext(ShopContext);

    const handleAddedToCart = () => {
        setAddedToCart(true);
        setTimeout(() => {
            setAddedToCart(false);
        }, 1500);
    }

    const handleClickAddToCart = () => {
        // Add unique item to cart
        handleAddToCartUnique(item);
        // Info user about adding 
        handleAddedToCart();
    }


    return ( 
        <div className='card' style={{width: width}} 
        onMouseEnter={() => setShowDescription(true)}
        onMouseLeave={() => setShowDescription(false)}>
            <img src={img} alt={title} className='card__img' />
            <h4 className="card__title mb-xs">{title}</h4>
            <div className="card__price">${price}</div>
            <Button text='Add To Cart' classType='btn--second' item={item} callbackFunction={handleClickAddToCart} />
                <div className={`card__notification ${addedToCart && 'card__notification--active'}`}>
                Added to Cart
            </div>

            <Description key={item.id} title={title} showDescription={showDescription} item={item} classType={showDescription ? 'description__active' : ''} />
        </div>
     );
}
 
export default Card;