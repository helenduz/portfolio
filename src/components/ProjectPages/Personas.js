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
                        what are your goals
                        introduce the interface
                    </p>
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
                        what did you do (interview, observation), what were your considerations when coming up with interview questions (see slides)
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
                    <p>
                        showcase your personas and storyboards
                    </p>
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
                        how to conduct good user research (see slides)
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Personas;