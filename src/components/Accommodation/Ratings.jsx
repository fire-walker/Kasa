import React from "react";
import { HiStar } from "react-icons/hi";

export default function Rating(rate) {
    const totalStars = 5;
    const activeStars = rate;

    return (
        <div>
            {[...new Array(totalStars)].map((stars, index) => {
                return index < activeStars ? <HiStar className="fullstar"/> : <HiStar className="emptystar" />;
            })}
        </div>
    );
};