import Header from '../components/header.jsx'
import Nav from '../components/nav.jsx'
import Footer from '../components/footer.jsx'

function Contact(){

    return(
        <>
            <Header/><hr/>
            <Nav/><br/><br/>            
            
            <div style={{ maxWidth: '750px', margin: 'auto', padding: '20px' }}>

                {/* Page Introduction */}
                <section style={{ textAlign: 'center', marginBottom: '40px' }}>
                    <h2>Contact Me</h2>
                    <p>
                        I'm currently open to entry-level software engineering opportunities 
                        and exciting collaborations. Feel free to reach out — I’d love to connect!
                    </p>
                </section>

                {/* Contact Links */}
                <section style={{ textAlign: 'center', marginBottom: '40px' }}>
                    <a href="mailto:your.email@example.com" style={{ margin: '0 15px' }}>📧 Email</a>
                    <a href="https://www.linkedin.com/in/deborahshaw1" target="_blank" rel="noopener noreferrer" style={{ margin: '0 15px' }}>💼 LinkedIn</a>
                    <a href="https://github.com/deborah-shaw" target="_blank" rel="noopener noreferrer" style={{ margin: '0 15px' }}>💻 GitHub</a>
                </section>

                {/* Contact Form */}
                <section>
                    <form
                        action="https://formspree.io/f/mblpvwbw"
                        method="POST"
                        style={{ display: 'flex', flexDirection: 'column', gap: '15px', background: '#f9f9f9', padding: '25px', borderRadius: '8px' }}
                    >
                        <input type="text" name="name" placeholder="Your Name" required style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
                        <input type="email" name="email" placeholder="Your Email" required style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
                        <input type="text" name="subject" placeholder="Subject" style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
                        <textarea name="message" rows="5" placeholder="Your Message" required style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}></textarea>
                        <button type="submit" style={{ padding: '10px 20px', border: 'none', borderRadius: '5px', backgroundColor: '#0077cc', color: '#fff', fontWeight: 'bold', cursor: 'pointer' }}>Send Message</button>
                    </form>
                </section>

                {/* Closing Line */}
                <section style={{ textAlign: 'center', marginTop: '30px', fontStyle: 'italic' }}>
                    <p>Looking forward to connecting with you!</p>
                </section>
            </div>
            <Footer/>
        </>
    );
}

export default Contact