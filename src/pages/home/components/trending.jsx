import React from 'react'
import './trending.css'
import { cloth1, cloth2, cloth3, cloth4, cloth5, cloth6, cloth7 } from '../../../assets/index'



const Cards = ({image}) => {
    return (
        <div className="card">
           <div className="image">
               <img src={image} alt="" />
           </div>
           <div className="details-shop">
               <div className="details">
                   <h2>sexy gurl hoddie</h2>
                   <p><b>69 color</b> $169</p>
               </div>
               <div className="shop"></div>
           </div>
        </div>
    )
}
const Trending = () => {
    return (
        <section className="trending">
            <div className="head">
                <h2>
                    Trending
                </h2>
                <a href="#">View more</a>
            </div>

            <div className="card-box">
                <Cards image={cloth3}/>
                <Cards image={cloth4} />
                <Cards image={cloth2} />
                <Cards image={cloth7
                    
                } />
            </div>
        </section>
    )
}

export default Trending