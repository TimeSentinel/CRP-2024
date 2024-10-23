import ClickHome from "./common.tsx";

function Header2() {

    return (
        <>
            <div className="header-container">
                <div className="nav-logo">
                </div>
            </div>


            <div className="header-container">
                <div className="nav-left">
                    <div className="buttonLeftContainer">
                        <div className="buttonLeft currentBtn" id="btnHome">
                            <div className="btn" onClick={() => ClickHome("home")}> HOME
                            </div>
                        </div>
                    </div>
                    <div className="buttonLeftContainer">
                        <div className="buttonLeft quietBtn" id="btnGallery">
                            <div className="btn" onClick={() => ClickHome("gallery")}>TBD
                            </div>
                        </div>
                    </div>
                </div>
                <div className="nav-right">
                    <div className="buttonRightContainer">
                        <div className="buttonRight" id="btnAbout">
                            <div className="btn" onClick={() => ClickHome("about")}>ABOUT
                            </div>
                        </div>
                    </div>
                    <div className="buttonRightContainer">
                        <div className="buttonRight" id="btnContact">
                            <div className="btn" onClick={() => ClickHome("contact")}>CONTACT
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Header2;

/*
    todo: make mobile menu
    todo: side slide mobile menu with quote button :)
 */