import React,{useState} from 'react';

function InputField(props) {

    const [error,setError] = useState('');

    function handleOnchange(e) {
        props.onchange(props.id, e.target.value);
    }
    return (
        <div>
            <label htmlFor={props.id}>{props.labelName}</label>
            <input type={props.type} id={props.id} placeholder={props.placeholder} className={props.className}
                value={props.value} onChange={handleOnchange} />
            {error && <span className='text-danger'>{error}</span>}
        </div>
    );
}

export default InputField;