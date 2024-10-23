import ClickHome from "./common.tsx";

function QuoteButton() {
// home page content
    return (
        <>
            <div className="btnQuote"  onClick={() => ClickHome("contact")}>
                Get A Quote
            </div>
        </>
    )
}

export default QuoteButton;