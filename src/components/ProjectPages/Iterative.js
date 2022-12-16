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
                        <img src={process.env.PUBLIC_URL + '/pages-assets/iterative/ac-icon.png'}></img>
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
                    <div style={{width:"70%"}}>
                        <img className='full-width-img' src={process.env.PUBLIC_URL + '/pages-assets/iterative/s-1.png'}></img>
                        <img className='full-width-img' src={process.env.PUBLIC_URL + '/pages-assets/iterative/s-2.png'}></img>
                        <img className='full-width-img' src={process.env.PUBLIC_URL + '/pages-assets/iterative/s-3.png'}></img>
                        <img className='full-width-img' src={process.env.PUBLIC_URL + '/pages-assets/iterative/s-4.png'}></img>
                    </div> 
                </div>
            </div>

            <div className='bg-emphasis project-section-container'>
                <p style={{margin: "3em"}}>
                    Here is a summary of the common themes among our sketches:
                    <ul className='text-list'>
                        <li>A home page that displays a map and locations of charging stations</li>
                        <li>Each charging station has its own page that contains relevant information</li>
                        <li>A payment page for selecting payment methods, and/or information about current order</li>
                        <li>Some dashboard page/section that allows users to access their past orders and other settings</li>
                    </ul>
                </p>
            </div>
            
            <div className='bg-light project-section-container'>
                <div className='project-section'>
                    <div className='project-section-title'>
                        <h3>
                            Mockups & Iteration
                        </h3>
                    </div>
                    <p>Afterwards, we developed low-fidelity wireframes in Balsalmiq and high-fidelity prototypes in Figma incorporating the ideas we developed from our sketches. We received feedbacks from peer critiques on our first high-fidelity prototype draft. It was interesting to see what we tend to overlook as the designers - comments were centered around two main aspects, the flow between different screens and styling problem. Some of the comments include:
                    <ul className='text-list'>
                            <li>"Confusing icons - users won't know what they are for at first sight!"</li>
                            <li>"There should be a confirmation page, or a page showing the current order, after you pay"</li>
                            <li>"Back buttons to home page exist on some screens but not others"</li>
                            <li>"There is no clear indication of how you can go back to the home page once you are at the station's info page, other than clicking on the map"</li>
                        </ul>
                    Our second iteration addressed these problems and produced a final prototype shown below. 
                    </p>
                    <iframe style={{border: "1px solid rgba(0, 0, 0, 0.1)", width:"65%", height: "600px", marginTop:"2.5em"}} src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FHgK9YGWBPvZjtFGUm1Ih4Z%2Faeoncharge%3Fnode-id%3D100%253A154%26scaling%3Dscale-down%26page-id%3D0%253A1%26starting-point-node-id%3D100%253A154" allowfullscreen></iframe>
                </div>
            </div>

            <div className='project-section-container'>
                <div className='project-section'>
                    <div className='project-section-title'>
                        <h3>
                            User Testing
                        </h3>
                    </div>
                    <div className='project-section-title subtitle-1'>
                        <p>Summary</p>
                    </div>

                    <p>We then submitted our prototypes to UserTesting.com for three different users. We found that the user experience was mostly what we expected - the general flow and appearance of our app resemble many other types of map-based apps like Uber or Google Maps, which helps the users figure out how to user the map by common sense. But there were some confusion in the beginning because the users were not familiar with interacting with Figma prototypes. In addition, users had to test our mobile app on a desktop, which can cause some confusion!

                    <div className='project-section-title subtitle-1'>
                        <p>User Feedback</p>
                    </div>

                        <p className='text-bold'>Pros</p>
                        <ul className='text-list'>
                            <li>"I like that I can find charging stations on the map very clear."</li>
                            <li>"Very clean, simple and easy to use interface. Looks professional."</li>
                            <li>"New, and offering great data."</li>
                            <li>"The personal settings interface is clear and straightforward, and the hamburger button helps a lot."</li>
                        </ul>
                        <p className='text-bold'>Cons</p>
                        <ul className='text-list'>
                            <li>"It is not clear that estimate total would work, because there is no way to determine the actual amount (but the amount depends on the time)."</li>
                            <li>"On the search page it would be nice if it could display a numeric sort on the left."</li>
                            <li>"The order in progress is not visible enough to encourage users to click"</li>
                        </ul>
                        <p className='text-bold'>Possible Improvements</p>
                        <ul className='text-list'>
                            <li>"The search results screen should display the sorted number of each charging station."</li>
                            <li>"The filter should also offer a choice of whether there is a deal or not."</li>
                            <li>"The coupon button is not obvious, try to change it to the mailbox message button and put the offer push inside, while also receiving other messages!"</li>
                            <li>"The ongoing charging button does not determine if there is an ongoing order, which is more obvious by using a small red-circled number on the side."</li>
                            <li>"Consider placing the ongoing charging in the lower left corner and the app logo in place."</li>
                            <li>"The search bar could be larger for users to use while driving."</li>
                            <li>"The pins on the map should provide thumbnail information when clicked."</li>
                        </ul>
                    </p>
                </div>
            </div>

            <div className='bg-light project-section-container'>
                 <div className='project-section'>
                    <div className='project-section-title'>
                        <h3>
                            Takeaways
                        </h3>
                    </div>
                    <p>This project helped me understand that even in a 4-person design team, you could still overlook many usability decisions of your design! Through critiques and user testing, we were able to iterate on our prototypes and keep improving our solution, which we then sent to the AeonCharge Team! (We still have not heard back from them, however :/)</p>
                 </div>
             </div>

       </div>
    );
};

export default Iterative;