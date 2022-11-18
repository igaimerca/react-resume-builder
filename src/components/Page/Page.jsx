import { useState } from "react";

function Page({ jsonData }) {
    const [data, setData] = useState(jsonData)
    const handleChange = (e) => {
        let value = e.target.innerHTML;
        let name = e.target.name;

        console.log(isOverflown(el));
        if (isOverflown(el) == true) {
            let newPage = document.createElement('div')
            newPage.setAttribute('class', 'resume-container')
            main.appendChild(newPage)
        }
    }

    const removeJob = (expId) => {
        setData({...data, experience: data?.experience.filter((exp) => exp.id !== expId)})
    }
    const addJob = (expId) => {
        setData({...data, experience: [...data?.experience, {id: expId + 1, company: 'Company X', position: 'Position...', startDate: '20xx', endDate: '2xxx', description: 'What did you do there?'}]})
    }

    function isOverflown(element) {
        return element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth
    }

//     let pages = {
//         1: ["jobspacex", "jobtesla"],
//         2: ["jobtesla"]
// };

    // var els = document.getElementsByClassName('resume-container');
    // var main = document.getElementById('main-container')
    // for (var i = 0; i < els.length; i++) {
    //     var el = els[i];
    //     el.style.borderColor = (isOverflown(el) ? 'red' : 'green');
    //     if (isOverflown(el)) {


    //         let newPage = document.createElement('div')
    //         newPage.setAttribute('class', 'resume-container')
    //         main.appendChild(newPage)

    //     }
    //     console.log("Element #" + i + " is " + (isOverflown(el) ? '' : 'not ') + "overflown.");
    // }

    if (!jsonData) return <h1>No data fetched! </h1>
    return (
        <div id="main-container">
            <div className="resume-container">
                <header id="header">
                    <div>
                        <div className="title">
                            <div className="names">
                                <h1 contentEditable suppressContentEditableWarning>{data.firstName}</h1>
                                <h1 contentEditable suppressContentEditableWarning>{data.lastName}</h1>
                            </div>
                            <h3 contentEditable suppressContentEditableWarning>{data.position}</h3>
                        </div>
                        <div>
                            <div className="contact-info">
                                {data.social_links?.map((social, i) => (
                                    <p key={i}>
                                        <b>{social.title}: </b><a contentEditable suppressContentEditableWarning href={social.link}>{social.link}</a></p>
                                ))}
                            </div>
                        </div>
                    </div>
                </header>

                <main id="main-container2">
                    <div>
                        <div>
                            <div>
                                <div className="title">
                                    <h2>Profession summary</h2>
                                </div>
                                <div>
                                    <p className="enlarge" contentEditable suppressContentEditableWarning onInput={handleChange}>
                                        {data.objective}
                                    </p>
                                </div>
                            </div>
                            <div>
                                <div className="title">
                                    <h2>Experience</h2>
                                </div>

                                <div>
                                    {data.experience.map((exp, index) => (
                                        <div className="job" key={index}>
                                            <ul className="add-remove">
                                                <li className="remove" onClick={() => removeJob(exp.id)}>
                                                    -
                                                </li>
                                                {index == data.experience.length - 1 ? <li className="add" onClick={() => addJob(exp.id)}>+</li> : ""}

                                            </ul>
                                            <h3 className='company' contentEditable suppressContentEditableWarning onInput={handleChange}>{exp.company}</h3>
                                            <div className="job-desc">
                                                <p className='position' contentEditable suppressContentEditableWarning onInput={handleChange}>{exp.position}</p>
                                                <p className='timeline' contentEditable suppressContentEditableWarning onInput={handleChange}>{exp.startDate} &mdash; {exp.endDate}</p>
                                            </div>
                                            <p contentEditable suppressContentEditableWarning onInput={handleChange}>{exp.description} </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>
                </main>
                <hr />
            </div>
        </div>
    )
}

export default Page