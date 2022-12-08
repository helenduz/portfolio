import './Iterative.css';
import Carousel from 'react-bootstrap/Carousel';

const OverviewCard = () => {
    return (
        <div className='overview-card'>
            <div className='overview-card-item'>
                <h3> My Role</h3>
                <p>Designer</p>
                <p>UX Researcher</p>
            </div>
            <div className='overview-card-item'>
                <h3>Timeline</h3>
                <p>November 2022</p><p>(2 weeks)</p>
            </div>
            <div className='overview-card-item'>
                <h3>Team</h3>
                <p>4 Designers/UX Researchers</p>
            </div>
            <div className='overview-card-item'>
                <h3>Tools</h3>
                <p>Figma</p><p>Balsalmiq</p>
            </div>
    </div>
    );
};

const Iterative = () => {
    return (
       <div>
            <div className='title-section'>
                <div className='title'>
                    <h1>Iterative Design:</h1><h1>AeonCharge UI</h1>
                </div>
                <div>
                    <h3 className='summary'>Designing a UI for the emerging startup AeonCharge</h3>
                </div> 
            </div>

            
            <div className='project-section-container'>
                <OverviewCard />
                <div id='overview' className='project-section'>
                    <h3>
                        Project Overview
                    </h3>
                    <p>This is a project from CS1300 UIUX at Brown University. We went through the full process of mocking up a solution to a startup concept, including sketching, wireframing in Balsalmiq, and prototyping in Figma. We iteratively improved our design incorporating feedback from peer critiques and user testing.</p>
                </div>
            </div>

            <div className='bg-light project-section-container'>
                <div className='project-section'>
                    <div className='project-section-title'>
                        <h3>
                            Problem & Background
                        </h3>
                    </div>
                    <p>We were given a list of startup concepts from YCombinator and were asked to design from scratch a UI for one of them. The goal is to make interfaces to solve the same problem the startup is trying to solve, without looking at anything they have already built! AeonCharge, a mobile app that allows EV drivers to seamlessly locate, activate, and pay for charging sessions across various providers in the United States through a single platform, stood out to our team. How can we create an intuitive, usable UI for an EV charging app?</p>
                    <div className='img-container'>
                        <img src='/pages-assets/iterative/ac-icon.png'></img>
                    </div>
                </div>
            </div>

            <div className='project-section-container'>
                <div className='project-section'>
                    <div className='project-section-title'>
                        <h3>
                            Ideation
                        </h3>
                    </div>
                    <p>
                        Before we began desigining, we asked ourselves what are the most crucial functionalities that the AeonCharge app should have. Apart from the <span className='text-emphasis'>'locate, activate, pay'</span> core workflow, we also noticed that AeonCharge was founded on the frustration in the EV drivers community that different charging networks have different platforms for activating and paying - you need to switch between apps to look for a station and finish the charging operations, as well as manage a bunch of different accounts and membership discounts. Therefore, our core objective is to make sure that the different networks are well integrated into one coherent platform.</p>
                    <p>
                        After forming a concensus on the core objective and functionalities, we individually brainstormed a set of screens that we think are important to the app, and sketched our ideas on paper:
                    </p>

                    {/* <Carousel slide={false}>
                        <Carousel.Item className='carousel-item'>
                        <img
                            className='carousel-image'
                            src='/pages-assets/iterative/s_1-1.jpg'
                        />
                        </Carousel.Item>
                        <Carousel.Item>
                        <img
                            className='carousel-image'
                            src='/pages-assets/iterative/s_1-2.jpg'
                        />
                        </Carousel.Item>
                        <Carousel.Item>
                        <img
                            className='carousel-image'
                            src='/pages-assets/iterative/s_1-3.jpg'
                        />
                        </Carousel.Item>
                    </Carousel> */}

                    
                </div>
            </div>

            <div className='bg-emphasis project-section-container'>
                <p>Takeaways</p>
            </div>
            
       </div>
    );
};

export default Iterative;







function NoTransitionExample() {
    return (
      <Carousel slide={false}>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='/pages-assets/iterative/s_1-1.jpg'
            alt='First slide'
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='holder.js/800x400?text=Second slide&bg=282c34'
            alt='Second slide'
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='holder.js/800x400?text=Third slide&bg=20232a'
            alt='Third slide'
          />
        </Carousel.Item>
      </Carousel>
    );
  }