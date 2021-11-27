import React from 'react';
import Job from './job';
function Employment({jobnames, forwardRef, inView}) {
    return ( 
        <>
            {/* <section id='employment' className={`fade-in-section ${inView ? 'is-visible' : ''}`} ref={forwardRef}> */}
            <section id='employment' className={`fade-in-section ${inView ? 'is-visible' : ''}`} ref={forwardRef}>


                <div className="heading-title">
                    <h1>Employment</h1>
                </div>
                <div className="experience-body">
                    <div className="tabs-container">
                        {jobnames.map((job, i) => {
                            i += 1;
                            return (
                                <label key={i} htmlFor={"tab" + i}>{job}</label>
                            );
                        })}
                    </div>
                    <Job 
                        tabid='tab1'
                        jobtitle='City of Atlanta'
                        body="Software Engineer for City of Atlanta's Hartsfield Jackson International Airport, the busiest airport in the world. Here I architect, design, code, and deploy applications for the airport. Project efforts aside, I've deployed robust and scalable applications for our end users and internal users."
                        langs={['C# / ASP.NET', 'PHP', 'JS']}
                    />
                    <Job 
                        tabid='tab2'
                        jobtitle='Nu Life Technologies'
                        body='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                        langs={['PHP', 'JS', 'React']}

                    />
                    <Job 
                        tabid='tab3'
                        jobtitle='Next Generation'
                        body='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                        langs={['Pawn', 'PHP', 'C#']}

                    />
                    <Job 
                        tabid='tab4'
                        jobtitle='Team-DRD'
                        body='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                        langs={['Pawn', 'PHP', 'C#']}

                    />
                </div>
            </section>
        </>
    );
}

export default Employment;