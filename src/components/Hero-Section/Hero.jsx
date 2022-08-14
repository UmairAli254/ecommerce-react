import "./Hero.css";
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination } from "swiper";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import ArrowCircleLeftSharpIcon from '@mui/icons-material/ArrowCircleLeftSharp';
import ArrowCircleRightSharpIcon from '@mui/icons-material/ArrowCircleRightSharp';

import Hero1 from "../../img/hero1.jpg";
import Hero2 from "../../img/hero2.jpg";
import Hero3 from "../../img/hero3.jpg";

const Hero = () => {


    return (
        <div className="container-fluid hero-section mt-5">
            <div className="row h-70 d-flex align-items-center">
                <div className="col-1 text-center previousbtn">
                    <ArrowCircleLeftSharpIcon role="button"
                        onClick={() => {
                            document.getElementsByClassName("swiper-button-prev")[0].click();

                        }}
                        className="fs-1 vanBtns"
                    />

                </div>
                <div className="col-10 text-center heroSlider">
                    <Swiper className="rounded"
                        modules={[Navigation, Pagination]}
                        navigation={true}
                        pagination={{
                            type: "progressbar",
                            backgroundColor: "red"
                        }}
                        slidesPerView={1}
                    >
                        {/* Slide One */}
                        <SwiperSlide>
                            <div className="row hSlide1 bg-warning">
                                <div className="col-6">
                                    <img src={Hero1} className="heroImgs rounded" />
                                </div>
                                <div className="col d-flex align-items-center">
                                    <h1 className="text-start  text-bold">30% Discount, if you spend over 20k </h1>
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* Slide 2 */}
                        <SwiperSlide>
                            <div className="row hSlide1 bg-dark">
                                <div className="col d-flex align-items-center">
                                    <h1 className="text-end display-2 text-bold text-light">Buy One and Get 2 Free! </h1>
                                </div>
                                <div className="col-6">
                                    <img src={Hero2} className="heroImgs rounded" />
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* Slide 3 */}
                        <SwiperSlide>
                            <div className="row hSlide1 bg-primary">
                                <div className="col d-flex align-items-center">
                                    <h1 className="text-end display-2 text-bold text-light">Feel the summer breeze! </h1>
                                </div>
                                <div className="col-6">
                                    <img src={Hero3} className="heroImgs rounded" />
                                </div>
                            </div>
                        </SwiperSlide>

                    </Swiper>
                </div>
                <div className="col-1 text-center nextbtn">
                    <ArrowCircleRightSharpIcon role="button"
                        onClick={() => {
                            document.getElementsByClassName("swiper-button-next")[0].click();
                        }}
                        className="fs-1 vanBtns"
                    />

                </div>
            </div>
        </div>
    )
}

export default Hero