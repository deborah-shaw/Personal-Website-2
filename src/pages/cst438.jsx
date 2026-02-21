import Header from '../components/header.jsx'
import Nav from '../components/nav.jsx'
import Footer from '../components/footer.jsx'

function cst438(){

    return(
        <>
            <Header/><hr/>
            <Nav/><br/><br/>
            <div id="project">
                <h2 id="class-title">CST438 Software Engineering</h2>

                <h4>Course Description:</h4>
                <p>Prepares students for large-scale software development using software engineering principles and techniques. Coverage includes software process, requirements analysis and specification, software design, implementation, testing, and project management. Students are expected to work in teams to carry out a realistic software project.</p>
                
                <h3>Note: Taken at Cal Poly Pomona</h3>
            </div>
            <Footer/>
        </>
    );
}

export default cst438