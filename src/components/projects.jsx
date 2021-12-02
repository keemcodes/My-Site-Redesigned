import React from 'react';
import TimelineContainer from './timeline-container';

function Projects({forwardRef, inView}) {
    return ( 
        <>
            <section id='projects' className={`fade-in-section ${inView ? 'is-visible' : ''}`} ref={forwardRef}>
                <div className="heading-title">
                    <h1>Projects</h1>
                </div>
                <div className="outter-timeline">
                    <div className="timeline">
                        <TimelineContainer 
                            date='Oct. 2021'
                            title='Portfolio Site Redesign'
                            body={<p>Asynchronously load in data via frontend get request to backend. Content is rendered in as an endless scroll that switches between "pages" as a user scrolls. Next page is always preloaded to insure fast loading speed and improve user experience.</p>}
                            langs={['React', 'JS', 'Node JS']}
                            github="https://github.com/keemcodes/My-Site-Redesigned"
                            external="https://github.com/keemcodes/My-Site-Redesigned"
                        />
                        <TimelineContainer 
                            date='July 2021'
                            title='Employee Initiatives App'
                            body={<p>Built a high utilization application supporting over <b>50,000 internal enterprise users</b> in submitting weekly initaitives and requesting co-worker support. Application integrates Microsoft Active Directory to offer SSO to our internal users.</p>}
                            langs={['PHP', 'JS']}
                            github="https://github.com/keemcodes/Employee-Initiatives-App-Official-Changelog"
                            external="https://github.com/keemcodes/Employee-Initiatives-App-Official-Changelog"
                        />
                        <TimelineContainer 
                            date='June 2020'
                            title='Press Releases API'
                            body={<p>Press Release data provided via API is ingested and parsed into a <b>readable HTML format</b>.</p>}
                            langs={['PHP', 'JS']}
                            github='https://github.com/keemcodes/Press-Releases'
                            external='https://github.com/keemcodes/Press-Releases'
                        />                        
                        <TimelineContainer 
                            date='Mar. 2020'
                            title='Security Wait Times App'
                            body={<p>Integrates proprietary API to consume <b>motion sensor data</b> for customer wait time calculation. Application features include web page integration for public view, web admin panel for manual input and closing / opening of different checkpoints, and email notifications of API status.</p>}
                            langs={['PHP', 'JS']}
                            github='https://github.com/keemcodes/Security-Wait-Times-Public-Readme'
                            external='https://github.com/keemcodes/Security-Wait-Times-Public-Readme'
                        />
                        <TimelineContainer 
                            date='Feb. 2020'
                            title='ASP.NET to PHP Code Migration'
                            body={<p>Creating content management API to migrate proprietary ASP.NET interactive pages to PHP web standard.</p>}
                            langs={['ASP.NET', 'PHP', 'JS']}
                            github='https://github.com/keemcodes/ASP.NET-to-PHP-Code-Migration'
                            external='https://github.com/keemcodes/ASP.NET-to-PHP-Code-Migration'
                        />
                        <TimelineContainer 
                            date='Feb. 2019'
                            title='Internet Relay Chat Bot'
                            body={<p>Developed an Interactive mSL IRC chatbox known as KeemBot. integrates Twitch chat and tracks user interactions for rewards and prizes.</p>}
                            langs={['mSL (mIRC)']}
                            github='https://github.com/keemcodes/keemBot'
                            external='https://github.com/keemcodes/keemBot'
                        />
                        <TimelineContainer 
                            date='Jun. 2016'
                            title='Image Search Autohotkey'
                            body={<p>Game focused automation using AutoHotkey Image Search. Custom API for user customizability.</p>}
                            langs={['AutoHotkey']}
                            github='https://github.com/keemcodes/Mabinogi-MA-Bot'
                            external='https://github.com/keemcodes/Mabinogi-MA-Bot'
                        />
                        <TimelineContainer 
                            date='Jan. 2014'
                            title='SprunkGuard Detection (SA:MP)'
                            body={<p>Exploit detection code concept and implementation for a 3rd party invincibility hack/modification known as SprunkGuard. Code concept for detection was officially released to combat widespread use and is now utilized in thousands of SA:MP game server deployments.</p>}
                            langs={['Pawn']}
                            github='https://github.com/keemcodes/SprunkGuard-Detection'
                            external='https://github.com/keemcodes/SprunkGuard-Detection'
                        />
                        <TimelineContainer 
                            date='Oct. 2013'
                            title='Police Taser (SA:MP)'
                            body={<p>Custom full featured and interactive police taser. This feature was a redesign of previous command based taser feature. Redesign also includes embedding of roleplay rules as system features.</p>}
                            langs={['Pawn']}
                            github='https://github.com/keemcodes/Anti-Rush-Taze'
                            external='https://github.com/keemcodes/Anti-Rush-Taze'
                        />
                        <TimelineContainer 
                            date='Oct. 2012'
                            title='Player Property API (SA:MP)'
                            body={<p>Creating a custom personalized property system for managing the ownership of homes, businesses, vehicles and misc. objects. Utilizing the in-game purchase business model, this system created the initial revenue for the game server.</p>}
                            langs={['Pawn']}
                            github='https://github.com/keemcodes/Evolution-Roleplay'
                            external='https://github.com/keemcodes/Evolution-Roleplay'
                        />

                    </div>
                </div>
            </section>
        </>  
    );
}

export default Projects;