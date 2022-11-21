import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"

export default function Collapse ({label, description}) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="cards">
            <div className="cards__label">
                <div>{label}</div>
                {!isOpen ?
                    (<div onClick={ () => setIsOpen(true)} className="cards__icon"><FaChevronDown /></div>)
                    :
                    (<div onClick={ () => setIsOpen(false)} className="cards__icon"><FaChevronUp /></div>)}
            </div>
            {isOpen &&
                <div className="cards__description">{description}</div>}
        </div>
    )
};