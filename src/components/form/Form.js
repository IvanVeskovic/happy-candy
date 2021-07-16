import FormInput from "../formInput/FormInput";

const Form = () => {
    return ( 
        <form className='form my-lg'>
            <FormInput type='text' text='Enter Name' />
            <FormInput type='email' text='Enter Email' />
            <div className="form__controll">
                <textarea name="message" className='form__textarea' placeholder='Enter Message'></textarea>
            </div>
            <button type="submit" className='btn btn--second'>Submit</button>
        </form>
     );
}
 
export default Form;