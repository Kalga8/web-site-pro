import { Navigate, useParams } from "react-router-dom";
import Carousel from "../components/Carousel";
import projectData from "../data/projects.json";

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
            <Carousel pictures={selectedProjects.pictures} />
        </div>
    )
}

export default Project