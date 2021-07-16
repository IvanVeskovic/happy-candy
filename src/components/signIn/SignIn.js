import FormInput from "../formInput/FormInput"

const SignIn = ({setUsername, setPassword, setRepeatPassword}) => {
    return ( 
        <div>
            <form className='form'>
                <FormInput type='text' text='Enter Username' callbackFunction={setUsername} />
                <FormInput type='password' text='Enter Password' callbackFunction={setPassword}/>
                <FormInput type='password' text='Repeat Password' callbackFunction={setRepeatPassword}/>
            </form>
        </div>
     );
}
 
export default SignIn;