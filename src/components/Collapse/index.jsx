import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"

export default function Collapse ({label, description}) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="cards">
            <div className="cards__label">
                <div>{label}</div>
                {!isOpen ?
                    (<button onClick={ () => setIsOpen(true)}><FaChevronDown /></button>)
                    :
                    (<button onClick={ () => setIsOpen(false)}><FaChevronUp /></button>)}
            </div>
            {isOpen &&
                <div className="cards__description">{description}</div>}
        </div>
    )
};