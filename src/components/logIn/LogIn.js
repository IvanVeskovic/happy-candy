import FormInput from "../formInput/FormInput";

const LogIn = ({setUsername, setPassword}) => {

    return ( 
        <form className='form'>
            <FormInput type='text' text='Enter Username' callbackFunction={setUsername} />
            <FormInput type='password' text='Enter Password' callbackFunction={setPassword} />
        </form>
     );
}
 
export default LogIn;