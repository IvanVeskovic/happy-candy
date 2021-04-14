import React, { useState, useEffect, createContext } from 'react';

export const ShopContext = createContext();

export const ShopProvider = (props) => {
    const [cart, setCart] = useState([]);
    const [showCart, setShowCart] = useState(false);

    const handleAddToCartUnique = (item) => {
        if(!cart.some(el => el.id === item.id)){
            setCart(prevValue => [...prevValue, {...item, "quantity" : 1}])
        }
    }

    const handleRemoveFromCart = (id) => {
        setCart(prevValue => prevValue.filter(el => el.id !== id))
    }

    // const handleChangeQuantity = (id, value) => {
    //     const newObj = cart.find(el => el.id === id);
    //     const newArr = cart.filter(el => el.id !== id);
    //     newObj.quantity = value;

    //     setCart([...cart, newArr]);
    // }

    
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
        <ShopContext.Provider value={[cart, setCart, showCart, setShowCart, handleAddToCartUnique, handleRemoveFromCart]}>
            {props.children}
        </ShopContext.Provider>
    )
}