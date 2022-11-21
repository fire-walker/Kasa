import { Link } from "react-router-dom";

import Header from "../components/Header";
import Banner from "../components/Banner";
import Card from "../components/Cards";
import Footer from "../components/Footer";

import banner from "../assets/banner_home.jpg";

const accommodations = require("../api/logements.json");

export default function Home() {
    return (
        <div>
        <Header />
            <Banner picture={banner} altText={"Photo d'une côte maritime"} text={"Chez vous, partout et ailleurs"} />
            <div className="accommodation__cards">
                {accommodations.map((accommodation) => (
                    <Link to={"/accommodations}"}>
                        <Card
                            title={accommodation.title}
                            picture={accommodation.pictures[0]}
                            altText={"Photo d'une location"}
                        />
                    </Link>
                ))}
            </div>
        <Footer />
        </div>
    )
}
