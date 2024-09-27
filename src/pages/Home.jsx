import Banner from "../components/Banner"
import Card from "../components/Card"
import CompetencesText from "../components/CompetencesText"
import CompetencesLogos from "../components/CompetencesLogos"
import presentationImage from "../assets/logos/signature1.webp"
import projectsData from "../data/projects.json"
import competencesData from "../data/competences.json"

function Home() {
    return (

    <div className="homeBody">
        <Banner 
            image={presentationImage}
            title="Développeuse Front-end"
        />

        <div className="sectionCards">
            <h2>MON PORTFOLIO</h2>
            <div className="cardsContainer">
                {projectsData.map((projects) => (
                    <Card
                        key={projects.id}
                        id={projects.id}
                        title={projects.title}
                        cover={projects.cover}
                    />
                ))}
            </div>
        </div>

        <div className="competencesBlock">
            <CompetencesText/>

            {competencesData.map((competences) =>
                <CompetencesLogos
                    key={competences.id}
                    logo={competences.logo}
                    alt={competences.alt}
                    title={competences.title}
                />
            )}
        </div>
    </div>
    )
}

export default Home