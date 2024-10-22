function Header() {

    return (
        <>
            <div className="header-container">

                <div className="nav-left">
                    <div className="buttonLeftContainer">
                        <div className="buttonLeft">
                            HOME
                        </div>
                    </div>
                    <div className="buttonLeftContainer">
                        <div className="buttonLeft">
                            TBD
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
                        <div className="buttonRight">
                            ABOUT
                        </div>
                    </div>
                    <div className="buttonRightContainer">
                        <div className="buttonRight">
                            CONTACT
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;
