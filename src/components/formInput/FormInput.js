import { useState } from "react";

const FormInput = ({placeholder = 'Holder', text, type, callbackFunction}) => {
    const [value, setValue] = useState('');

    const handleValue = (e) => {
        setValue(e.target.value);
        
        if(callbackFunction){
            callbackFunction(e.target.value);
        }
    }


    return ( 
        <div className="form__controll">
            <input type={type} className={`form__input ${value.length > 0 ? 'form__input--active' : ''}`} placeholder={placeholder} onChange={(e) => handleValue(e)} />
            <label htmlFor="">{text}</label>
        </div>
     );
}
 
export default FormInput;