import "./intro.css";
import Me from '../../img/Me.png';
import { BsGithub, BsLinkedin, BsDiscord, BsPinterest, BsFillFileEarmarkPersonFill } from "react-icons/bs";

const Intro = () => {
    return (
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Hello, My name is </h2>
                    <h1 className="i-name">Bhavya Verma</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Web Developer</div>
                            <div className="i-title-item">UI/ UX Designer</div>
                            <div className="i-title-item">Python Developer</div>
                            <div className="i-title-item">Open-Source Enthusiast</div>
                            <div className="i-title-item">Part-time Doodler</div>
                        </div>
                    </div>
                    <p className="i-desc">
                        A passionate software developer from India, currently pursuing B. Tech in Information Technology
                        and Mathematical Innovations from University of Delhi. I am a Web/App developer and like contributing
                        to Open-Source projects.
                    </p>
                </div>
                <div className="i-icons">
                    <br></br>
                    <a href="https://github.com/BeeBombshell"><BsGithub size="40px" color="#8C88BA" /></a>
                    <a href="https://www.linkedin.com/in/bhavya-verma-9ba021191/"><BsLinkedin size="40px" color="#8C88BA" /></a>
                    <a href="https://discordapp.com/users/697136336582344786/"><BsDiscord size="40px" color="#8C88BA" /></a>
                    <a href="https://in.pinterest.com/tvworm/_saved/"><BsPinterest size="40px" color="#8C88BA" /></a>
                    <a href="https://resume.creddle.io/resume/a41cgnje8tf"><BsFillFileEarmarkPersonFill size="40px" color="#8C88BA" /></a>
                </div>
            </div>
            <div className="i-right">
                <div className="i-bg"></div>
                <img src={Me} alt="Profile Pic" className="i-img"></img>
            </div>
        </div>
    )
}

export default Intro;