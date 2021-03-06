import React from 'react'
import "./Button.css"

export default function Button(props) {
    return (
        <button className="custom-button" {...props}> 
            {props.text}
        </button>
    )
}
