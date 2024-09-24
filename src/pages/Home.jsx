import Banner from "../components/Banner"
import Card from "../components/Card"
import presentationImage from "../assets/logos/signature1.webp"
import projectsData from "../data/projects.json"

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
    </div>
    )
}

export default Home