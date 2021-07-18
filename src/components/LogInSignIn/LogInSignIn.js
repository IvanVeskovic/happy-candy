import { useContext, useState } from "react";
import LogIn from "../logIn/LogIn";
import { ShopContext } from "../ShopContext";
import SignIn from "../signIn/SignIn";
import Button from "../button/Button";
import { firebaseAuth } from "../../firebase";

const LogInSignIn = () => {
    const {logIn, setLogIn, setShowLogInSignIn, setUser} = useContext(ShopContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');


    const handleLogIn = () => {
        const promise = firebaseAuth.signInWithEmailAndPassword(email, password);
        promise.then(data => {
            setUser(data.user)
            console.log(data.user.email);
        });
        promise.catch(e => console.log(e.message));
        setShowLogInSignIn(false);
    }

    const handleSignIn = () => {
        const checkedPass = password === repeatPassword ? password : undefined;
        const promise = firebaseAuth.createUserWithEmailAndPassword(email, checkedPass);
        promise.then(data => setUser(data.user));
        promise.catch(e => console.log(e.message));
        setShowLogInSignIn(false);
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
                        logIn ? <LogIn setEmail={setEmail} setPassword={setPassword} /> : <SignIn  setEmail={setEmail} setPassword={setPassword} setRepeatPassword={setRepeatPassword} />
                    }
                </div>

                {
                    logIn
                    ?
                    <div className="log__buttons">
                        <Button text='Log In' classType='btn--second mb-xs' callbackFunction={handleLogIn} />
                        <div className="log__info">Don't have account, <span className="log__info--link" onClick={() => setLogIn(false)}>click here</span>  to create one!</div>
                    </div>
                    :
                    <div className="log__buttons">
                        <Button text='Sign Up' classType='btn--second mb-xs' callbackFunction={handleSignIn} />
                        <Button text='Or Sign Up With Google' classType='btn--second mb-xs' bgColor='#d63031' />
                        <div className="log__info">You alredy have an account here? <span className="log__info--link" onClick={() => setLogIn(true)}>click here</span> to login.</div>

                    </div>
                }
                


            </div>
        </div>
     );
}
 
export default LogInSignIn;