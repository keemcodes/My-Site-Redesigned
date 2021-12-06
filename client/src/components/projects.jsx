import  {useEffect, useState} from 'react';
import TimelineContainer from './timeline-container';
import ReactHtmlParser from 'react-html-parser';


function Projects({forwardRef, inView}) {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch("/api/projects")
            .then((res) => res.json())
            .then((result) => {
                setProjects(result)
                // console.log(result)
            },
            (error) => {
                console.log(error)
            })
            // .catch((r) =>
        
    }, [])
    return ( 
        <>
            <section id='projects' className={`fade-in-section ${inView ? 'is-visible' : ''}`} ref={forwardRef}>
                <div className="heading-title">
                    <h1>Projects</h1>
                </div>
                <div className="outter-timeline">
                    <div className="timeline">
                        {projects.map(project => (
                            <TimelineContainer 
                                key={project.id}
                                date={project.date}
                                title={project.title}
                                body={ReactHtmlParser(project.body)}
                                langs={project.langs.map(language => language.lang)}
                                github={project.github}
                                external={project.external}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </>  
    );
}

export default Projects;