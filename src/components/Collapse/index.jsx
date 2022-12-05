import { useState } from "react";
import { HiOutlineChevronDown, HiOutlineChevronUp } from "react-icons/hi"

export default function Collapse ({label, description}) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="cards">
                {!isOpen ?
                    <div className="cards__label" onClick={ () => setIsOpen(true)}>{label}
                        <div className="cards__icon"><HiOutlineChevronDown /></div>
                    </div>
                    :
                    <div className="cards__label" onClick={ () => setIsOpen(false)}>{label}
                        <div className="cards__icon"><HiOutlineChevronUp /></div>
                    </div>}

            {isOpen &&
                <div className="cards__description">{description}</div>}
        </div>
    )
};