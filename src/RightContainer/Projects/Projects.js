import './Projects.css';

const Projects = () => {
    return (
        <div className="project-container">
            <div className="project-top-container">
                My Github Projects
            </div>
            <div className="project-bottom-container">
                <div className="single-project-container">
                    <div className="single-project-left-container">
                        <img src="/calculator.png" width="300px"/>
                    </div>
                    <div className="single-project-right-container">
                        <h2> Loan EMI Calculator</h2>
                        <p> A Modern Loan EMI Calculator made from scratch with ReactJs and Charts Library</p>
                        <p> 
                            <button className='git-btn' onClick={()=> {window.open("https://github.com/rahman351/loan-emi-calc")}}>Source Code</button>
                            <button className='demo-btn' onClick={()=> {window.open("https://loan-emi-calc.netlify.app/")}}>Live Demo</button>
                        </p>
                    </div>
                </div>
                <div className="single-project-container">
                    <div className="single-project-left-container">
                    <img src="/notebook.png" width="300px"/>
                    </div>
                    <div className="single-project-right-container">
                        <h2> Note Taking app</h2>
                        <p> A Modern Note taking web app made from scratch with ReactJs and client side data storage with localStorage API</p>
                        <p> 
                            <button className='git-btn' onClick={()=> {window.open("https://github.com/rahman351/notebook")}}>Source Code</button>
                            <button className='demo-btn' onClick={()=> {window.open("https://notebook-rahman.vercel.app/")}}>Live Demo</button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Projects;