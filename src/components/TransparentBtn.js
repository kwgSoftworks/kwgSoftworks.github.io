import React from 'react'

export default function TransparentBtn({text, icon}) {
    return (
        <div className="transparent-btn">
            {icon && <img src={icon} alt={text} className="transparent-btn__icon"/>}
            {text}
        </div>
    )
}
