import githubLink from "../assets/logos/logo-github.webp"
import instaLink from "../assets/logos/logo-insta.webp"
import linkedinLink from "../assets/logos/logo-linkedin.webp"

function banner ({image, title}) {
    return (
        <div className="banner-container">
            <div className="presentation">
                <img className="presentationImage"
                src={image}/>

                <div className="bannerTitle">
                    <h2> {title} </h2>

                <button> Télécharger mon cv </button>
                </div>
            </div>

            <div className="verticalLinks">
                <img className="githubLink" src= {githubLink}/>
                <img className="instaLink" src= {instaLink}/>
                <img className="linkedinLink" src= {linkedinLink}/>
            </div>
        </div>
    )
}

export default banner