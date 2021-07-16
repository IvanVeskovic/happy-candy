import { useContext, useState } from "react";
import LogIn from "../logIn/LogIn";
import { ShopContext } from "../ShopContext";
import SignIn from "../signIn/SignIn";
import Button from "../button/Button";

const LogInSignIn = () => {
    const {logIn, setLogIn, showLogInSignIn, setShowLogInSignIn} = useContext(ShopContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');

    console.log(logIn);
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
                        logIn ? <LogIn setUsername={setUsername} setPassword={setPassword} /> : <SignIn  setUsername={setUsername} setPassword={setPassword} setRepeatPassword={setRepeatPassword} />
                    }
                </div>

                {
                    logIn
                    ?
                    <div className="log__buttons">
                        <Button text='Log In' classType='btn--second mb-xs' />
                        <Button text='No Acc? Sign in' classType='btn--second' callbackFunction={() => setLogIn(false)} />
                    </div>
                    :
                    <div className="log__buttons">
                        <Button text='Sign In' classType='btn--second mb-xs' />
                        <Button text='Have Acc? Log In' classType='btn--second' callbackFunction={() => setLogIn(true)} />
                    </div>
                }
                


            </div>
        </div>
     );
}
 
export default LogInSignIn;