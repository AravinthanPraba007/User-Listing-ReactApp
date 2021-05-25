import React,{useState} from 'react';
import { validateInput } from './InpuFieldValidator';

function InputField(props) {

    const [error,setError] = useState({error: false, message:''});

    function handleOnchange(e) {
        props.onchange(props.id, e.target.value);
        setError(validateInput(props.validators, e.target.value));
    }

    return (
        <div>
            <label htmlFor={props.id}>{props.labelName}</label>
            <input type={props.type} id={props.id} placeholder={props.placeholder} className={props.className}
                value={props.value} onChange={handleOnchange} />
            {error && <span className='text-danger'>{error.message}</span>}
        </div>
    );
}

export default InputField;