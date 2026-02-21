import Header from '../components/header.jsx'
import Nav from '../components/nav.jsx'
import Footer from '../components/footer.jsx'

function cst383(){

    return(
        <>
            <Header/><hr/>
            <Nav/><br/><br/>
            <div id="project">
                <h2 id="class-title">CST383 Introduction to Data Science</h2>

                <h4>Course Description:</h4>
                <p>In data science, data analysis and machine learning techniques are applied to visualize data, understand trends, and make predictions. In this course students will learn how to obtain data, preprocess it, apply machine learning methods, and visualize the results. A student who completes the course will have enough theoretical knowledge, and enough skill with modern statistical programming languages and their libraries, to define and perform complete data science projects.</p>

                <h3>Projects</h3>

                <h4>Final Project</h4>
                <a href="https://github.com/nmalsabah/CST-383-Final-Project"><h5>Notebook on Predicting Tech Layoffs 2020 - 2024</h5></a>
            </div>
            <Footer/>
        </>
    );
}

export default cst383