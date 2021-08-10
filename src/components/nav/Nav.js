import { Link } from "react-router-dom";
import { useContext, useState } from 'react';

import { ShopContext } from '../ShopContext';
import Button from "../button/Button";

const Nav = () => {

    const {cart, setShowCart, setShowLogInSignIn, user, setUser, setShowMyOrders} = useContext(ShopContext);
    const [showMobNav, setShowMobNav] = useState(false)

    return ( 
        <nav className='nav'>
            <div className="row">
                <h3 className="nav__logo">
                    HappyCandy
                </h3>

                <div className={`menu ${showMobNav ? 'open' : ''}`} onClick={() => setShowMobNav(!showMobNav)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <div className={`nav__content ${showMobNav ? 'nav__content--active' : ''}`}>
                    <ul className="nav__list">
                        <ul className="nav__item" onClick={() => setShowMobNav(false)}><Link to='/'>Home</Link></ul>
                        <ul className="nav__item" onClick={() => setShowMobNav(false)}><Link to='/shop'>shop</Link></ul>
                        <ul className="nav__item" onClick={() => setShowMobNav(false)}><Link to='/contact' >contact</Link></ul>
                    </ul>

                    {/* Render elements based on is user logged or not */}
                    {   Object.keys(user).length < 1
                        ?
                        <Button text='Log In' classType='btn--third' callbackFunction={() => setShowLogInSignIn(true)} />
                        :
                        <div className='nav__user'>
                            <i className="fas fa-user" onClick={() => setShowMyOrders(true)} ></i>
                            <div className="nav__user--email">
                                {user && user.email}
                                <br />
                                Click to show orders
                            </div>
                            <Button text='Log Out' classType='btn--third' bgColor='$c-danger' callbackFunction={() => setUser({})} />
                        </div>
                    }


                    <div className="nav__cart" onClick={() => setShowCart(prevValue => !prevValue)}>
                        <i className="fas fa-shopping-cart"></i>
                        <span className="nav__cart__number">{cart.length}</span>
                    </div>
                </div>
                
            </div>
        </nav>
     );
}
 
export default Nav;