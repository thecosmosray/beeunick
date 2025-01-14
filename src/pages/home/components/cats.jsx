import React from 'react'
import './cats.css'
import { cat1, cat2, cat3 } from '../../../assets/index'

const Cats = () => {
    return (
        <section className="cats">

            <div className="cards">
                <img src={cat1} alt="" />

                <div className="overlay">
                    <p className="text">Organic hoddies</p>
                    <button>Shop womens</button>
                </div>

            </div>
            <div className="cards">
                <img src={cat2} alt="" />
                <div className="overlay">
                    <p className="text">Organic hoddies</p>
                    <button>Shop womens</button>
                </div>
            </div>
            <div className="cards">
                <img src={cat3} alt="" />
                <div className="overlay">
                    <p className="text">Organic hoddies</p>
                    <button>Shop womens</button>
                </div>
            </div>
        </section>
    )
}

export default Cats