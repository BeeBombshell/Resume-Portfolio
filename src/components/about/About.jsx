import "../about/about.css";
import aboutMe from "../../img/aboutme.png";
import Award from "../../img/award.png"

const About = () => {
    return (
        <div className="a">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img src={aboutMe} alt="About Me" className="a-img"></img>
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">About Me</h1>
                <p className="a-sub">
                    Delhi-based web/app developer who is passionate about coding.
                </p>
                <p className="a-desc">
                    I've always been a programming enthusiast.
                    Through my years of experience, I've experimented with various diverse technologies and applied my skills in my projects.  
                    For recreation, I doodle.
                    I love waking up to new horizons, connecting with people, and exploring the world.
                </p>
                <div className="a-skills">
                    <br></br>
                    <h3>My Skillset</h3>
                    <br></br>
                    <div className="a-icons">
                        <a href="https://www.w3.org/html/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40" /></a>
                        <a href="https://www.w3schools.com/css/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40" /></a>
                        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40" /></a>
                        <a href="https://reactjs.org/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40" /></a>
                        <a href="https://flutter.dev"><img src="https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg" alt="flutter" width="40" height="40" /></a>
                        <a href="https://git-scm.com/"><img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40" /></a>
                        <a href="https://firebase.google.com/"><img src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" alt="firebase" width="40" height="40" /></a>
                        <a href="https://heroku.com"><img src="https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg" alt="heroku" width="40" height="40" /></a>
                        <a href="https://www.figma.com/"><img src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg" alt="figma" width="40" height="40" /></a>
                        <a href="https://www.mysql.com/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="mysql" width="40" height="40" /></a>
                        <a href="https://www.python.org"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="python" width="40" height="40" /></a>
                        <a href="https://www.java.com"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" alt="java" width="40" height="40" /></a>
                        <a href="https://www.w3schools.com/cpp/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg" alt="cplusplus" width="40" height="40" /></a>
                        <a href="https://www.cprogramming.com/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg" alt="c" width="40" height="40" /></a>
                    </div>
                </div>
                <div className="a-award">
                    <img src={Award} alt="" className="a-award-img" />
                    <div className="a-award-texts">
                        <h4 className="a-award-title">MLH Hackathons and Events</h4>
                        <p className="a-award-desc">
                            Active Participation in MLH Hackathons ; Prize holder at MLH SelfieHacks.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;