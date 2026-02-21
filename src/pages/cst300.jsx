import Header from '../components/header.jsx'
import Nav from '../components/nav.jsx'
import Footer from '../components/footer.jsx'

function Cst300(){

    return(
        <>
            <Header/><hr/>
            <Nav/><br/><br/>
            <div id="project">
                <h2 id="class-title">CST300 Major ProSeminar</h2>

                <h4>Course Description:</h4>
                <p>This course develops critical reading and writing skills for Computing, Design, and Technology fields. Students will learn to adapt their writing for different audiences and purposes, adhering to disciplinary conventions. The curriculum covers expository and academic writing, professional communication, source selection, and effective communication with diverse audiences.</p>

                <h3>Projects</h3>

                <h4>Object Detection Video Presentation</h4>

                <h5>YouTube Link: <a href="https://youtu.be/zgjLmXzU0dM">https://youtu.be/zgjLmXzU0dM</a></h5>

                <h4>Final Project</h4>

                <iframe src="/cloud-test/projects/cst300_ethics_paper.pdf" width="100%" height="600px">
                    This browser does not support PDFs. Please download the PDF instead:
                    <a href="/cloud-test/projects/cst300_ethics_paper.pdf">Download PDF</a>
                </iframe>
            </div>
            <Footer/>
        </>
    );
}

export default Cst300