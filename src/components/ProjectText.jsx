function ProjectText({id, description}) {
    return (
    <div className="textDescription" key={id}>
        <h3> DESCRIPTION </h3>
            <p> {description} </p>

    </div>
    )
}

export default ProjectText