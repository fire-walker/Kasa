import {useLoaderData, Navigate} from "react-router-dom";
import { getAccommodation } from "./controller";

import Header from "../../components/Header";
import Slider from "../../components/Accommodation/Slideshow";
import Rating from "../../components/Accommodation/Ratings";
import Footer from "../../components/Footer";
import Collapse from "../../components/Collapse";

export async function loader ({ params }) {
    return await getAccommodation(params.accommodationId);
}

export default function Accommodation() {
    const accommodation = useLoaderData();

    if (!accommodation) {
        return <Navigate to="/404" replace={true}></Navigate>;
    }

    return (
        <div>
        <Header />
            <div className="accommodation">
                    <Slider slides={accommodation.pictures} />

                <div className="accommodation__container">
                    <div className="accommodation__informations">

                        <h1 className="accommodation__title">{accommodation.title}</h1>
                        <div className="accommodation__location">{accommodation.location}</div>
                        <ul className="accommodation__tags">{accommodation.tags.map((tag, index)=>(
                            <li key={index}>{tag}</li>
                        ))}
                        </ul>
                    </div>

                    <div className="accommodation__host">
                        <div className="accommodation__host__informations">
                        <p className="accommodation__host__name">{accommodation.host.name}</p>
                        <div className="accommodation__host__picture">
                            <img src={accommodation.host.picture} alt={accommodation.host.name}/>
                        </div>
                    </div>
                    <div className="ratings">
                        <Rating rate={accommodation.rating}/>
                    </div>
                </div>
                </div>

                <div className="accommodation__collapse">
                    <div className="accommodation__collapse__collapse">
                        <Collapse
                            key={accommodation.id}
                            label={"Description"}
                            description={accommodation.description}
                            className = {`acc`}
                        />
                    </div>

                    <div className="accommodation__collapse__collapse">
                        <Collapse
                            key={accommodation.id}
                            label={
                            <div className="cards__label__accommodation">Equipements</div>}
                            description={accommodation.equipments.map((equipment, index)=>(
                                <li key={index}>{equipment}</li>
                            ))}
                            className = {`acc`}
                        /></div>
                </div>

            </div>
        <Footer />
        </div>
    );
}
