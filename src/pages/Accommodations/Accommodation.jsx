import { getAccommodation } from "./controller";
import {useLoaderData, Navigate} from "react-router-dom";
import Header from "../../components/Header";
import Slider from "../../components/Accommodation/Slideshow";
import Rating from "../../components/Accommodation/Ratings";
import Footer from "../../components/Footer";
import Collapse from "../../components/Collapse";

export async function loader (params) {
    const id = params.params.accommodationId;
    return await getAccommodation(id);
}

export default function Accommodation() {
    const accommodation = useLoaderData();
    console.log(accommodation.rating);

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
                        <ul className="accommodation__tags">{accommodation.tags.map((tag)=>(
                            <li key={tag.index}>{tag}</li>
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
                        />
                    </div>

                    <div className="accommodation__collapse__collapse">
                        <Collapse
                            key={accommodation.id}
                            label={"Equipements"}
                            description={accommodation.equipments.map((equipment)=>(
                                <li key={equipment.index}>{equipment}</li>
                            ))}
                        /></div>
                </div>

            </div>
        <Footer />
        </div>
    );
}
