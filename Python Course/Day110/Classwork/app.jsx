import React from "react"
import ButtonBlack from "./components/ButtonBlack"

function App() {
  const handleClick = () => {
    alert("Button clicked")
  }

  return (
    <div>
      <ButtonBlack onClick={handleClick} style={{borderRadius: "5px"}}>
        Click Me
      </ButtonBlack>
    </div>
  )
}

export default App

