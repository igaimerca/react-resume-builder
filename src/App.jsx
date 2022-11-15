import { useState, useEffect } from "react"
import Page from "./components/Page/Page"

function App() {
    const [data, setData] = useState({})

    const getData = () => {
        console.log("yyy");
        fetch('resume.json'
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
    }, [data])


    return (
        <>
            <Page jsonData={data} />
        </>
    )
}

export default App
