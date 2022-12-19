import { IoStarSharp } from "react-icons/io5";

export default function Rating({rate}) {
    const totalStars = 5;

    return (
        <div>
            {[...new Array(totalStars)].map((star, index) => {
                return index < rate ?
                    <IoStarSharp key={index} className="star fullstar" />
                    :
                    <IoStarSharp key={index} className="star emptystar" />;
            })}
        </div>
    );
};