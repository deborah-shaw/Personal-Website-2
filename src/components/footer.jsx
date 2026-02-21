
function Footer(){

    return(
        <footer>
            <hr/>
            Deborah's Personal Website &copy;{new Date().getFullYear()}
            <figure>
                <img src="/Personal-Website-2/img/logo-brain.jpg" alt="Logo of Smart Brain" style={{ maxWidth: "100px", maxHeight: "100px", borderRadius: "12px" }} />
            </figure>
        </footer>
    );
}

export default Footer