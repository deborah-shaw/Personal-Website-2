import Header from '../components/header.jsx'
import Nav from '../components/nav.jsx'
import Footer from '../components/footer.jsx'

function cst338(){

    return(
        <>
            <Header/><hr/>
            <Nav/><br/><br/>
            <div id="project">
                <h2 id="class-title">CST338 Software Design</h2>

                <h4>Course Description:</h4>
                <p>This is an intermediate-level programming course covering techniques for developing large-scale software systems using object-oriented programming. Coverage includes software development life cycle models, requirements analysis, and graphical user interface development.</p>

                <h3>Projects</h3>

                <h4>Monster Maker</h4>
                <a href="/cloud-test/projects/cst338_monster_maker.zip"><h5>Monster Maker</h5></a>

                <h4>Library Program</h4>
                <a href="/cloud-test/projects/cst338_library_program.zip"><h5>Library Program</h5></a>
            </div>
            <Footer/>
        </>
    );
}

export default cst338