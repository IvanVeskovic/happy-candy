import FormInput from "../formInput/FormInput";

const LogIn = ({setEmail, setPassword, handleLogIn}) => {

    return ( 
        <form className='form' onSubmit={(e) => handleLogIn(e)}>
            <FormInput type='email' text='Enter Email' callbackFunction={setEmail} labelType='light' />
            <FormInput type='password' text='Enter Password' callbackFunction={setPassword} labelType='light' />
        </form>
     );
}
 
export default LogIn;