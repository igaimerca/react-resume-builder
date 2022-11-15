import { useState, useEffect } from "react"
import Page from "./components/Page/Page"

function App() {
    const [data, setData] = useState()
    const [data2, setData2] = useState({})

    const getData = async () => {
        await fetch('resume.json'
            , {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
            .then((response) => {
                return response.json();
            })
            .then((myJson) => {
                console.log(myJson);
                setData(myJson);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    useEffect(() => {
        getData();
    }, [data2])


    return (
        <>
            {data &&
                <Page jsonData={data} />
            }
            {/* <div id="resume-container">ddd</div> */}
        </>
    )
}

export default App
