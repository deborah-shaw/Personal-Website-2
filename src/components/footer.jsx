
function Footer(){

    return(
        <footer>
            <hr/>
            Deborah's Personal Website &copy;{new Date().getFullYear()}
            <br/><br/>
            <figure>
                <img src="/cloud-test/img/logo-brain.jpg" alt="Logo of CSUMB" style={{ maxWidth: "100px", maxHeight: "100px", borderRadius: "12px" }} />
            </figure>
        </footer>
    );
}

export default Footer