import About from './about';
import {createRoot} from "react-dom/client";
import {StrictMode} from "react";
import MainContent from "./content.tsx";
// import Gallery from "./gallery";
import Contact from "./contact.tsx";


function ClickHome(data: string) {
    const homeClass = document.getElementById('btnHome') as HTMLInputElement
    const aboutClass = document.getElementById('btnAbout') as HTMLInputElement
// const galleryClass = document.getElementById('btnGallery') as HTMLInputElement
    const contactClass = document.getElementById('btnContact') as HTMLInputElement
    const hamburgerDiv = document.getElementById('hamburger') as HTMLInputElement
    hamburgerDiv.className = "hidden"

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
    console.log(codePlay);
    return (
        createRoot(document.getElementById('main')!).render(
            <StrictMode>
                {codePlay}
            </StrictMode>,
        )
    )
}

export default ClickHome
