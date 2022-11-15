function Page({ jsonData }) {
    if (!jsonData.length) return <p>No jsonData found!</p>
    return (
        <div id="resume-container">
            <header id="header">
                <div>
                    <div className="title">
                        <h1 contenteditable="true">{jsonData.firstName + " " + jsonData.lastName}</h1>
                        <h3 contenteditable="true">{jsonData.position}</h3>
                    </div>

                    <div>
                        <div className="contact-info">
                            {jsonData.social_links?.map((social, i) => (
                            <p contenteditable="true" key={i}>
                                <b>{social.title}: </b><a href={social.link}>{social.link}</a></p>
                            ))}
                        </div>
                    </div>
                </div>
            </header>

            <main id="main-container">
                <div>{jsonData.firstName + " " + jsonData.lastName}
                    <div>

                        <div>
                            <div className="title">
                                <h2>Objective</h2>
                            </div>
                            <div>
                                <p className="enlarge">
                                    {jsonData.objective}
                                </p>
                            </div>
                        </div>
                        <div>
                            <div className="title">
                                <h2>Experience</h2>
                            </div>

                            <div>
                                {jsonData.experience.map((exp, index) => (
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
                <p>{jsonData.firstName + " " + jsonData.lastName} &mdash; <a href="mailto:name@yourdomain.com">{jsonData.email}</a> &mdash; (250) 790 888 345</p>
            </div>

        </div>
    )
}

export default Page