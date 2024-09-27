function Competences (key, logo, title, alt) {

    return (
    <div className="competencesContainer">
            
        <h2> MES COMPÉTENCES </h2>

        <div className="competences">
            <div className="competencesText">
                <p>Depuis plus d'un an,  j'ai l'opportunité de consolider mes compétences techniques 
                    et pratiques à travers une formation en alternance, alliant enseignement théorique
                    et expérience professionnelle.
                    Cette approche me permet de maîtriser des technologies clés du développement web, 
                    telles que HTML, CSS, JavaScript, ainsi que des frameworks modernes comme React.
                    En parallèle, mon immersion en entreprise m'offre l'occasion de contribuer à des 
                    projets concrets, d'appliquer directement les connaissances acquises et de 
                    m'adapter aux exigences du secteur. Cette expérience renforce ma capacité à 
                    délivrer des solutions web performantes et adaptées aux besoins du client.</p>
            </div>

            <div className="competencesLogos">
                <div className="competence-logo">
                    <img src= {logo} alt= {alt} id={key}/>
                </div>

                <div className="competence-title">
                    <h3> {title} </h3>
                </div>
            </div>
        </div>
    
    </div>
    )
}

export default Competences