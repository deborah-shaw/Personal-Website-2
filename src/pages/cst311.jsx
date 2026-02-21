import Header from '../components/header.jsx'
import Nav from '../components/nav.jsx'
import Footer from '../components/footer.jsx'

function Cst311(){

    return(
        <>
            <Header/><hr/>
            <Nav/><br/><br/>
            <div id="project">
                <h2 id="class-title">CST311 Introduction to Computer Networks</h2>

                <h4>Course Description:</h4>
                <p>Survey of Telecomm and Data Comm Technology Fundamentals, Local Area Network, Wide Area Network, Internet and internetworking protocols including TCP/IP, network security and performance, emerging industry trends such as voice over the network and high speed networking. Designed as a foundation for students who wish to pursue more advanced network studies including certificate programs. Includes hands-on networking labs that incorporate Cisco CCNA lab components.</p>

                <h3>Projects</h3>

                <h4>Final Project</h4>
                <ul>
                    <li>Created 3 Chat Client</li>
                    <li>Created a Server</li>
                    <li>Created a Certificate</li>
                </ul>
                <a href="/Personal-Website-2/projects/cst311_client_server_project.zip"><h5>Project</h5></a>
            </div>
            <Footer/>
        </>
    );
}

export default Cst311