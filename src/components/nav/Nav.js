import { Link } from "react-router-dom";
import { useContext } from 'react';

import { ShopContext } from '../ShopContext';


const Nav = () => {

    const [ cart, setCart, showCart, setShowCart ] = useContext(ShopContext);

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

                <div className="nav__cart" onClick={() => setShowCart(prevValue => !prevValue)}>
                    <i className="fas fa-shopping-cart"></i>
                    <span className="nav__cart__number">{cart.length}</span>
                </div>
            </div>
        </nav>
     );
}
 
export default Nav;