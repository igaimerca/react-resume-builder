import React from 'react'

function Page() {
    return (
        <div id="resume-container">
            <header id="header">
                <div>
                    <div className="title">
                        <h1>Jonathan Doe</h1>
                        <h3>Software Engineer</h3>
                    </div>

                    <div>
                        <div className="contact-info">
                            <p>
                                <b>Email: </b><a href="mailto:name@yourdomain.com">name@yourdomain.com</a></p>
                            <p><b>Phone: </b> <a href="tel:+123-456-7890">(250) 790 888 345</a> </p>
                            <p><b>Twitter: </b> <a href="https://twitter.com/elonmusk">https://twitter.com/elonmus</a> </p> <p><b>Facebook: </b> <a href="https://twitter.com/elonmusk">https://twitter.com/elonmusk</a> </p>
                            <p><b>LinkedIn: </b> <a href="https://linkedin.com/in/elonmusk">https://linkedin.com/in/elonmusk</a> </p>

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
                                    Progressively evolve cross-platform ideas before impactful infomediaries. Energistically visualize tactical initiatives before cross-media catalysts for change.
                                </p>
                            </div>
                        </div>
                        <div>
                            <div className="title">
                                <h2>Experience</h2>
                            </div>

                            <div>

                                <div className="job last">
                                    <h3 className='company'>Facebook</h3>
                                    <div className="job-desc">
                                        <p className='position'>Senior Interface Designer</p>
                                        <p className='timeline'>2005-2007</p>
                                    </div>
                                    <p>Intrinsicly enable optimal core competencies through corporate relationships. Phosfluorescently implement worldwide vortals and client-focused imperatives. Conveniently initiate virtual paradigms and top-line convergence. </p>
                                </div>

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