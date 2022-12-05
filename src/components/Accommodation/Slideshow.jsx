import React, { useState } from "react";
import { HiOutlineChevronRight, HiOutlineChevronLeft } from "react-icons/hi";

const Slider = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    return (
        <div className="slideshow">

            <HiOutlineChevronLeft className="left-arrow arrow" onClick={prevSlide}/>
            <HiOutlineChevronRight className="right-arrow arrow" onClick={nextSlide}/>

            {slides.map((slide, index) => {
                return (
                    <div className="slideshow__images" key={index}>
                        {index === current && (<img src={slide} alt="Logement" />)}
                        <div className="slideshow__bulletpoint">
                            <p>{current + 1}/{slides.length}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Slider;