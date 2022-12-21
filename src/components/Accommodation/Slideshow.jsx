import React, { useState } from "react";
import { IoChevronBackSharp, IoChevronForwardSharp } from "react-icons/io5";

const Slider = ({ slides }) => {
    const [sliderPosition, setSliderPosition] = useState(0);
    const length = slides.length;
    const maxlength = length - 1;

    const nextSlide = () => {
        setSliderPosition(sliderPosition === maxlength ? 0 : sliderPosition + 1);
    };

    const prevSlide = () => {
        setSliderPosition(sliderPosition === 0 ? maxlength : sliderPosition - 1);
    };

    return (
        <div className="slideshow">

            {length !== 1 &&
            <div>
                <IoChevronBackSharp className="left-arrow arrow" onClick={prevSlide}/>
                <IoChevronForwardSharp className="right-arrow arrow" onClick={nextSlide}/>
                <div className="slideshow__bulletpoint">
                    {sliderPosition + 1}/{slides.length}
                </div>
            </div>
            }

            {slides.map((slide, index) => {
                return (
                    <div className="slideshow__images" key={index}>
                        {index === sliderPosition && (<img src={slide} alt="Logement" />)}
                    </div>
                );
            })}
        </div>
    );
};

export default Slider;