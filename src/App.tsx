import './App.css'
import Header from "./header.tsx";
import Footer from "./footer.tsx";
import MainContent from "./content.tsx";

function App() {


    return (
        <>
            <div id="header">
                <Header />
            </div>
            <div id="main">
                <MainContent />
            </div>
            <div id="footer">
                <Footer />
            </div>
        </>
    )
}

export default App
