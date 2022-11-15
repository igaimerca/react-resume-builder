import Page from "./components/Page/Page"
import jsonData from "./assets/resume.json"

function App() {

    return (
            <>
            <Page jsonData={jsonData} />
            </>
    )
}

export default App
