import Star from '../../Star';
import './Skills.css'

const Skills = () => {
    return ( 
        <div className="skills-container">
            <div className="skills">
                    <div className="skill-heading">
                    <h1>Frontend</h1>
                    </div>
                <div className="skill-sub-heading">
                    <p> 
                        <Star/>  
                        HTML
                    </p>
                    <p>
                        <Star/>
                        CSS
                    </p>
                    <p>
                        <Star/>
                        Javascript
                    </p>
                    <p>
                        <Star/>
                        ReactJS
                    </p>
                </div>
             </div>
             <div className="skills">
                    <div className="skill-heading">
                    <h1>Backend</h1>
                    </div>
                <div className="skill-sub-heading">
                    <p>
                        <Star/>
                        NodeJS
                    </p>
                    <p>
                        <Star/>
                        Express
                    </p>
                    <p>
                        <Star/>
                        MongoDb
                    </p>
                </div>
             </div>
             <div className="skills">
                    <div className="skill-heading">
                    <h1>Tools</h1>
                    </div>
                <div className="skill-sub-heading">
                    <p>
                        <Star/>
                        Visual Studio Code
                    </p>
                    <p>
                        <Star/>
                        Postman
                    </p>
                    <p>
                        <Star/>
                        GIT
                    </p>
                </div>
             </div>
        </div>

    );
}
 
export default Skills;