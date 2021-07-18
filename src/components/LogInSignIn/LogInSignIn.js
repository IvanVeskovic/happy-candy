import { cloneElement, useContext, useState } from "react";
import LogIn from "../logIn/LogIn";
import { ShopContext } from "../ShopContext";
import SignIn from "../signIn/SignIn";
import Button from "../button/Button";
import { firebaseAuth } from "../../firebase";
import Message from "../message/Message";

const LogInSignIn = () => {
    const {logIn, setLogIn, setShowLogInSignIn, setUser} = useContext(ShopContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');

    const [message, setMessage] = useState('')


    const handleLogIn = (e) => {
        e.preventDefault()
        const promise = firebaseAuth.signInWithEmailAndPassword(email, password);
        promise.then(data => {
            setUser(data.user)
            console.log(data.user.email);
            setShowLogInSignIn(false);
        });
        promise.catch(e => {
            console.log(e.message)
            setMessage(e.message)
            setTimeout(() => {
                setMessage('')
            }, 10000);
        });
    }

    const handleSignIn = (e) => {
        e.preventDefault()
        // const checkedPass = password === repeatPassword ? password : false;
        let checkedPass = '';
        
        if(password === repeatPassword) {
            checkedPass = password;
        } else {
            checkedPass = '';
        }

        console.log(checkedPass);

        const promise = firebaseAuth.createUserWithEmailAndPassword(email, checkedPass);
        promise.then(data => {
            setUser(data.user)
            setShowLogInSignIn(false);
        });
        promise.catch(e => {
            checkedPass.length < 1 ? setMessage('Passwords doesnt match!') : setMessage(e.message);
            console.log(message);
            setTimeout(() => {
                setMessage('')
            }, 10000);
        });
    }

    // firebaseAuth.onAuthStateChanged(firebaseUser => {
    //     if(firebaseUser) {
    //       setUser(firebaseUser);
    //     } 
    //     else {
    //       console.log('Not Logged In');
    //       setUser({});
    //     }
    //   });

    return ( 
        <div className='log'>
            <div className="log__box">
                <div className="log__close" onClick={() => setShowLogInSignIn(false)}>
                    <i className="fas fa-times-circle"></i>
                </div>
                <h2 className='log__heading'>
                    {logIn ? 'Log In' : 'Sign In'}
                </h2>
                <div className="log__content">
                    {
                        logIn ? <LogIn setEmail={setEmail} setPassword={setPassword} handleLogIn={(e) => handleLogIn(e)} /> : <SignIn  setEmail={setEmail} setPassword={setPassword} setRepeatPassword={setRepeatPassword} handleSignIn={(e) => handleSignIn(e)} />
                    }
                    {
                        message
                        &&
                        <Message text={message} type='danger' />
                    }
                </div>

                {
                    logIn
                    ?
                    <div className="log__buttons">
                        <Button text='Log In' classType='btn--second mb-xs' callbackFunction={(e) => handleLogIn(e)} />
                        <div className="log__info">Don't have account, <span className="log__info--link" onClick={() => setLogIn(false)}>click here</span>  to create one!</div>
                    </div>
                    :
                    <div className="log__buttons">
                        <Button text='Sign Up' classType='btn--second mb-xs' callbackFunction={(e) => handleSignIn(e)} />
                        <Button text='Or Sign Up With Google' classType='btn--second mb-xs' bgColor='#27ae60' />
                        <div className="log__info">You alredy have an account here? <span className="log__info--link" onClick={() => setLogIn(true)}>click here</span> to login.</div>

                    </div>
                }
                


            </div>
        </div>
     );
}
 
export default LogInSignIn;