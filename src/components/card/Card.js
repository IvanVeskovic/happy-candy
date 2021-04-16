import { useState } from "react";
import Button from "../button/Button"

const Card = ({img, title, width, price, item}) => {
    const [ addedToCart, setAddedToCart] = useState(false);

    const handleAddedToCart = () => {
        setAddedToCart(true);
        setTimeout(() => {
            setAddedToCart(false);
        }, 1500);
    }

    return ( 
        <div className='card' style={{width: width}}>
            <img src={img} alt={title} className='card__img' />
            <h4 className="card__title mb-xs">{title}</h4>
            <div className="card__price">${price}</div>
            <Button text='Add To Cart' className='btn--second' item={item} handleAddedToCart={handleAddedToCart} />
                <div className={`card__notification ${addedToCart && 'card__notification--active'}`}>
                Added to Cart
            </div>
        </div>
     );
}
 
export default Card;