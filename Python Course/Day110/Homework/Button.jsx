// components/Buton.jsx
import React from "react"

const Button = ({text, color, size, onClick}) => {
    const buttonStyles = {
        backgroundColor: color || "blue",
        padding: size == "large" ? "12px 25px" : "8px 16px",
        color: "white",
        border: "none",
        borderRadius: "10px",
        cursor: "pointer",
    }

    return (
        <button style={buttonStyles} onClick={onClick}>
            {text}
        </button>
    )
}

export default Button
