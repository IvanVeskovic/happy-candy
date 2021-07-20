import { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { db } from '../../firebase';
import Button from '../button/Button';
import FormInput from '../formInput/FormInput';
import Message from '../message/Message';

import {ShopContext} from '../ShopContext';

const Cart = () => {
    const {cart, showCart, setShowCart, handleRemoveFromCart, handleChangeQuantity, user, setShowLogInSignIn, setLogIn, setCart} = useContext(ShopContext);

    const [showMessage, setShowMessage] = useState({text: '', type: ''});
    const [showDelivery, setShowDelivery] = useState(false);

    const [name, setName] = useState('');
    const [street, setStreet] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [orderMessage, setOrderMessage] = useState('');

    const history = useHistory();

    const handleOrder = () => {
        // Get data and send it to firestore.
            db.collection('orders').add({
                userEmail: user.email,
                name: name,
                street: street,
                phoneNumber: phoneNumber,
                orderMessage: orderMessage,
                orderCart: cart,
                totalPrice: handleTotalPrice(),
                isShipped: false,
                orderDate: new Date()
            })
    }

    const handleTotalPrice = () => {
        if(cart.length > 0) {
            return cart.reduce((total, element) => total += element.price * element.quantity, 0);
        }
    }

    // Go to shop page
    const handleShopNow = () => {
        history.push('/shop');
        setShowCart(false);
    }

    const handleSubmit = e => {
        e.preventDefault();

        
        if(Object.keys(user).length < 1){
            setShowMessage({text: 'You need to be logged in!', type: 'danger'})
            setTimeout(() => {
                setShowMessage({text: '', type: ''});
                setShowLogInSignIn(true);
                setLogIn(true);
            }, 3000);
        } else if(name === '' || street === '' || phoneNumber === '') {
            setShowMessage({text: 'Please enter name, street and phone number', type: 'danger'})
            setTimeout(() => {
                setShowMessage({text: '', type: ''});
            }, 3000);
        } else {
            setShowMessage({text: 'Order completed, We will contact you soon. You can make another fantastic order', type: 'good'})
            setTimeout(() => {
                // Trigger sending data to firestore
                handleOrder();
                // Clearing all and restarting order
                setShowMessage({text: '', type: ''});
                setCart([]) 
                setShowDelivery(false);
            }, 5000);
        }
    }

    return ( 
        <div className={`cart ${showCart && 'cart--show'}`}>
            <div className="cart__close" onClick={() => {setShowDelivery(false); setShowCart(!showCart)}}>
                <i className="fas fa-window-close"></i>
            </div>
           <div className="cart__content">
                <h3 className="cart__title">
                    { cart.length > 0 ? 'It’s one delicious order' : 'What are you waiting for?'}
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
                    {
                        showMessage.text
                        &&
                        <Message text={showMessage.text} type={showMessage.type} />
                    }
                    <div className="delivery">
                        <div className="delivery__header">
                            Enter information for delivery
                            
                            {
                                showDelivery
                                ?
                                <i className="fas fa-minus" onClick={() => setShowDelivery(!showDelivery)}></i>
                                :
                                <i className="fas fa-plus" onClick={() => setShowDelivery(!showDelivery)}></i>
                            }

                        </div>
                        <div className={`delivery__body ${showDelivery && 'delivery__body--active'}`}>
                            <FormInput text='First and Last name' type='text' callbackFunction={setName}/>
                            <FormInput text='Phone Number' type='tel' callbackFunction={setPhoneNumber}/>
                            <FormInput text='Street and Number' type='text' callbackFunction={setStreet}/>
                            <FormInput text='Message' type='text' callbackFunction={setOrderMessage}/> 
                            <Message text='We are currently delivering only on the territory of Belgrade' type='info' className='mb-lg' />
                        </div>
                    </div>

                    <Button classType='btn--second' text='Submit Order' callbackFunction={(e) => handleSubmit(e)} />
                </form>
                }
                {   
                    cart.length === 0
                    &&
                    <Button text='Shop Now' classType='btn--second' callbackFunction={handleShopNow} />
                }
           </div>
        </div>
     );
}
 
export default Cart;