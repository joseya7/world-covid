import React from 'react'
import './PreventionCard.css'

const PreventionCard = ({ img, text, title }) => {
  return (
    <div className="prevention__card">
      <img src={img} alt="" />
      <h4>{title}</h4>
      <p>{text}</p>
    </div>
  )
}

export default PreventionCard
