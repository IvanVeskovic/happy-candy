import React, { useState, useEffect, createContext } from 'react';

export const ShopContext = createContext();

export const ShopProvider = (props) => {
    const [cart, setCart] = useState([]);
    const [showCart, setShowCart] = useState(false);
    const [showLogInSignIn, setShowLogInSignIn] = useState(false);
    const [logIn, setLogIn] = useState(true);
    const [user, setUser] = useState({});


    const handleAddToCartUnique = (item) => {
        if(!cart.some(el => el.id === item.id)){
            setCart(prevValue => [...prevValue, {...item, "quantity" : 1}])
        } 
    }

    const handleRemoveFromCart = (id) => {
        setCart(prevValue => prevValue.filter(el => el.id !== id))
    }

    const handleChangeQuantity = (id, value = 1) => {
        const newObj = cart.find(el => el.id === id);
        newObj.quantity = value;
        const newArr = cart.filter(el => el.id !== id ? el : newObj);
        setCart(newArr);
    }

    // Run once hen app start
    useEffect(() => {
        getLocalList();
    }, []);
    // Use Effect
    useEffect(() => {
        saveLocalList();
    }, [cart])


    // Save to Local
    const saveLocalList = () => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }
    const getLocalList = () => {
    if(localStorage.getItem('cart') === null){
        localStorage.setItem('cart', JSON.stringify([]))
    } else {
        let localCart = JSON.parse(localStorage.getItem('cart'));
        setCart(localCart);
    }
    }

    return(
        <ShopContext.Provider value={{cart, setCart, showCart, setShowCart, handleAddToCartUnique, handleRemoveFromCart, handleChangeQuantity, showLogInSignIn, setShowLogInSignIn, logIn, setLogIn, user, setUser}}>
            {props.children}
        </ShopContext.Provider>
    )
}