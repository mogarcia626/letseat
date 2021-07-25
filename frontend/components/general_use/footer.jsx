;import React from 'react'
import { FaLinkedin, FaAngellist, FaGithub } from 'react-icons/fa';

function Footer() {

     return (
        <div className='footer-background'>
            <div className="footer-main">
                
                <div className="footer-section">
                    <span className="footer-section-title">
                        TECHNOLOGIES USED
                    </span>
                    <div className='used-tech'>
                        <div className='footer-section'>
                            <span className="footer-section-title">
                                FRONT END
                            </span>
                            <ul className="tech-list">
                                <li>React</li>
                                <li>Redux</li>
                                <li>JavaScript</li>
                                <li>Sass/CSS/HTML</li>
                                <li>AJAX</li>
                            </ul>
                        </div>
                        <div className='footer-section'>
                            <span className="footer-section-title">
                                BACK END
                            </span>
                            <ul className="tech-list">
                                <li>Ruby on Rails</li>
                                <li>PostgreSQL</li>
                                <li>Active Record</li>
                                <li>JBuilder</li>
                                <li>Amazon S3</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='about-me-section'>
                <div className="footer-section">
                    <span className="footer-section-title">OTHER PROJECTS</span>
                    <ul className="projects-list">
                        <li key='1-pr'>
                            <a href="https://home-court.herokuapp.com/" target='_blank'>HOME COURT</a>
                        </li>
                        <li key='2-pr'>
                            <a href="https://mogarcia626.github.io/light_show/" target='_blank'>LIGHT SHOW</a>
                        </li>
                    </ul>
                </div>

                <div className="footer-section">
                    <span className="footer-section-title">
                        DISCOVER
                    </span>
                    <ul className="discover-links">
                        <li key='linkedin' >
                            <a href="https://www.linkedin.com/in/moustafagarcia//" target='_blank'><FaLinkedin className="fab fa-linkedin" />LinkedIn</a>
                        </li>
                        <li key='angel' >
                            <a href="https://angel.co/u/moustafa-garcia-bengochea" target='_blank'><FaAngellist className="fab fa-angellist" />AngelList</a>
                        </li>
                        <li key='github' >
                            <a href="https://github.com/mogarcia626" target='_blank'><FaGithub className="fab fa-github" />Github</a>
                        </li>
                    </ul>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Footer