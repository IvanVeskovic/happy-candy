import { useState } from "react";

const FormInput = ({placeholder = 'Holder', text, type, callbackFunction, labelType}) => {
    const [value, setValue] = useState('');

    const handleValue = (e) => {
        setValue(e.target.value);
        
        if(callbackFunction){
            callbackFunction(e.target.value);
        }
    }


    return ( 
        <div className="controll">
            <input type={type} className={`controll__input ${value.length > 0 ? 'controll__input--active' : ''}`} placeholder={placeholder} onChange={(e) => handleValue(e)} />
            <label htmlFor="" className={`${labelType === 'light' ? 'light' : 'dark'}`} >{text}</label>
        </div>
     );
}
 
export default FormInput;