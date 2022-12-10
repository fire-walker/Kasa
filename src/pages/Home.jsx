import { useLoaderData } from "react-router-dom";

import { getAccommodations } from "./Accommodations/controller";

import Header from "../components/Header";
import Banner from "../components/Banner";
import Card from "../components/Cards";
import Footer from "../components/Footer";

import banner from "../assets/banner_home.jpg";

export function loader () {
    return getAccommodations();
}

export default function Home() {
    const accommodations = useLoaderData();

    return (
        <div>
            <Header />
            <div className="banner__home">
            <Banner className picture={banner} altText={"Photo d'une côte maritime"} text={"Chez vous, partout et ailleurs"} />
            </div>
            <div className="accommodation__cards">
                {accommodations.map((accommodation) => (
                    <Card accommodation={accommodation} key={accommodation.id} />
                ))}
            </div>
            <Footer />
        </div>
    )
}