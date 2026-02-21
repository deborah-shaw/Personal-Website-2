import { Link, useLocation } from 'react-router-dom';
import React, { useState } from 'react';

function Nav(){

    const location = useLocation();
    const [showDropdown, setShowDropdown] = useState(false);

    const coursePaths = [
        "/cst300", "/cst338", "/cst363", "/cst311", "/cst336",
        "/cst462", "/cst383", "/cst489", "/cst499", "/cst334",
        "/cst370", "/cst438", "/cst328", "/cst329", "/projectHeads"
    ];
    const isCourseSelected = coursePaths.includes(location.pathname);

    return (
        <nav style={{ position: 'relative' }}>
            <Link to="/" className={location.pathname === "/" ? "current" : ""}>Home</Link>
            <Link to="/about" className={location.pathname === "/about" ? "current" : ""} style={{ marginLeft: "20px" }}>About</Link>

            {/* Dropdown toggle button */}
            <div
                onMouseEnter={() => setShowDropdown(true)} 
                onMouseLeave={() => setShowDropdown(false)}
                style={{ display: 'inline-block', position: 'relative', marginLeft: '20px' }}
            >
                <span style={{ cursor: 'pointer', fontFamily: "'Pacifico', cursive", fontSize: '1.5em', color: isCourseSelected ? 'purple' : 'gray' }}>Projects▼</span>

                {/* Dropdown menu */}
                {showDropdown && (
                    <div 
                        style={{
                            position: 'absolute',
                            top: '100%',
                            left: 0,
                            backgroundColor: 'rgba(0, 0, 0, 0.9)',  // slightly transparent white
                            border: '1px solid #ccc',
                            padding: '10px',
                            zIndex: 10,
                            minWidth: '400px', // Drop down menu width
                            whiteSpace: 'nowrap', // Prevents text from wrapping
                            borderRadius: '10px', // This makes the corners rounded
                        }}
                    >
                        <Link to="/cst300" className={location.pathname === "/cst300" ? "current" : ""}>CST300 - Major ProSeminar</Link><br/>
                        <Link to="/cst338" className={location.pathname === "/cst338" ? "current" : ""}>CST338 - Software Design</Link><br/>
                        <Link to="/cst363" className={location.pathname === "/cst363" ? "current" : ""}>CST363 - Introduction to Database Systems</Link><br/>
                        <Link to="/cst311" className={location.pathname === "/cst311" ? "current" : ""}>CST311 - Introduction to Computer Networks</Link><br/>
                        <Link to="/cst336" className={location.pathname === "/cst336" ? "current" : ""}>CST336 - Internet Programming</Link><br/>
                        <Link to="/cst462" className={location.pathname === "/cst462" ? "current" : ""}>CST462S - Race, Gender, Class in the Digital World</Link><br/>
                        <Link to="/cst383" className={location.pathname === "/cst383" ? "current" : ""}>CST383 - Introduction to Data Science</Link><br/>
                        <Link to="/cst489" className={location.pathname === "/cst489" ? "current" : ""}>CST489 - Capstone Project Planning</Link><br/>
                        <Link to="/cst499" className={location.pathname === "/cst499" ? "current" : ""}>CST499 - Computer Science Capstone</Link><br/>
                        <Link to="/cst334" className={location.pathname === "/cst334" ? "current" : ""}>CST334 - Operating Systems</Link><br/>
                        <Link to="/cst370" className={location.pathname === "/cst370" ? "current" : ""}>CST370 - Design and Analysis of Algorithms</Link><br/>
                        <Link to="/cst438" className={location.pathname === "/cst438" ? "current" : ""}>CST438 - Software Engineering</Link><br/>
                        <Link to="/cst328" className={location.pathname === "/cst328" ? "current" : ""}>CST328 - Digital Art and Design</Link><br/>
                        <Link to="/cst329" className={location.pathname === "/cst329" ? "current" : ""}>CST329 - Reasoning with Logic</Link><br/>
                        <Link to="/projectHeads" className={location.pathname === "/projectHeads" ? "current" : ""}>Heads in the Cloud - RDF</Link><br/>
                    </div>
                )}
            </div>
            <Link to="/contact" className={location.pathname === "/contact" ? "current" : ""} style={{ marginLeft: "20px" }}>Contact</Link>
        </nav>
    );
}

export default Nav