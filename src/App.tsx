import './App.css'
import Header from "./header.tsx";
import Footer from "./footer.tsx";
import MainContent from "./content.tsx";
import Hamburger from "./hamburger.tsx";


function App() {

    return (
        <>
            <div id="header">
                <Header/>
            </div>
            <div id="hamburger" className="show">
                <Hamburger />
            </div>
            <div id="main">
                <MainContent/>
            </div>
            <div id="footer">
                <Footer/>
            </div>
        </>
    )
}

export default App
