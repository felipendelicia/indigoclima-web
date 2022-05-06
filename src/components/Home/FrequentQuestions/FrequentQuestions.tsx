import "./FrequentQuestions.css"
import React from 'react'

import frequentQuestions from "./frequentQuestions.json"

const FrequentQuestions = () => {

  return (
    <div className="fq-container">
      <div className="fq-accordion">
        {
          frequentQuestions.map((element,index)=>{
            return(
              <div className="accordion-item" onClick={(e)=>{
                let isShowed = e.currentTarget.lastElementChild?.className.includes("show")
                let fatherNode = e.currentTarget.classList
                if (isShowed===true){
                  e.currentTarget.lastElementChild?.classList.remove("show")
                  fatherNode.remove("bigger")
                } else {
                  e.currentTarget.lastElementChild?.classList.add("show")
                  fatherNode.add("bigger")
                }
              }} key={index}>
                <div className="accordion-item-q comfortaafont">
                  {element.q}
                </div>
                <div className="accordion-item-r comfortaafont">
                  {element.r}
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default FrequentQuestions