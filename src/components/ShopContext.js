import React, { useState, useEffect, createContext } from 'react';
import { db } from '../firebase';

export const ShopContext = createContext();

export const ShopProvider = (props) => {
    const [cart, setCart] = useState([]);
    const [showCart, setShowCart] = useState(false);
    const [showLogInSignIn, setShowLogInSignIn] = useState(false);
    const [logIn, setLogIn] = useState(true);
    const [showMyOrders, setShowMyOrders] = useState(false);
    const [user, setUser] = useState({});
    const [myOrders, setMyOrders] = useState([]);

    const handleMyOrders = () => {
            let temp = [];
            db.collection('orders').where("userEmail", "==", user.email).get().then(snapshot => {
                snapshot.docs.forEach(doc => {
                        temp.push(doc.data());
                    })
               
            })
            setMyOrders(temp);
            console.log(myOrders);
    }

    useEffect(() => {
        if(Object.keys(user).length > 0) {
            handleMyOrders();
            setShowLogInSignIn(false);
        } else {
            setMyOrders([]);
        }
    }, [user])


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
        <ShopContext.Provider value={{cart, setCart, showCart, setShowCart, handleAddToCartUnique, handleRemoveFromCart, handleChangeQuantity, showLogInSignIn, setShowLogInSignIn, logIn, setLogIn, user, setUser, showMyOrders, setShowMyOrders, setMyOrders, handleMyOrders, myOrders}}>
            {props.children}
        </ShopContext.Provider>
    )
}