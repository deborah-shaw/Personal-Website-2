import Header from '../components/header.jsx'
import Nav from '../components/nav.jsx'
import Footer from '../components/footer.jsx'

function cst462(){

    return(
        <>
            <Header/><hr/>
            <Nav/><br/><br/>
            <div id="project">
                <h2 id="class-title">CST462 Race, Gender, Class in the Digital World</h2>

                <h4>Course Description:</h4>
                <p>Provides students with key knowledge of race, gender, class and social justice especially in relation to technology in today’s digital world. Students challenge the barriers of expertise, gender, race, class, and location that restrict wider access to and understanding of the production and usage of new technologies. Students will engage in a practical experience in the community via their service placements, which will provide depth and context for considering questions of justice, equality, social responsibilities and the complexities of technology and its societal impact. The course uses scenario based approach combining presentations, discussions, and reflections to allow students explore the relationship between critical reflection and action on the topics mentioned above. </p>

                <h3>Projects</h3>

                <h4>Research Paper: The Social and Economic Impact of Digital Literacy for Seniors</h4>
                <iframe src="/Personal-Website-2/projects/cst462_research_paper.pdf" width="100%" height="600px">
                    This browser does not support PDFs. Please download the PDF instead:
                    <a href="/Personal-Website-2/projects/cst462_research_paper.pdf">Download PDF</a>
                </iframe>

                <br />

                <figure>
                    <h2>The Document Foundation: Service Internship</h2>
                    <h3>🚨🐞First Responder (reporting and confirming bugs):🐞🚨</h3>
                    <img src="/Personal-Website-2/img/462-sticker1.jpg" alt="Picture of sticker packs award" />
                    <h3>🎉🎉🎉 A lucky WINNER of a LibreOffice hoodie 🎉🎉🎉</h3>
                    <img src="/Personal-Website-2/img/462-sticker2.jpg" alt="Picture of sticker packs award" />
                </figure>
            </div>
            <Footer/>
        </>
    );
}

export default cst462