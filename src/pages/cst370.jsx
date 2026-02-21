import Header from '../components/header.jsx'
import Nav from '../components/nav.jsx'
import Footer from '../components/footer.jsx'

function cst370(){

    return(
        <>
            <Header/><hr/>
            <Nav/><br/><br/>
            <div id="project">
                <h2 id="class-title">CST370 Design and Analysis of Algorithms</h2>

                <h4>Course Description:</h4>
                <p>Students learn important data structures in computer science and acquire fundamental algorithm design techniques to get the efficient solutions to several computing problems from various disciplines. Topics include the analysis of algorithm efficiency, hash, heap, graph, tree, sorting and searching, brute force, divide-and-conquer, decrease-and-conquer, transform-and-conquer, dynamic programming, and greedy programming.</p>
                
                <h3>Note: Taken at Cal Poly Pomona</h3>
            </div>
            <Footer/>
        </>
    );
}

export default cst370