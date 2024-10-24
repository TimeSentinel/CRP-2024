import './App.css'
import Header from "./header.tsx";
import Footer from "./footer.tsx";
// import MainContent from "./content.tsx";
import Hamburger from "./hamburger.tsx";
import ClickHome from "./common.tsx" ;


function App() {

    return (
        <>
            <div id="header">
                <Header/>
            </div>
            <div id="hamburger" className="hidden">
                <Hamburger />
            </div>
            <div id="main">
                {ClickHome("home") }
                {/*<MainContent/>*/}
            </div>
            <div id="footer">
                <Footer/>
            </div>
        </>
    )
}

export default App
