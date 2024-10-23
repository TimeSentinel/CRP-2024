import {useState} from "react";



function HamMenuShow() {
    const [isVisible, setIsVisible] = useState(true);
    const handleClick = () => {
        setIsVisible(!isVisible);
        if (isVisible) {
            const hamburgerMenu = document.getElementById('hamburger') as HTMLInputElement
            hamburgerMenu.className = "show"
        } else {
            const hamburgerMenu = document.getElementById('hamburger') as HTMLInputElement
            hamburgerMenu.className = "hidden"
        }
    }

    return (
        <div className="hamburger-menu" onClick={handleClick}>
            <div className="hamburger-bar"></div>
            <div className="hamburger-bar"></div>
            <div className="hamburger-bar"></div>
        </div>
    )
}
export default HamMenuShow;

