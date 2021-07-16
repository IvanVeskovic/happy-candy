import { useContext } from 'react';
import Button from '../button/Button';

import {ShopContext} from '../ShopContext';

const Cart = () => {
    const {cart, showCart, setShowCart, handleRemoveFromCart, handleChangeQuantity} = useContext(ShopContext);

    const handleTotalPrice = () => {
        if(cart.length > 0) {
            return cart.reduce((total, element) => total += element.price * element.quantity, 0);
        }
    }

    const handleSubmit = e => {
        e.preventDefault();
    }

    return ( 
        <div className={`cart ${showCart && 'cart--show'}`}>
            <div className="cart__close" onClick={() => setShowCart(!showCart)}>
                <i className="fas fa-window-close"></i>
            </div>
           <div className="cart__content">
                <h3 className="cart__title">
                    { cart.length > 0 ? 'it’s one delicious order' : 'What are you waiting?'}
                </h3>
                {   
                    cart.length > 0
                    &&
                    <form className="cart__items" onSubmit={(e) => handleSubmit(e)}>
                    {   
                        cart
                        &&
                        cart.map(item => (
                            <div className="cart__item" key={item.id}>
                                <img src={item.img} alt={item.name} className="cart__item__img"/>
                                <div className="cart__item__title">{item.name}</div>
                                <input type="number" name="number" className='cart__item__input' min='1' placeholder='1' onChange={(e) => handleChangeQuantity(item.id, e.target.value)} value={item.quantity} />
                                <div className="cart__item__total">${item.price * item.quantity}</div>
                                <div className="cart__item__remove" onClick={(e) => handleRemoveFromCart(item.id)}>
                                    <i className="fas fa-window-close"></i>
                                </div>
                            </div>
                        ))
                    }
                    <div className="cart__total">
                        Total: <span className="cart__total__price">${handleTotalPrice()}</span>
                    </div>
                    <button type='submit' className='btn btn--second' onSubmit={(e) => handleSubmit(e)}>Submit</button>
                </form>
                }
                {   
                    cart.length === 0
                    &&
                    <Button text='Shop Now' classType='btn--second' path='/shop' />
                }
           </div>
        </div>
     );
}
 
export default Cart;