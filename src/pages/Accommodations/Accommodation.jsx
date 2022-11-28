import { getAccommodation } from "./controller";
import {useLoaderData} from "react-router-dom";

export function loader (params) {
    const id = params.params.accommodationId;
    return getAccommodation(id);
}


export default function Accommodation() {
    const accommodation = useLoaderData();
    console.log(accommodation);

    return (
        <p>Pouet</p>
        // Header
        // Main
        // Carousel
        // ...
        // Footer
    );
}
