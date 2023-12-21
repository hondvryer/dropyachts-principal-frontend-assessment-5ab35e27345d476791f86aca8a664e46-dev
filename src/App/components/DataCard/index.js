import React from "react"
import "./styles.css"

const DataCard = ({ value, text, textAlignment, cardStyles = {} }) => (
  <div style={cardStyles} className="data-card">
    <span className="number">{value}</span>
    {textAlignment === "bottom" ? (
      <div style={{ marginBottom: "0.5rem" }} className="text">
        {text}
      </div>
    ) : (
      <span className="text">{text}</span>
    )}
  </div>
)

export default DataCard
