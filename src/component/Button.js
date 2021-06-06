import React from 'react'

//Reusable button component
function Button({ label, handleClick }) {
    return (
        <button className="button" onClick={handleClick}>
            {label}
        </button>
    );
            
}

export default Button;
