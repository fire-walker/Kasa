import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import banner from "../assets/banner_about_us.jpg";
import Collapse from "../components/Collapse";

const cardDatas =[
    {
        id: 1,
        label: "Fiabilité",
        description: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
    },
    {
        id: 2,
        label: "Respect",
        description: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
    },
    {
        id: 3,
        label: "Service",
        description: "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
    },
    {
        id: 4,
        label: "Sécurité",
        description: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
    },
]

export default function About() {
    return (
        <div>
            <Header />
            <div className="banner__about">
            <Banner picture={banner} alt={"Photo d'une chaîne de montagnes"} />
            </div>
            <div className="cards__container">
                {cardDatas.map((card) => (
                    <Collapse
                        key={card.id}
                        label={card.label}
                        description={card.description}
                    />
                ))}
                    </div>
            <Footer />
        </div>
    )
}