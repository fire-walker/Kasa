import { useState } from "react";
import { IoChevronDownSharp, IoChevronUpSharp } from "react-icons/io5"

export default function Collapse ({label, description}) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="cards">
                {!isOpen ?
                    <div className="cards__label" onClick={ () => setIsOpen(true)}>{label}
                        <div className="cards__icon"><IoChevronDownSharp /></div>
                    </div>
                    :
                    <div className="cards__label" onClick={ () => setIsOpen(false)}>{label}
                        <div className="cards__icon"><IoChevronUpSharp /></div>
                    </div>}

            {isOpen &&
                <div className="cards__description">{description}</div>}
        </div>
    )
};