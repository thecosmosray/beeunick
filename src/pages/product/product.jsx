import React from 'react'
import './product.css'
import { Navbar } from '../../utils/export'
import { IoIosArrowForward } from "react-icons/io";
import { cloth1, cloth2, cloth3, cloth4, cloth5, cloth6, cloth7 } from '../../assets';
import { FaStar, FaStarHalf } from "react-icons/fa";
import { IoBagHandle } from "react-icons/io5";

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
                        <img src={cloth1} alt="" />
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
                            #sexisbest2345
                        </div>
                    </div>

                    <div className="head">
                        sexy gurl hoddie
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
                            <div className="image-col-box">
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
                            <div className="box active">
                                S
                            </div>
                            <div className="box">
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
                           <IoBagHandle  className='i'/> add to cart
                        </div>
                    </div>
                </div>
            </div>

        </section>
    </>
}

export default Product