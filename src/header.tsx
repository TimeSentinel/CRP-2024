import About from './about';
import {createRoot} from "react-dom/client";
import {StrictMode} from "react";
import MainContent from "./content.tsx";
// import Gallery from "./gallery";
import Contact from "./contact.tsx";

function Header() {
    const homeClass = document.getElementById('btnHome') as HTMLInputElement
    const aboutClass = document.getElementById('btnAbout') as HTMLInputElement
    // const galleryClass = document.getElementById('btnGallery') as HTMLInputElement
    const contactClass = document.getElementById('btnContact') as HTMLInputElement

    function clickHome(data: string) {
        let codePlay;
        switch (data) {
            case 'home':
                codePlay = <MainContent/>;
                homeClass.className = "buttonLeft currentBtn";
                aboutClass.className = "buttonRight ";
                // galleryClass.className = "buttonLeft ";
                contactClass.className = "buttonRight ";
                break;
            case 'about':
                codePlay = <About/>;
                homeClass.className = "buttonLeft ";
                aboutClass.className = "buttonRight currentBtn";
                // galleryClass.className = "buttonLeft ";
                contactClass.className = "buttonRight ";
                break;
            // case 'gallery':
            //     codePlay = <Gallery/>;
            //     homeClass.className = "buttonLeft";
            //     aboutClass.className = "buttonRight ";
            //     galleryClass.className = "buttonLeft currentBtn";
            //     contactClass.className = "buttonRight ";
            //     break;
            case 'contact':
                codePlay = <Contact/>;
                homeClass.className = "buttonLeft";
                aboutClass.className = "buttonRight ";
                // galleryClass.className = "buttonLeft ";
                contactClass.className = "buttonRight currentBtn";
                break;
            default:
                codePlay = <MainContent/>
        }
        return (
            createRoot(document.getElementById('main')!).render(
                <StrictMode>
                    {codePlay}
                </StrictMode>,
            )
        )
    }

    return (
        <>
            <div className="header-container">
                <div className="nav-left">
                    <div className="buttonLeftContainer">
                        <div className="buttonLeft currentBtn" id="btnHome">
                            <div className="btn" onClick={() => clickHome("home")}> HOME
                            </div>
                        </div>
                    </div>
                    <div className="buttonLeftContainer">
                        <div className="buttonLeft quietBtn" id="btnGallery">
                            <div className="btn" onClick={() => clickHome("gallery")}>TBD
                            </div>
                        </div>
                    </div>
                </div>
                <div className="nav-logo">
                    <a href="#">
                        <img src="../images/aiLogo-800.png" alt="CNC Router Pro's logo" className="logo"/>
                    </a>
                </div>
                <div className="nav-right">
                    <div className="hamburger-menu">

                    </div>
                    <div className="buttonRightContainer">
                        <div className="buttonRight" id="btnAbout">
                            <div className="btn" onClick={() => clickHome("about")}>ABOUT
                            </div>
                        </div>
                    </div>
                    <div className="buttonRightContainer">
                        <div className="buttonRight" id="btnContact">
                            <div className="btn" onClick={() => clickHome("contact")}>CONTACT
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;
