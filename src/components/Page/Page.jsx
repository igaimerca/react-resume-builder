import { useState } from "react";

function Page({ jsonData }) {
    const [data, setData] = useState(jsonData);
    if (!data) return <p>No data found!</p>
    return (
        <div id="resume-container">
            <header id="header">
                <div>
                    <div className="title">
                        <h1>{data.firstName + " " + data.lastName}</h1>
                        <h3>{data.position}</h3>
                    </div>

                    <div>
                        <div className="contact-info">
                            {data.social_links?.map((social, i) => (
                            <p key={i}>
                                <b>{social.title}: </b><a href={social.link}>{social.link}</a></p>
                            ))}
                        </div>
                    </div>
                </div>
            </header>

            <main id="main-container">
                <div>{data.firstName + " " + data.lastName}
                    <div>

                        <div>
                            <div className="title">
                                <h2>Objective</h2>
                            </div>
                            <div>
                                <p className="enlarge">
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
                                    <div className="job last" key={index}>
                                        <h3 className='company'>{exp.company}</h3>
                                        <div className="job-desc">
                                            <p className='position'>{exp.position}</p>
                                            <p className='timeline'>{exp.startDate} &mdash; {exp.endDate}</p>
                                        </div>
                                        <p>{exp.description} </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </main>

            <div id="footer">
                <p>{data.firstName + " " + data.lastName} &mdash; <a href="mailto:name@yourdomain.com">{data.email}</a> &mdash; (250) 790 888 345</p>
            </div>

        </div>
    )
}

export default Page