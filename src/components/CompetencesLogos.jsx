function competencesLogos(logo, alt, key, title) {
    return (
        <div className="competencesGrid">
            <div className="competencesLogos">
                <div className="competence-logo">
                    <img src= {logo} alt= {alt} id={key}/>
                </div>

                <div className="competence-title">
                    <h3> {title} </h3>
                </div>
            </div>
        </div>
    
    )
}

export default competencesLogos