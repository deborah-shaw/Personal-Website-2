import Header from '../components/header.jsx'
import Nav from '../components/nav.jsx'
import Footer from '../components/footer.jsx'

function cst334(){

    return(
        <>
            <Header/><hr/>
            <Nav/><br/><br/>
            <div id="project">
                <h2 id="class-title">CST334 Operating Systems</h2>

                <h4>Course Description:</h4>
                <p>Students in this course will learn about the use and design of modern operating systems, focusing on Linux. On the “use” side, students will learn the Linux command line, to write shell scripts, and to build programs with GNU utilities like awk, sed, and make. On the “design” side, students will develop a deep understanding of process management, memory management, file systems, and concurrency, and how they apply to modern technologies like virtualization and cloud computing.</p>
                
                <h3>Note: Taken at Cal Poly Pomona</h3>
            </div>
            <Footer/>
        </>
    );
}

export default cst334