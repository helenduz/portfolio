import './Redesign.css';

const OverviewCard = () => {
    return (
        <div className='overview-card'>
            <div className='overview-card-item'>
                <h3> My Role</h3>
                <p>Designer</p>
                <p>Front-end Developer</p>
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
                <p>Figma</p><p>Balsalmiq</p><p>HTML/CSS</p><p>Bootstrap</p>
            </div>
    </div>
    );
};

const Redesign = () => {
    return (
       <div>
            <div className='title-section'>
                <div className='title'>
                    <h1>Responsive Redesign:</h1><h1>APS Publications Page</h1>
                </div>
                <div>
                    <h3 className='summary'>Redesigning a Webpage for Better Usability and Responsiveness</h3>
                </div> 
            </div>

            
            <div className='project-section-container'>
                <OverviewCard />
                <div id='overview' className='project-section'>
                    <h3>
                        Project Overview
                    </h3>
                    <p>This is a project from CS1300 UIUX at Brown University. The goal of this project was to practice redesigning a website for better usability and responsiveness. The process involves analyzing problems in a public UI, creating low-fidelity and high-fidelity prototypes for different screen sizes, and using HTML/CSS to code up a website based on the prototypes.</p>
                </div>
            </div>

            <div className='bg-light project-section-container'>
                <div className='project-section'>
                    <div className='project-section-title'>
                        <h3>
                            Problem & Background
                        </h3>
                    </div>
                    <p>For this project, I decided to redesign the <a href='https://aps.org/publications/index.cfm' className='in-text-link'>publications</a> page for the American Physical Society (APS). This page lists out the publications (journals, magazines, etc.) that APS hosts. As a former physics major, I frequently used this page as a reference when I had to dig through physics literature. I still remember feeling dazzled by the jarring use of random colors in the journals section when I first visited the site. There were also a few other perplexing elements that I never had the chance to closely analyze - well, here we are!</p>
                    <div className='img-container'>
                        <img src={process.env.PUBLIC_URL + '/pages-assets/redesign/aps-logo.svg'}></img>
                    </div>
                    <p>
                        <span className='text-bold'>Note:</span> APS actually went through a website upgrade while I was doing this project! While my project is based on their old page, which can be referenced <a href='https://web.archive.org/web/20220904180253/https://aps.org/publications/index.cfm' className='in-text-link'>here</a> (hosted by WayBackMachine), I also tried to incorporate their new styles into my redesign. It is interesting to see how different our designs turn out to be!
                    </p>
                </div>
            </div>

            <div className='project-section-container'>
                <div className='project-section'>
                    <div className='project-section-title'>
                        <h3>
                            Analyzing Usability Problems
                        </h3>
                    </div>
                    <p>
                        Usability is a term that describes how easily or effectively a user can accomplish tasks on an interface. While this is a broad term that encompasses a number of goals, there are three main aspects to consider:
                        <ul className='text-list'>
                            <li><span className='text-bold'>Learnability: </span>Can new users quickly learn how to use the UI?</li>
                            <li><span className='text-bold'>Memorability: </span>How well can occasional users recall how to use the UI? </li>
                            <li><span className='text-bold'>Efficiency: </span>Are frequent users able to perform the tasks they want efficiently?</li>
                        </ul>
                    </p>
                    <p>
                        While there are tradeoffs between these three dimensions, our interface design should still take all of them into consideration. Keeping these ideas in mind, I noted down my thoughts on the APS pubclications page below:
                    </p> 
                    <div>
                        <img className='full-width-img' src={process.env.PUBLIC_URL + '/pages-assets/redesign/usability.png'}></img>
                    </div>
                    <p>
                        The main frustration I had about the website can be summarized in three main points:
                        <ul className='text-list'>
                            <li><span className='text-bold'>Poor use of visual hierarchy: </span>For example, dissimilar items are grouped together (in terms of spatial proximity and visual similarity), and the use of font sizes is not appropriate to the importance of the text.</li>
                            <li><span className='text-bold'>Lack of affordances: </span>Affordance means how well the interface reveals to the user its possible usage. The use of colorful buttons seems quite distracting and does not correspond to the natural feeling of a paper journal.</li>
                            <li><span className='text-bold'>Unappealing styles: </span>The overall design of this page looks rather antique!</li>
                        </ul>
                    </p>                                      
                </div>
            </div>

            <div className='project-section-container bg-light'>
                <div className='project-section'>
                    <div className='project-section-title'>
                        <h3>
                            Accessibility
                        </h3>
                    </div>
                    <p>
                        After identifying usability problems, I used the WebAIM WAVE tool to detect accessibility issues of the original website. The main findings are summarized below:
                        <ul className='text-list'>
                            <li>A <span className='text-bold'>redundant link</span> glitch is present under the "Physics Review Journals" section</li>
                            <li>There are a few missing <span className='text-bold'>alternative texts</span> for icons, and the search bar is unlabelled</li>
                            <li><span className='text-bold'>Contrast errors</span> are reported for the grey dividing lines on white or blue background</li>
                        </ul>
                    </p>
                    <div>
                        <img className='full-width-img' src={process.env.PUBLIC_URL + '/pages-assets/redesign/wave-report.png'} style={{width: "70%"}}></img>
                    </div>                                   
                </div>
            </div>

            <div className='project-section-container'>
                <div className='project-section'>
                    <div className='project-section-title'>
                        <h3>
                            Visual Redesign
                        </h3>
                    </div>
                    <div className='project-section-title subtitle-1'>
                        <p>Low-Fidelity Wireframes</p>
                    </div>
                    <p>
                        To address the usability problems I found, I started by creating low-fidelity wireframes that allow me to get a general idea of the flow of the page, especially how to improve the layout of items. A few highlights of my redesign are:
                        <ul className='text-list'>
                            <li><span className='text-bold'>Improving visual hierarchy: </span> Sections are regrouped to encourage better navigability and organization, and contrast between headings and content is enhanced for ease of reading </li>
                            <li><span className='text-bold'>Adding affordances: </span> Images are added to mimic feeling of looking at a bookshelf</li>
                            <li><span className='text-bold'>Styling upgrade: </span>Fonts, colors, and components are improved to look more modern, and redudant or confusing placements of items are removed</li>
                        </ul>
                        <br></br>
                        Here are the wireframes I developed for Desktop, Tablet, and Mobile:
                    </p>
                    <div>
                        <img className='full-width-img' src={process.env.PUBLIC_URL + '/pages-assets/redesign/lofi-1.png'}></img>
                        <img className='full-width-img' src={process.env.PUBLIC_URL + '/pages-assets/redesign/lofi-2.png'}></img>
                    </div>

                    <div className='project-section-title subtitle-1'>
                        <p>Visual design style guide</p>
                    </div>
                    <p>I then created a visual design style guide to capture the colors, typography, and states of components I expect to use in the interface on Figma. This is helpful for separating my design thinking from the actually development process, as well as encouraging consistent visuals across the page.</p>
                    <img className='full-width-img' src={process.env.PUBLIC_URL + '/pages-assets/redesign/guide.png'} style={{width: "70%"}}></img>

                    <div className='project-section-title subtitle-1'>
                        <p>High-Fidelity prototypes</p>
                    </div>
                    <p>Next, by combining the layout ideas I developed in my low-fidelity wireframes and the visual design style guide, I created high-fidelity prototypes in Figma. As I was developing the prototypes, I also strategized on how to achieve the layout and visuals in HTML/CSS, as well as how to make the website responsive.
                    </p>
                    <p>
                    Here are my high-fidelity prototypes with annotations on elements used, state changes, as well as key layout choices for handling responsiveness:
                    </p>
                    <img className='full-width-img' src={process.env.PUBLIC_URL + '/pages-assets/redesign/hifi-1.png'}></img>
                    <img className='full-width-img' src={process.env.PUBLIC_URL + '/pages-assets/redesign/hifi-2.png'}></img>
                    <p>
                        <span className='text-bold'>Note:</span> The footer is just an image I screenshot from the original website after they upgraded their UI, because it fits in quite nicely with my design!
                    </p>
                </div>
            </div>


            <div className='project-section-container bg-light'>
                <div className='project-section'>
                    <div className='project-section-title'>
                        <h3>
                            Redesign Product & Afterthoughts
                        </h3>
                    </div>
                    <p>
                        Finally, I created the <a href="https://nostalgicalpaca202.github.io/redesign" className='in-text-link'>responsive website</a> according to my high-fidelity prototypes. Since we were limited to only HTML and CSS libraries in this project, some interative elements are not implemented, such as the expanded hamburger menu. Throughout this project, I have learned how to always keep responsiveness in mind when designing websites, as well as applying usability principles I learned in class to real-world designs. Here are a few things that I am hoping to expand on or finish implementing later:
                        <ul className='text-list'>
                            <li>Make font sizes more responsive - currently, the content in the top pane gets really crowded once we are near the md breakpoint (before the navigation bar, search bar, and other buttons get minimized to the hamburger menu), and overflow/clipping happens</li>
                            <li>Change the accordion's color to match the theme colors - this requires changing SaSS variables in Bootstrap</li>
                            <li>Implement the footer and expansion of hamburger menu!</li>
                        </ul>
                    </p>
                    <div>
                        <img className='full-width-img' src={process.env.PUBLIC_URL + '/pages-assets/redesign/preview.png'}></img>
                    </div>                                   
                </div>
            </div>
       </div>
    );
};

export default Redesign;