import githubLink from "../../public/assets/logos/logo-github.webp"
import instaLink from "../../public/assets/logos/logo-insta.webp"
import linkedinLink from "../../public/assets/logos/logo-linkedin.webp"

function banner ({image, title}) {
    return (
        <div className="banner-container">
            <div className="presentation">
                <img className="presentationImage"
                     src={image} alt="image-web-profil"/>

                <div className="bannerTitle">
                    <h1> {title} </h1>

                    <div className="cvButton">
                        <a href="../assets/documents/CV_Justine_Launay.pdf" target="_blank" rel="noopener noreferrer"> Télécharger mon cv </a>
                    </div>
                </div>
            </div>

            <div className="verticalLinks">

                <div className="githubLink" >
                    <a href="https://github.com/Kalga8" target="_blank" rel="noopener noreferrer">
                        <img src= {githubLink} alt="logo-github"/>
                    </a>
                </div>

                <div className="instaLink">
                    <a href="https://www.instagram.com/jlaunay" target="_blank" rel="noopener noreferrer">
                        <img src= {instaLink} alt="logo-instagram"/>
                    </a>
                </div>

                <div className="linkedinLink">
                    <a href="https://www.linkedin.com/in/justine-launay/" target="_blank" rel="noopener noreferrer">
                        <img src= {linkedinLink} alt="logo-linkedin"/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default banner