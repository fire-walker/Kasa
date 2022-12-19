import { useState } from "react";
import { IoChevronDownSharp, IoChevronUpSharp } from "react-icons/io5"

export default function Collapse ({label, description, className = ``}) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className={`collapse ${className}`}>
                {!isOpen ?
                    <div className="collapse__label" onClick={ () => setIsOpen(true)}>{label}
                        <div className="collapse__icon"><IoChevronDownSharp /></div>
                    </div>
                    :
                    <div className="collapse__label" onClick={ () => setIsOpen(false)}>{label}
                        <div className="collapse__icon"><IoChevronUpSharp /></div>
                    </div>}

            {isOpen &&
                <div className="collapse__description">{description}</div>}
        </div>
    )
};