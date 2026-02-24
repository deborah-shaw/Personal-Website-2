import Header from '../components/header.jsx'
import Nav from '../components/nav.jsx'
import Footer from '../components/footer.jsx'

function ProjUsGeographyQuiz(){

    return(
        <>
            <Header/><hr/>
            <Nav/><br/><br/>
            <div id="project">
                <a 
                    href="https://deborah-shaw.github.io/US-Geography-Quiz/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <h2 id="class-title">US Geography Quiz</h2>

                    <div style={{ 
                        width: "600px", 
                        height: "300px",      // show only this much of the image
                        overflow: "hidden",   // hide the rest
                        margin: "0 auto",     // center it
                        borderRadius: "20px"  // round corners
                    }}>
                    <img 
                        src="/Personal-Website-2/img/usgeographyquiz1.jpg" 
                        alt="US Geography Quiz Screenshot" 
                        style={{ width: "100%", height: "auto", objectFit: "cover" }} 
                        className="rounded"
                    />
                    </div>
                </a>

                <h4>🌎 Project Description</h4>
                <p> 
                    The US Geography Quiz is an interactive web application designed to help users 
                    test and improve their knowledge of United States geography. The platform 
                    includes quizzes on states, capitals, regions, landmarks, and more. It provides 
                    instant feedback, score tracking, and a user-friendly interface to make 
                    learning engaging and effective.
                </p>

                <h4>🕹️ Game Features</h4>
                <ul>
                    <li>✅ 10 diverse geography questions: multiple choice, checkboxes, and text inputs</li>
                    <li>📊 Tracks your score and attempts using local storage</li>
                    <li>🎯 Immediate feedback after each answer</li>
                    <li>🏆 Displays past scores and passing status</li>
                    <li>💬 Includes correct answers for learning</li>
                    <li>🎨 Clean, colorful UI with Bootstrap 5 styling</li>
                    <li>🔁 Shuffle-based questions to keep it fresh each time</li>
                </ul>

                <h4>🛠️ Tech Used</h4>
                <ul>
                    <li><strong>HTML5</strong> – Structuring the quiz interface</li>
                    <li><strong>CSS3</strong> – Custom styling</li>
                    <li><strong>Bootstrap 5</strong> – Responsive layout & design</li>
                    <li><strong>JavaScript</strong> – Handles quiz grading, validation, and feedback</li>
                    <li><strong>Underscore.js</strong> – For randomizing choices in some questions</li>
                    <li><strong>Local Storage</strong> – Tracks past scores and attempts</li>
                </ul>

                <h4>🎮 How to Play</h4>
                <ul>
                    <li>Answer all 10 geography questions</li>
                    <li>Click "Submit Quiz"</li>
                    <li>See your score and whether you passed</li>
                    <li>Check your past attempts in the sidebar</li>
                    <li>Refresh or revisit the page to try again</li>
                </ul>

                <h4>🛠️ Behind the Scenes</h4>
                <ul>
                    <li>Math.random() and _.shuffle() for randomized options</li>
                    <li>Event listeners and form validation for interactive play</li>
                    <li>Local storage to preserve score history</li>
                    <li>Conditional logic to handle multiple input types (text, select, checkboxes, radio)</li>
                    <li>Bootstrap and semantic HTML for responsive UI</li>
                </ul>

                <h4>🚀 Live Demo</h4>
                <a 
                    href="https://deborah-shaw.github.io/US-Geography-Quiz/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                >
                    Visit US Geography Quiz
                </a><br/><br/>

                <h4>Status: Live Project</h4>
            </div>
            <Footer/>
        </>
    );
}

export default ProjUsGeographyQuiz