const Form = () => {
    return ( 
        <form className='form my-lg'>
            <div className="form__controll">
                <input type="text" className='form__input'/>
                <label htmlFor="">Enter Name</label>
            </div>
            <div className="form__controll">
                <input type="email" className='form__input' required/>
                <label htmlFor="">Enter Email</label>
            </div>
            <div className="form__controll">
                <textarea name="message" className='form__textarea' placeholder='Enter Message'></textarea>
            </div>
            <button type="submit" className='btn btn--second'>Submit</button>
        </form>
     );
}
 
export default Form;