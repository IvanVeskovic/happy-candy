import FormInput from "../formInput/FormInput";

const LogIn = ({setEmail, setPassword}) => {

    return ( 
        <form className='form'>
            <FormInput type='email' text='Enter Email' callbackFunction={setEmail} />
            <FormInput type='password' text='Enter Password' callbackFunction={setPassword} />
        </form>
     );
}
 
export default LogIn;