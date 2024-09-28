function ProjectText({id, description, competences, difficulties}) {
    return (
    <div className="textDescription" key={id}>
        <h3> DESCRIPTION </h3>
            <p> {description} </p>

        <h4> COMPÉTENCES </h4>
            <p> {competences} </p>

        <h4> DIFFICULTÉS </h4>
            <p> {difficulties} </p>
    </div>
    )
}

export default ProjectText