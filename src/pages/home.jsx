import Header from '../components/header.jsx'
import Nav from '../components/nav.jsx'
import Footer from '../components/footer.jsx'

function Home(){

    return(
        <>
            <Header/><hr/>
            <Nav/><br/><br/>
            <main style={{ maxWidth: '1000px', margin: 'auto', padding: '20px' }}>
                <figure>
                    <img src="/Personal-Website-2/img/photo-ds.jpg" alt="Picture of Deborah Shaw" style={{ borderRadius: "50%" }} />
                </figure><br/>
                <div>
                    Hello! <br/>
                    <p>
                        Hello! I'm a newly graduated software engineer with a strong passion for 
                        building clean, efficient, and user-friendly applications. I enjoy turning 
                        ideas into interactive digital experiences and continuously expanding my 
                        skills in modern web technologies. As a motivated learner and problem-solver, 
                        I’m excited to contribute to innovative projects and grow as a developer 
                        while creating meaningful and impactful software solutions.
                    </p>
                    <p>
                        Feel free to explore my projects, browse my skillset, and connect with me if you'd like to collaborate or just say hello!
                    </p>
                    <br/><br/>
                    <em>"Success is not final, failure is not fatal: It is the <strong>courage</strong> to continue that counts."</em><br/>
                    - Winston Churchill
                </div>
            </main>
            <Footer/>
        </>
    );
}

export default Home