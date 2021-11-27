import React from 'react';



function About({forwardRef, inView}) {
    return (
        <>
        <section id='about' ref={forwardRef} className={`fade-in-section ${inView ? 'is-visible' : ''}`}>

            <div className="heading-title">
                <h1>About Me</h1>
            </div>
            <div className="outter-about">
                <div className="section-title">
                    <h2>Hello World!</h2>

                </div>
                <div className="section-body">
                    <div className="inner-section">
                        <div className="my-photo">
                            <img src="/images/me.png" alt="" />
                        </div>
                            <p>
                                My name is Akeem and I'm a <b>Software Engineer</b> based in <b>Atlanta, GA.</b> I build highly visibility multi-platform applications. I specialize in <b>web application development</b>. 
                                <br /><br />
                                Everything I know is <b>self taught</b>. My initial interest in application development and systems sparked from a gaming hobby during in my early teens. Over the years I've worked on dozens of game, web, and mobile applications. 
                                <br /><br />
                                I'm currently employed at 
                                <b>Hartsfield Jackson International Airport</b> as a Software Engineer for cloud based systems.
                                <br /><br />
                                Here are a few languages and framework I'm proficient and/or familiar with...
                            </p>
                    </div>
                </div>
                <div className="section-languages">
                    <div className="inner-langs-left">
                        <ul>
                            <li>JAVA</li>
                            <li>C#</li>
                            <li>JAVASCRIPT</li>
                            <li>PHP</li>
                        </ul>
                    </div>
                    <div className="inner-langs-right">
                        <ul>
                            <li>REACT</li>
                            <li>ASP.NET</li>
                            <li>NODEJS & EXPRESS</li>
                            <li>SQL & NOSQL</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}
 
export default About;