import './Skills.css'

const Skills = () => {
    return ( 
        <div className="skills-container">
            <div className="skills">
                    <div className="skill-heading">
                    <h1>Frontend</h1>
                    </div>
                <div className="skill-sub-heading">
                    <p>HTML</p>
                    <p>CSS</p>
                    <p>JAVASCRIPT</p>
                    <p>REACT</p>
                </div>
             </div>
             <div className="skills">
                    <div className="skill-heading">
                    <h1>Backend</h1>
                    </div>
                <div className="skill-sub-heading">
                    <p>NodeJS</p>
                    <p>Express</p>
                    <p>MongoDb</p>
                </div>
             </div>
             <div className="skills">
                    <div className="skill-heading">
                    <h1>Tools</h1>
                    </div>
                <div className="skill-sub-heading">
                    <p>Visual Studio Code</p>
                    <p>Postman</p>
                    <p>GIT</p>
                </div>
             </div>
        </div>

    );
}
 
export default Skills;