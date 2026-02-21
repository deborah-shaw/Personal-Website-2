
function Footer(){

    return(
        <footer>
            <hr/>
            Shaw &copy;{new Date().getFullYear()} CSUMB ILP Portfolio
            <br/><br/>
            <figure>
                <img src="/cloud-test/img/csumb2.jpg" alt="Logo of CSUMB" style={{ maxWidth: "100px", maxHeight: "100px", borderRadius: "12px" }} />
            </figure>
        </footer>
    );
}

export default Footer