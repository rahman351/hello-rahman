import './About.css';
const AboutPage = () => {
    const age = (new Date().getFullYear())-2001;
    return (
        <div className="about-container">
            <h1>Hi,<br/> I am Syed Rahmanudeen </h1>
            <h2>{age} years old </h2>
            <h2>Passionate self taught web developer</h2>
            <div className="btn-container">
                <button className='about-btn' onClick={()=>window.location.href="/skills"}>Check out my skills</button>
                <button className='about-btn' onClick={()=>window.location.href="/projects"}>Check out my web development projects</button>
            </div>
        </div>
    );
}
 
export default AboutPage;