import { Link } from "react-router-dom"
import githubLink from "../assets/logos/logo-github.webp"
import instaLink from "../assets/logos/logo-insta.webp"
import linkedinLink from "../assets/logos/logo-linkedin.webp"

function banner ({image, title}) {
    return (
        <div className="banner-container">
            <div className="presentation">
                <img className="presentationImage"
                src={image} alt="image-web-profil"/>

                <div className="bannerTitle">
                    <h1> {title} </h1>
        
                    <div className="cvButton">
                        <a href="/images/documents/cv_justine-launay.pdf" target="_blank"> Télécharger mon cv </a>
                    </div>
                </div>
            </div>

            <div className="verticalLinks">

                <div className="githubLink" >
                    <Link to={"https://github.com/Kalga8"}>
                        <img src= {githubLink} alt="logo-github"/>
                    </Link>
                </div>

                <div className="instaLink">
                    <Link to={"https://www.instagram.com/jlaunay"}>
                        <img src= {instaLink} alt="logo-instagram"/>
                    </Link>
                </div>

                <div className="linkedinLink">
                    <Link to={"www.linkedin.com/in/justine-launay"}>
                        <img src= {linkedinLink} alt="logo-linkedin"/>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default banner