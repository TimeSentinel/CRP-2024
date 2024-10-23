import ClickHome from "./common.tsx";

function Hamburger() {

    return (
            <div className="hamMenuContainer ">
                <div className="hbtn" onClick={() => ClickHome("home")}>HOME</div>
                <div className="hbtn quietBtnH" onClick={() => ClickHome("gallery")}>GALLERY</div>
                <div className="hbtn" onClick={() => ClickHome("about")}>ABOUT US</div>
                <div className="hbtn" onClick={() => ClickHome("contact")}>GET QUOTE</div>
            </div>
    )
}

export default Hamburger
