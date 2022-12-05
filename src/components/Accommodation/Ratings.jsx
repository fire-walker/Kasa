import React from "react";
import { HiStar } from "react-icons/hi";

export default function Rating({rate}) {
    const totalStars = 5;

    return (
        <div>
            {[...new Array(totalStars)].map((star, index) => {
                return index < rate ?
                    <HiStar className="fullstar"/>
                    :
                    <HiStar className="emptystar" />;
            })}
        </div>
    );
};