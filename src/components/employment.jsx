import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Job from './job'
// import 'react-tabs/style/react-tabs.css';
// import '../Tabs.css';


// import Job from './job';
function Employment({jobnames, forwardRef, inView}) {
    return ( 
        <>
            {/* <section id='employment' className={`fade-in-section ${inView ? 'is-visible' : ''}`} ref={forwardRef}> */}
            <section id='employment' className={`fade-in-section ${inView ? 'is-visible' : ''}`} ref={forwardRef}>


                <div className="heading-title">
                    <h1>Employment</h1>
                </div>
                <Tabs>
                    <div className="experience-body">
                        <TabList>
                        {jobnames.map((job, i) => {
                            i += 1;
                            return (
                                <Tab key={i}>{job}</Tab>
                            );
                        })}
                        </TabList>

                        <TabPanel>
                            <Job 
                                tabid='tab1'
                                jobtitle='Software Engineer'
                                jobname='City of Atlanta'
                                body="Software Engineer for City of Atlanta's Hartsfield Jackson International Airport, the busiest airport in the world. Here I architect, design, code, and deploy applications for the airport. Project efforts aside, I've deployed robust and scalable applications for our end users and internal users."
                                langs={['C# / ASP.NET', 'PHP', 'JS']}
                            />
                        </TabPanel>
                        <TabPanel>
                            <Job 
                                tabid='tab2'
                                jobtitle='Founder & Chief Engineer'
                                jobname='Nu Life Technologies'
                                body='Founder and Chief Engineer at Nu Life Technologies, a company focused on improving business digital footprints and internal efficiency by introducing task, service and resource management software. All software provided is custom built and licensed to our customers. As Chief Engineer I spearhead and oversee all code based projects. Some of our provided services include, business management software, website building and deployment, search engine optimization and more'
                                langs={['PHP', 'JS', 'React']}
                            />
                        </TabPanel>
                        <TabPanel>
                            <Job 
                                tabid='tab3'
                                jobtitle='Director of Development'
                                jobname='Next Generation Gaming'
                                body='Manage and develop game and web server applications, integrate multiple public APIs with web and game services, designing early cloud-based infrastructure. During my leadership I helped spearhead a project to refactor the main server code and implement version control to make future updates more efficient across a team of developers. Started as a Junior Developer.'
                                langs={['Pawn', 'PHP', 'C#']}
                            />
                        </TabPanel>
                        <TabPanel>
                            <Job 
                                tabid='tab4'
                                jobtitle='Scriper'
                                jobname='Team-DRD'
                                body='Investigating and patching game bugs, operating Linux web server and game server, developing IRC servers and integrating IRC chat with ingame and webpage based chats.'
                                langs={['Pawn', 'PHP', 'C#']}
                            />
                        </TabPanel>
                    </div>
                </Tabs>
            </section>
        </>
    );
}

export default Employment;