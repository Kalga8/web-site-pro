import { Navigate, useParams } from "react-router-dom";
import Carousel from "../components/Carousel";
import projectData from "../data/projects.json";
import ProjectText from "../components/ProjectText";

function Project() {
    const { id } = useParams(); /*Hook récupérant l'id depuis URL*/
    const selectedProjects = projectData.find(
      (appartement) => appartement.id === id
    );
  
    /*Gestion erreur id*/
    if (!selectedProjects) {
      return <Navigate to="Error" />;
    }
  
    return (
        <div className="projectContainer">
            <div className="ProjectTextBlock">
                <ProjectText />
            </div>

            <div className="CarouselBlock">
                <Carousel pictures={selectedProjects.pictures} />
            </div>
        </div>
    )
}

export default Project