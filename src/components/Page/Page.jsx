import { useState } from "react";

function Page({ jsonData }) {
    if (!jsonData) return <h1>No data fetched! </h1>
    const [data, setData] = useState(jsonData)
    const handleChange = (e) => {
        let value = e.target.innerHTML;
        let name = e.target.name;

        console.log(value, name);
    }

    const removeJob = () => {

    }
    const addJob = () => {
       
    }

return (
    <div id="resume-container">
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

        <main id="main-container">
            <div>
                <div>
                    <div>
                        <div className="title">
                            <h2>Objective</h2>
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
                                        <li className="remove" onClick={removeJob}>
                                            -
                                        </li>
                                        {index == data.experience.length - 1 ? <li className="add" onClick={addJob}>+</li> : ""}

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

        {/* <div id="footer">
            <p>{data.firstName + " " + data.lastName} &mdash; <a href="mailto:name@yourdomain.com">{data.email}</a> &mdash; (250) 790 888 345</p>
        </div> */}

    </div>
)
}

export default Page