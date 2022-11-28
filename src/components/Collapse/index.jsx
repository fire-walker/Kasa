import { useState } from "react";
import { HiOutlineChevronDown, HiOutlineChevronUp } from "react-icons/hi"

export default function Collapse ({label, description}) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="cards">
            <div className="cards__label">
                <div>{label}</div>
                {!isOpen ?
                    (<div className="cards__icon" onClick={() => setIsOpen(true)}><HiOutlineChevronDown /></div>)
                    :
                    (<div className="cards__icon" onClick={() => setIsOpen(false)}><HiOutlineChevronUp /></div>)}
            </div>
            {isOpen &&
                <div className="cards__description">{description}</div>}
        </div>
    )
};