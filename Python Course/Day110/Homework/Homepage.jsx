// components/Homepage.jsx
import React from "react"
import Button from ",/Button"

const Homepage = () => {
    return (
        <div style={{textAlign: "center", padding: "20px"}}>
            <h1>Welcome to my mini website</h1>
            <buton text="Learn More" color="green" size="large" onClick={() => alert("Learn more clicked")}/>
            <button text="Sign Up" color="orange" size="small" onClick={() => alert("Sign up clicked")}/>
        </div>
    )
}

export default Homepage