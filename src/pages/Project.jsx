import { Navigate, useParams } from "react-router-dom";
import Carousel from "../components/Carousel";
import projectData from "/data/projects.json";
import ProjectText from "../components/ProjectText";

function Project(title) {
    const { id } = useParams(); /*Hook récupérant l'id depuis URL*/
    const selectedProject = projectData.find((project) => project.id === id);
  
    /*Gestion erreur id*/
    if (!selectedProject) {
      return <Navigate to="Error" />;
    }
  
    return (
        <div className="projectContainer">
            <div className="ProjectTextBlock">
                <ProjectText 
                key={selectedProject.id}
                description={selectedProject.description}
                competences={selectedProject.competences}
                difficulties={selectedProject.difficulties}
                />
            </div>

            <div className="CarouselBlock">
                <Carousel 
                pictures={selectedProject.pictures} 
                />
            </div>
        </div>
    )
}

export default Project