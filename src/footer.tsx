import BtnQuote from "./btnQuote.tsx";

function Footer() {

    return (
        <>
            <div className="mainFoot">
                <div className="leftFoot">

                </div>
                <div className="centerFoot">
                    <br/>
                    <p>&copy;2024 CNC Router Pros. All Rights Reserved</p>
                </div>
                <div className="rightFoot">
                    <BtnQuote />
                </div>
            </div>
        </>
    )
}

export default Footer;
