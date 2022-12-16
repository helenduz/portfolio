import './Personas.css';

const OverviewCard = () => {
    return (
        <div className='overview-card'>
            <div className='overview-card-item'>
                <h3> My Role</h3>
                <p>UX Researcher</p>
            </div>
            <div className='overview-card-item'>
                <h3>Timeline</h3>
                <p>October 2022</p><p>(2 weeks)</p>
            </div>
            <div className='overview-card-item'>
                <h3>Team</h3>
                <p>Individual</p>
            </div>
            <div className='overview-card-item'>
                <h3>Tools</h3>
                <p>N/A</p>
            </div>
    </div>
    );
};

const Personas = () => {
    return (
       <div>
            <div className='title-section'>
                <div className='title'>
                    <h1>Personas and Storyboarding:</h1><h1>Ordering Kiosk Interface</h1>
                </div>
                <div>
                    <h3 className='summary'>User Research on a Snackpass Food Ordering Interface</h3>
                </div> 
            </div>

            
            <div className='project-section-container'>
                <OverviewCard />
                <div id='overview' className='project-section'>
                    <h3>
                        Project Overview
                    </h3>
                    <p>This is a project from CS1300 UIUX at Brown University. The goal of this project was to practice the classic UX research workflow: observe real users interacting with an interface, interview these individuals about their experiences, create personas based on these users, and illustrate a storyboard for the personas. How do you step into a user's shoes? This was the first project that got me started in thinking about usability! </p>
                </div>
            </div>

            <div className='bg-light project-section-container'>
                <div className='project-section'>
                    <div className='project-section-title'>
                        <h3>
                            Problem & Background
                        </h3>
                    </div>
                    <p>
                        Stepping into the users' shoes is not an easy task for designers. You can't let your design decisions rely on your imagination or the technical logic of your implementation - you can't meet the needs of your users if you don't collect and analyze data about <span className='text-emphasis'>WHY</span> they do <span className='text-emphasis'>WHAT</span> they do. UX Research is a field that incorporates psychology, behavioral science, etc., and useful methodologies have been developed over the years that help us better understand our users. In this project, our goal is to practice some of those methodologies, such as creating a Persona!
                        
                        <div className='project-section-title subtitle-1'>
                            <p>What are personas, and why are they important?</p>
                        </div>
                        <p>
                            Personas are archetypical but detailed profiles of your users - they have goals and tasks that represent the needs of a large grouo of users. Here are a few reasons why they are important:
                            <ul className='text-list'>
                                <li>Helping designers share a specific, consistent understanding of the stakeholders</li>
                                <li>Resolve conflicts about how to design</li>
                                <li>Develop more empathy for the users that are represented and better predict their behaviors</li>
                            </ul>

                        </p>
                        

                        <div className='project-section-title subtitle-1'>
                            <p>The Interface</p>
                        </div>
                        <p>
                            The interface I chose to study is an ordering kiosk at Tiger Sugar, a boba shop on Thayer Street, Providence RI. The interface is delivered by Snackpass, a popular online food ordering platform.
                        </p>
                        <p>
                            The key functionality of the ordering kiosk includes menu browsing, customization of product, and payment. The interface is mounted on a big touchscreen with an attached card reader. It behaves as what you would expect from a touchscreen phone or an iPad: you can click on items, scroll, and move from one page to another.        
                        </p>
                        <p>Here is a quick sketch of what the UI looks like:
                        </p>
                    </p>
                    <div className='img-container'>
                        <img className='full-width-img' src={process.env.PUBLIC_URL + '/pages-assets/personas/interface.jpeg'} style={{width: "70%"}}></img>
                    </div>      
                </div>
            </div>

            <div className='project-section-container'>
                <div className='project-section'>
                    <div className='project-section-title'>
                        <h3>
                            Approach
                        </h3>
                    </div>
                    <p>
                        <div className='project-section-title subtitle-1'>
                            <p>Collecting Data</p>
                        </div>
                        <p>
                           The methods we used for data collection in this project is <span className='text-bold'>contextual inquiry</span>. This means that we will observe and interview people while they are interacting with an interface!  
                        </p>
                        <p>
                            I was able to observe five different users while I was comfortably sipping my own order of boba &#129483; in a corner seat at Tiger Sugar. I jotted down any objective observations I had about their behaviors, and when they are done ordering, I asked them a list of questions I have prepared in advance.
                        </p>
                        <div className='project-section-title subtitle-1'>
                            <p>Writing Questions</p>
                        </div>
                        <p>
                            An interview is a performance. Participants would always try to impress - they may act more knowledgeable, more picky, or more interesting than they really are. The challenge of writing good interview questions is to reduce the bias this might introduce to our data. A few important points I considered while drafting my research questions were
                        <ul className='text-list'>
                            <li><span className='text-bold'>Predict the answer: </span> will the answer help you create a better solution?</li>
                            <li><span className='text-bold'>Be concrete: </span>try to get at the user's behavior instead of attitude. For example, instead of asking "what do you think of this UI", ask "what's your first reaction to this" or "draw your ideal screen" or "what would you do on this screen"</li>
                        </ul>  
                        </p>
                        <p>A few examples of the questions I came up with were:
                        <ul className='text-list'>
                            <li>Which part of the interface did you spend the most time on?</li>
                            <li>Do you prefer the kiosk over the cashier, and if so, why?</li>
                            <li>Did anything confuse you? If so, what was it?</li>
                            <li>···</li>
                        </ul>  
                        </p>
                        <div className='project-section-title subtitle-1'>
                            <p>Empathy Maps and Storyboards</p>
                        </div>
                        <p>
                        Once I had my observation notes and interview responses collected, I started outlining two personas for this interface! The personas I created are based on overarching trends I observed amongst all the users you interviewed - not characteristics from a specific individual.

                        To illustrate the personas, I created empathy maps and storyboards for them.
                        <ul className='text-list'>
                            <li><span className='text-bold'>An empathy map</span> is a four-quadrant diagram, describing what users <span className='text-emphasis'>think, feel, say, and do.</span>These ideas are drawn from the data and observations I collected instead of unvalidated assumptions! In fact, ideas in different quadrants may even be contradictory - what a user says and what they do can disagree!</li>
                            <li><span className='text-bold'>A storyboard</span> depicts a persona's journey from start to end, including their goals and all the necessary steps for using the interface. A good storyboard should present authenticity, emotion, and simplicity</li>
                        </ul>
                        </p>
                    </p>
                </div>
            </div>

            <div className='bg-light project-section-container'>
                <div className='project-section'>
                    <div className='project-section-title'>
                        <h3>
                            Research Output
                        </h3>
                    </div>
                    <div className='project-section-title subtitle-1'>
                        <p>Empathy maps</p>
                    </div>
                    <div>
                        <img className='full-width-img' src={process.env.PUBLIC_URL + '/pages-assets/personas/e-1.png'}></img>
                        <img className='full-width-img' src={process.env.PUBLIC_URL + '/pages-assets/personas/e-2.png'}></img>
                    </div> 
                    <div className='project-section-title subtitle-1'>
                        <p>Storyboard</p>
                    </div>
                    <div>
                        <img className='full-width-img' src={process.env.PUBLIC_URL + '/pages-assets/personas/s-1.png'}></img>
                        <img className='full-width-img' src={process.env.PUBLIC_URL + '/pages-assets/personas/s-2.png'}></img>
                        <img className='full-width-img' src={process.env.PUBLIC_URL + '/pages-assets/personas/s-3.png'}></img>
                    </div> 
                </div>
            </div>

            <div className='project-section-container'>
                <div className='project-section'>
                    <div className='project-section-title'>
                        <h3>
                            Takeaways
                        </h3>
                    </div>
                    <p>
                        One of the key things I have learned is from this project is that personas are not perfect users! In fact, there is no perfect user at all - while the goals and characteristics we chose for a certain persona could represent a large group of users, no interface can cater the needs of every single group of users. Personas are meant to be useful and pratical devices that inform our design decisions, and there is no need to capture every single observations from your user data into one character. When do you know you have a useful persona? It's when you know how to design an interface that would be <span className='text-bold'>terrible</span> for them but completely reasonable for others!
                    </p>
                    <div className='img-container'>
                        <img className='full-width-img' src={process.env.PUBLIC_URL + '/pages-assets/personas/boba.png'} style={{width: "30%"}}></img>
                    </div>     
                </div>
            </div>
        </div>
    );
};

export default Personas;