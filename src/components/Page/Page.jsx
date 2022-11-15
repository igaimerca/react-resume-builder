function Page({ jsonData }) {
    if (!jsonData) return <h1>No data fetched! </h1>
    const handleChange = (e) => {
        let value = e.target.innerHTML;
        let name = e.target.name;

        console.log(value, name);
    }
    return (
        <div id="resume-container">
            <header id="header">
                <div>
                    <div className="title">
                        <div className="names">
                        <h1 contentEditable suppressContentEditableWarning>{jsonData.firstName}</h1>
                        <h1 contentEditable suppressContentEditableWarning>{jsonData.lastName}</h1>
                        </div>
                        <h3 contentEditable suppressContentEditableWarning>{jsonData.position}</h3>
                    </div>

                    <div>
                        <div className="contact-info">
                            {jsonData.social_links?.map((social, i) => (
                                <p contentEditable suppressContentEditableWarning key={i}>
                                    <b>{social.title}: </b><a href={social.link}>{social.link}</a></p>
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
                                <p className="enlarge" contentEditable suppressHydrationWarning onInput={handleChange}>
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
                                        <h3 className='company' contentEditable suppressHydrationWarning onInput={handleChange}>{exp.company}</h3>
                                        <div className="job-desc">
                                            <p className='position' contentEditable suppressHydrationWarning onInput={handleChange}>{exp.position}</p>
                                            <p className='timeline' contentEditable suppressHydrationWarning onInput={handleChange}>{exp.startDate} &mdash; {exp.endDate}</p>
                                        </div>
                                        <p contentEditable suppressHydrationWarning onInput={handleChange}>{exp.description} </p>
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