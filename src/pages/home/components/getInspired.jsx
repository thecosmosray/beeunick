import React from 'react'
import { gi1, gi2 } from '../../../assets'
import './getInspired.css'

const GetInspired = () => {
  return (
    <div className="getInspired">
        
        <h2>Get Inspired</h2>
        <p>Explore how The PANGAIA Family style our trending pieces</p>

        <div className="images-div">
            <div className="image">
                <img src={gi1} alt="" />
            </div>
            <div className="image">
            <img src={gi2} alt="" />
            </div>
            <div className="image">
            <img src={gi1} alt="" />
            </div>
            <div className="image">
            <img src={gi2} alt="" />
            </div>
        </div>
    </div>
  )
}

export default GetInspired