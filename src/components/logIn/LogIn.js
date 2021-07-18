import FormInput from "../formInput/FormInput";

const LogIn = ({setEmail, setPassword, handleLogIn}) => {

    return ( 
        <form className='form' onSubmit={(e) => handleLogIn(e)}>
            <FormInput type='email' text='Enter Email' callbackFunction={setEmail} />
            <FormInput type='password' text='Enter Password' callbackFunction={setPassword} />
        </form>
     );
}
 
export default LogIn;