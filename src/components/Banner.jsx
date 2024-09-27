import { Link } from "react-router-dom"
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
        
                    <div className="cvButton">
                        <a href="/src/assets/documents/cv_justine-launay.pdf"> Télécharger mon cv </a>
                    </div>

                </div>
            </div>

            <div className="verticalLinks">

                <div className="githubLink" >
                    <Link to={"https://github.com/Kalga8"}>
                        <img src= {githubLink}/>
                    </Link>
                </div>

                <div className="instaLink">
                    <Link to={"https://www.instagram.com/jlaunay"}>
                        <img src= {instaLink}/>
                    </Link>
                </div>

                <div className="linkedinLink">
                    <Link to={"www.linkedin.com/in/justine-launay"}>
                        <img src= {linkedinLink}/>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default banner