import { Link } from "react-router-dom";
import { useContext, useState } from 'react';

import { ShopContext } from '../ShopContext';
import Button from "../button/Button";


const Nav = () => {

    const {cart, setShowCart, setShowLogInSignIn, user, setUser} = useContext(ShopContext);

    return ( 
        <nav className='nav'>
            <div className="row">
                <h3 className="nav__logo">
                    HappyCandy
                </h3>

                <ul className="nav__list">
                    <ul className="nav__item"><Link to='/'>Home</Link></ul>
                    <ul className="nav__item"><Link to='/shop'>shop</Link></ul>
                    <ul className="nav__item"><Link to='/contact' >contact</Link></ul>
                </ul>

                {/* Render elements based on is user logged or not */}
                {   Object.keys(user).length < 1
                    ?
                    <Button text='Log In' classType='btn--third' callbackFunction={() => setShowLogInSignIn(true)} />
                    :
                    <div className='nav__user'>
                        <i className="fas fa-user" ></i>
                        <div className="nav__user--email">
                            {user && user.email}
                        </div>
                        <Button text='Log Out' classType='btn--third' bgColor='$c-danger' callbackFunction={() => setUser({})} />
                    </div>
                }
                <div className="nav__cart" onClick={() => setShowCart(prevValue => !prevValue)}>
                    <i className="fas fa-shopping-cart"></i>
                    <span className="nav__cart__number">{cart.length}</span>
                </div>
            </div>
        </nav>
     );
}
 
export default Nav;