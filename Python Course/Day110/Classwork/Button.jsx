import React from "react"

const ButtonBlack = ({children, onClick, style}) => {
  return (
    <button onClick={onClick} style={{backgroundColor: "black", color: "white", padding: "10px", ...style}}>
      {children}
    </button>
  )
}

export default ButtonBlack
