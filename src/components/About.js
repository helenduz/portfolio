import './About.css';

const About = () => {
    return (
        <div className="about-main">
            <div className="about-image">
                <img src="/aboutImage.png"></img>
            </div>
            <div className="about-content">
                <div className="about-text">
                    <h1>
                        Hi there! This is <span className='about-name'>Anonymous -</span>
                    </h1>
                    <br />
                    <h2>
                        A CS student who is passionate about software engineering.  
                    </h2>
                    <p>
                        I am currently working towards my Master's degree in Computer Science at Brown University. My past experience is a somewhat chaotic amalgam of software engineering, data engineering, and physics research. Coming from a liberal arts background, I am always intrigued by interdisciplinary challenges and believe that software engineering has the power to solve problems in unconventional ways!
                    </p>
                </div>
                <div className="about-contacts">
                    <div>
                        <a href="">
                            <span type='button' className='btn btn--outline'>
                            Resume
                            </span>
                        </a>
                    </div>
                    <div className="about-contacts-icon">
                        <a href="https://github.com/" className="link link--icon">
                            <div><i class="fa-brands fa-github fa-2xl"></i></div>
                        </a>
                    </div>
                    <div className="about-contacts-icon">
                        <a href="https://www.linkedin.com/" className='link link--icon'>
                            <div><i class="fa-brands fa-linkedin fa-2xl"></i></div>
                        </a>
                    </div>
                </div>
            </div>
        </div>        
    );
};


export default About;