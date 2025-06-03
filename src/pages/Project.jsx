import { Navigate, useParams } from "react-router-dom";
import Carousel from "../components/Carousel";
import projectData from "../data/projects.json";
import ProjectText from "../components/ProjectText";

function Project() {
    const { id } = useParams();
    console.log("id", id);
    const selectedProject = projectData.project.find((project) => project.id === id);
  
    // --- Gestion erreur id non trouvée ---
    if (!selectedProject) {
      return <Navigate to="/Error" />;
    }
  
    return (
        <div className="projectContainer">
            <div className="ProjectTextBlock">
                <ProjectText 
                key={selectedProject.id}
                description={selectedProject.description}
                id={selectedProject.id}
                // competences={selectedProject.competences}
                // difficulties={selectedProject.difficulties}
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