import React from 'react'
import './product.css'
import { Footer, Navbar, Trending } from '../../utils/export'
import { IoIosArrowForward } from "react-icons/io";
import { cloth1, cloth2, cloth3, cloth4, cloth5, cloth6, cloth7, prd, prd2, prd3 } from '../../assets';
import { FaStar, FaStarHalf } from "react-icons/fa";
import { IoBagHandle } from "react-icons/io5";
import { FaTruck } from "react-icons/fa";
import { AiFillSafetyCertificate, AiOutlineSafety } from "react-icons/ai";

const Product = () => {
    return <>
        <Navbar />

        <section className="product">
            <div className="path">
                home <IoIosArrowForward /> product <IoIosArrowForward /> t-shirt
            </div>

            <div className="details">
                <div className="child image-box">
                    <div className="image">
                        <img src={prd} alt="" />

                        <div className="rating">
                            <FaStar className='star' />  Highly rated
                        </div>
                    </div>
                    <div className="image-col">
                        <div className="image-col-box">
                            <img src={cloth1} alt="" />
                        </div>
                        <div className="image-col-box">
                            <img src={cloth2} alt="" />
                        </div>
                        <div className="image-col-box">
                            <img src={cloth5} alt="" />
                        </div>
                        <div className="image-col-box">
                            <img src={cloth7} alt="" />
                        </div>
                    </div>
                </div>
                <div className="child details-shop">
                    <div className="company_id">
                        <div className="company">
                            rebook
                        </div>
                        <div className="id">
                            #isbest2345
                        </div>
                    </div>

                    <div className="head">
                        gurl hoddie extra comfy
                    </div>

                    <div className="stars">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStarHalf />
                        <div className="text">
                            69 reviews
                        </div>
                    </div>

                    <div className="price">
                        ₹ 699
                    </div>

                    <div className="color_selection">
                        <div className="color">
                            color - white
                        </div>
                        <div className="image-col">
                            <div className="image-col-box active">
                                <img src={cloth1} alt="" />
                            </div>
                            <div className="image-col-box">
                                <img src={cloth6} alt="" />
                            </div>
                            <div className="image-col-box">
                                <img src={cloth4} alt="" />
                            </div>

                        </div>
                    </div>

                    <div className="size_selection">
                        <div className="size">
                            size - M
                        </div>
                        <div className="size-box">
                            <div className="box ">
                                S
                            </div>
                            <div className="box active">
                                M
                            </div>
                            <div className="box">
                                L
                            </div>
                            <div className="box">
                                XL
                            </div>
                            <div className="box">
                                XXL
                            </div>



                        </div>
                        <div className="size_guide">
                            Size Guide
                        </div>

                        <div className="add_to_cart">
                            <IoBagHandle className='i' /> add to cart
                        </div>

                    </div>
                    <div className="free_delivery">
                        <span className="icon"><FaTruck className='i' /></span>
                       free delivery upto 5000 rs
                    </div>
                    <div className="secure_delivery">
                        <span className="icon"><AiFillSafetyCertificate className='i' /></span>
                       100% secure dilevery 
                    </div>
                    <div className="details_text">
                        Inspired by the original low-profile tennis shoes, the Nike Killshot 2 updates the upper with various textured leathers to create a fresh look. From soft suedes to smooth leathers with the perfect sheen, it's courtside attitude with a modern touch. To prove you're on top, the rubber gum sole adds the cherry on the bottom.

                        <ul>
                            <li>Colour Shown: Sail/Gum Yellow/Midnight Navy</li>
                            <li>Style: 432997-107</li>
                            <li>Country/Region of Origin: Indonesia</li>
                        </ul>

                    </div>
                </div>
            </div>

            <div className="gallery">

                <div className="head">
                    Hoaw others are wearing this
                </div>
                <div className="text">
                Upload your photo or mention @Nike on Instagram for a chance to be featured.
                </div>

                <div className="gallery-box">
                    <div className="images">
                        <img src={prd} alt="" />
                        <div className="g-text">
                            @ayush_kr
                        </div>
                    </div>
                    <div className="images">
                        <img src={prd2} alt="" />
                        <div className="g-text">
                            @ayush_kr
                        </div>
                    </div>
                    <div className="images">
                        <img src={prd3} alt="" />
                        <div className="g-text">
                            @ayush_kr
                        </div>
                    </div>
                </div>
            </div>

            <div className="big_pics">
                <div className="text">
                Explore the Nike Killshot 2 Leather Men's Shoe
                </div>
                <div className="images"><img src={prd} alt="" /></div>

                <div className="text">
                Explore the Nike Killshot 2 Leather Men's Shoe
                </div>
                <div className="images"><img src={prd2} alt="" /></div>
                <div className="text">
                Explore the Nike Killshot 2 Leather Men's Shoe
                </div>
                <div className="images"><img src={prd3} alt="" /></div>
            </div>
 

 <Trending />
        </section>
        <Footer />
    </>
}

export default Product