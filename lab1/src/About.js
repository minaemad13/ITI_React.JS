import './Home.css';
import Prog from './Prog.js'
import MyPDF from './Mina_Emad.pdf';

 import CartIcon from './imaag/my.jpeg';

function About() {


  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="box-shadow">
              <div className="row">
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-sm-6 col-md-5">
                      <div className="about-img">
                         <img src={CartIcon} className="img-fluid rounded-circle"/>
                      </div>
                    </div>

                    <div className="col-sm-6 col-md-7">
                      <div className="about-info">
                        <p><span className="title-s">Name: </span> <span className="info">Mina Emad Lotfy</span></p>
                        <p><span className="title-s">Profile: </span> <span className="info">Full Stack Developer & Python
                          Developer</span></p>
                        <p><span className="title-s">Email: </span> <span className="info">menaemadorai@gmail.com</span></p>
                        <p><span className="title-s">Phone: </span> <span className="info">(+2) 01204822114</span></p>
                      </div>
                    </div>
                  </div>
                  <div className="skill-mf">
                    <p className="title-s2">Skills</p>
                    <Prog skill="HTML5" wid="95%" />
                    <Prog skill="CSS3" wid="80%" />
                    <Prog skill="JavaScript" wid="75%" />
                    <Prog skill="PYTHON" wid="70%" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="about-me">
                    <div className="title-box-2">
                      <h5 className="title-left">
                        About Me
                      </h5>
                    </div>
                    <p>
                      Hi, I’m Mina Emad, currently training as a Full Stack Developer using Python at
                      Information Technology Institute (ITI) . I have a Master’s degree in CS from Cairo University
                      Major Departement Information System(IS) and Mainor Departement Decesion Support(DS).
                    </p>
                    <p>
                      I have good experience in the following areas: HTML5, CSS3, SQL, MySql, javascript, Ajax, bootstrap,
                      Python (Django, Flask ), Flutter

                      Database: MySQL, Postgres

                      can manage my work well and meet customer needs.

                      I enjoy problem-solving. have good experience in version control (GIT).

                      I have good communication and presentation skills, write clean code, and good team player.
                    </p>
                    <a className="btn btn-outline-primary btn-lg" id="CV" href={MyPDF} download="My_File.pdf">Download CV</a> 
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;