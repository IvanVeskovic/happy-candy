import FormInput from "../formInput/FormInput"

const SignIn = ({setEmail, setPassword, setRepeatPassword, handleSignIn}) => {
    return ( 
        <div>
            <form className='form' onSubmit={(e) => handleSignIn(e)}>
                <FormInput type='email' text='Enter Email' callbackFunction={setEmail} labelType='light' />
                <FormInput type='password' text='Enter Password' callbackFunction={setPassword} labelType='light'/>
                <FormInput type='password' text='Repeat Password' callbackFunction={setRepeatPassword} labelType='light'/>
            </form>
        </div>
     );
}
 
export default SignIn;