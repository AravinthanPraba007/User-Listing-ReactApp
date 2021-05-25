import React from 'react';

function InputFeild(props) {

    function handleOnchange(e) {
        props.onchange(props.id, e.target.value);
    }
    return (
        <div>
            <label htmlFor={props.id}>{props.labelName}</label>
            <input type={props.type} id={props.id} placeholder={props.placeholder} className={props.className}
                value={props.value} onChange={handleOnchange} />
        </div>
    );
}

export default InputFeild;