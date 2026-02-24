import Header from '../components/header.jsx'
import Nav from '../components/nav.jsx'
import Footer from '../components/footer.jsx'

function ProjGuessTheNumber(){

    return(
        <>
            <Header/><hr/>
            <Nav/><br/><br/>
            <div id="project">
                <a 
                    href="https://deborah-shaw.github.io/Guess-the-Number-Game/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <h2 id="class-title">Guess the Number Game</h2>

                    <div style={{ 
                        width: "600px", 
                        height: "300px",      // show only this much of the image
                        overflow: "hidden",   // hide the rest
                        margin: "0 auto",     // center it
                        borderRadius: "20px"  // round corners
                    }}>
                    <img 
                        src="/Personal-Website-2/img/projGuessTheNumber1.jpg" 
                        alt="US Geography Quiz Screenshot" 
                        style={{ width: "100%", height: "auto", objectFit: "cover" }} 
                        className="rounded"
                    />
                    </div>
                </a>

                <h4>📌 Project Description</h4>
                <p> 
                    Guess the Number is an interactive web-based game designed to challenge 
                    players to guess a randomly generated number between 1 and 99 within seven 
                    attempts. The game provides instant feedback after each guess, tracks previous 
                    guesses, and displays the number of remaining attempts. It also keeps a running 
                    record of wins and losses, creating an engaging and competitive experience 
                    while demonstrating fundamental front-end development concepts such as user 
                    input handling, conditional logic, and dynamic DOM updates.
                </p>

                <h4>🕹️ Game Features</h4>
                <ul>
                    <li>Random number generation for every new round</li>
                    <li>Seven-attempt limit to increase challenge</li>
                    <li>Instant feedback indicating whether the guess is too high, too low, or correct</li>
                    <li>Display of previous guesses</li>
                    <li>Live countdown of remaining attempts</li>
                    <li>Win and loss tracking across multiple rounds</li>
                    <li>Reset button to restart the game at any time</li>
                </ul>

                <h4>🛠️ Tech Used</h4>
                <ul>
                    <li><strong>HTML</strong> – Structures the layout and content of the game</li>
                    <li><strong>CSS</strong> – Styles the interface and enhances visual design</li>
                    <li><strong>JavaScript</strong> – Implements game logic and interactivity</li>
                    <li><strong>Google Fonts</strong> – Provides custom fonts for improved aesthetics</li>
                </ul>

                <h4>🎮 How to Play</h4>
                <ul>
                    <li>Enter a number between 1 and 99 in the input field</li>
                    <li>Click the “Is this correct?” button to submit your guess</li>
                    <li>Read the feedback message to determine if your guess is too high, too low, or correct</li>
                    <li>Continue guessing until:
                        <ul>
                            <li>You correctly guess the number</li>
                            <li>You run out of seven attempts</li>
                        </ul>
                    </li>
                    <li>Click “Challenge Again” to reset the game and play another round</li>
                </ul>

                <h4>🛠️ Behind the Scenes</h4>
                <ul>
                    <li>When the game starts, JavaScript generates a random number between 1 and 99</li>
                    <li>Each time the player submits a guess:
                        <ul>
                            <li>The input is validated and converted into a number</li>
                            <li>The guess is compared to the hidden number</li>
                            <li>Feedback is dynamically displayed in the DOM</li>
                            <li>The attempt counter decreases</li>
                            <li>The guess is added to the previous guesses list</li>
                        </ul>
                    </li>
                    <li>If the player guesses correctly or runs out of attempts:
                        <ul>
                            <li>The win/loss counter updates accordingly</li>
                            <li>The round ends until the reset button is clicked</li>
                        </ul>
                    </li>
                </ul>

                <h4>🚀 Live Demo</h4>
                <a 
                    href="https://deborah-shaw.github.io/Guess-the-Number-Game/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                >
                    Visit Guess the Number Game
                </a><br/><br/>

                <h4>Status: Live Project</h4>
            </div>
            <Footer/>
        </>
    );
}

export default ProjGuessTheNumber