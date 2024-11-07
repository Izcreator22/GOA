// components/Portfolio.jsx
import React from "react"
import Button from "./Button"

const Portfolio = () => {
  const portfolioItems = ["Project 1", "Project 2", "Project 3"]

  return (
    <div style={{padding: "20px", maxWidth: "800px", margin: "auto"}}>
      <h2>My Portfolio</h2>
      <div style={{display: "flex", flexWrap: "wrap", gap: "20px"}}>
        {portfolioItems.map((item, index) => (
          <div key={index} style={{border: "1px solid #ccc", padding: "20px", borderRadius: "8px"}}>
            <h3>{item}</h3>
            <p>Description of {item}</p>
            <Button text="View Details" color="blue" onClick={() => alert(`Viewing ${item}`)}/>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Portfolio