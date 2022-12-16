import './Development.css';

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
                <p>November 2022</p><p>(2 weeks)</p>
            </div>
            <div className='overview-card-item'>
                <h3>Team</h3>
                <p>Individual</p>
            </div>
            <div className='overview-card-item'>
                <h3>Tools</h3>
                <p>React</p><p>HTML/CSS</p><p>Material UI</p>
            </div>
    </div>
    );
};


const Development = () => {
    return (
        <div>
             <div className='title-section'>
                 <div className='title'>
                     <h1>Interactive Interface Development:</h1><h1>Spotify Top 100 Songs List</h1>
                 </div>
                 <div>
                     <h3 className='summary'>Developing an interactive list-based interface using React</h3>
                 </div> 
             </div>
 
             
             <div className='project-section-container'>
                 <OverviewCard />
                 <div id='overview' className='project-section'>
                     <h3>
                         Project Overview
                     </h3>
                     <p>This is a project from CS1300 UIUX at Brown University. The goal of the project is to practice developing interactive interfaces using React, especially the use of components, states, and props!</p>
                 </div>
             </div>
 
             <div className='bg-light project-section-container'>
                 <div className='project-section'>
                     <div className='project-section-title'>
                         <h3>
                             The Task
                         </h3>
                     </div>
                     <p>The crux of the assignment is a <span className='text-bold'>list</span> and an <span className='text-bold'>aggregrator</span> that is rendered on a single page.  We were asked to implement a few core functionalities that common list interfaces should have:
                        <ul className='text-list'>
                            <li>Filtering by certain categories</li>
                            <li>Sorting by certain order</li>
                            <li>Item cards, including a button that adds to/remove from the aggregator</li>
                            <li>An aggregation dashboard/section: items that are added to the aggregator should be displayed, along with the aggregation property (total time, cost, votes, etc.)</li>
                        </ul>
                    <br></br>
                    Although this seems like a trivial task, in fact many list interfaces actually share the same type of architecture! Think about a list of items for purchase in an online store and the shopping cart, or a list of recipes and a "favorites" section in a cooking app. The patterns and components used in this application can be generalized to many other interfaces with minimal changes!
                     </p>
                 </div>
             </div>

             <div className='project-section-container'>
                 <div className='project-section' style={{marginBottom: "0", paddingBottom: "0"}}>
                     <div className='project-section-title'>
                         <h3>
                             The Challenges
                         </h3>
                     </div>
                     
                     <p>                        
                        While this wasn't the first time I was introduced to React, it was the first time I had to build a React app from scratch. The difficulties I encountered could be summarized into three main dimensions:
                        <ul className='text-list'>
                            <li><span className='text-bold'>Architectural Challenges: </span>How should my application be structured? Which part of the application can I isolate into its own component? How should I oragnize my component files, stylesheets, and data in the project directory?</li>
                            <li><span className='text-bold'>React States: </span>Which states should be associated with which components? How can I pass data and callbacks around as props so that they work properly while maintaining good encapsulation?</li>
                            <li><span className='text-bold'>Styling: </span>This was my first time using Material UI and inline styling libraries! Getting used to the design thinking of Material UI (such as the type of containers available) was quite a learning curve. </li>
                            <div className='img-container'>
                                <img className='full-width-img' src={process.env.PUBLIC_URL + '/pages-assets/development/react-mui.png'}></img>
                            </div>
                        </ul>
                     </p>
                 </div>
             </div>

             <div className='bg-light project-section-container'>
                 <div className='project-section'>
                    <div className='project-section-title'>
                        <h3>
                            The Product
                        </h3>
                    </div>
                    <p>
                        The final product is linked <a href='https://nostalgicalpaca202.github.io/development-assignment/' className='in-text-link text-bold'>HERE</a>!
                    </p>
                    <div>
                        <img className='full-width-img' src={process.env.PUBLIC_URL + '/pages-assets/development/page-top.png'}></img>
                    </div>

                    <div className='project-section-title subtitle-1'>
                        <p>What can you do here?</p>
                    </div>
                    <p>
                    This application shows all songs in the Spotify playlist <a href='https://open.spotify.com/playlist/1EVE9kOZ2i4171hNdvWVhU' className='in-text-link'>TOP 100 Songs of 2022 (Best Hit Music Playlist)</a>. You are able to view more information about the songs in this application than on the Spotify playlist! For example, you can see the popularity of the song - a score calculated by Spotify's algorithm. In addition, you can sort and apply filters to the songs. This application also allows you to add and remove songs to a "playlist".
                    </p>

                    <div className='project-section-title subtitle-1'>
                        <p>How did I ensure usability?</p>
                    </div>
                    <p>
                        <ul className='text-list' style={{marginTop: "0"}}>
                            <li>To ensure easy access to the filters/sorting and the playlist aggregator, the side bar and the top bar are sticky to the side/top so that users can still quickly access them as they scroll</li>
                            <li>I used the Gestalt principles of proximity and similarity for each of the items, so that it is clear that they are part of a group!</li>
                        </ul>
                    

                    <div className='project-section-title subtitle-1'>
                        <p>How did I organize React Components, Props, and States?</p>
                    </div>
                    <br></br>
                    There are three main components in the app:
                        <ul className='text-list'>
                            <li>A side bar that contains all the buttons for sorting and filtering</li>
                            <li>A side bar that contains all the buttons for sorting and filtering</li>
                            <li>A component that contains information about each song/track, including the image, name, popularity, etc.</li>
                        </ul>

                    Here is a breakdown of the props and states of each component in a diagram:
                    </p>
                    <div style={{width: "75%"}}>
                        <img className='full-width-img' src={process.env.PUBLIC_URL + '/pages-assets/development/component-diagram.jpg'}></img>
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
                    <p>I had a lot of fun in this project! Decomposing a simple interactive interface into components based on what states they should each have can challenging. Passing data and callbacks around components in React requires a deep understanding on how the app functions and how different states relate to each other!</p>
                 </div>
             </div>
        </div>
    );    
};

export default Development;