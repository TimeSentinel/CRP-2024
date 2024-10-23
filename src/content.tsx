import BtnQuote from "./btnQuote.tsx";

function MainContent() {
// home page content
    return (
        <>
            <div className="homeContent">
                <h1>Welcome to CNC Router Pros</h1>
                <h2>Wood CNC projects.</h2>
                <p>
                    We design and manufacture various custom wood pieces. Send us your design, cad file, or describe an
                    idea and we will do the rest. <br/><br/>
                    Our experts can work with various materials and tooling. <br/><br/>
                    Contact us now for a free quote!
                </p>
                <BtnQuote />
            </div>
        </>
    )
}

export default MainContent;

/*
    todo: add introduction text
    todo: get quote button (call to action)
 */