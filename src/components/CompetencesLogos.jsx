function competencesLogos({id, logo, alt, title}) {
    return (
                <div className="competence-logo">
                    <img src= {logo} alt= {alt} key={id}/>
                    <h3> {title} </h3>
                </div>
    )
}

export default competencesLogos