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
                            <p>
                                <b>Email: </b><a href="mailto:name@yourdomain.com">{data.email}</a></p>
                            <p><b>Phone: </b> <a href="tel:+123-456-7890">{data.tel}</a> </p>
                            <p><b>Twitter: </b> <a href="https://twitter.com/elonmusk">{data.social_links.facebook}</a> </p> <p><b>Facebook: </b> <a href="https://twitter.com/elonmusk">{data.social_links.twitter}</a> </p>
                            <p><b>LinkedIn: </b> <a href="https://linkedin.com/in/elonmusk">{data.social_links.linkedin}</a> </p>

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
                                    <div className="job last">
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
                <p>John Doe &mdash; <a href="mailto:name@yourdomain.com">john@gmail.com</a> &mdash; (250) 790 888 345</p>
            </div>

        </div>
    )
}

export default Page