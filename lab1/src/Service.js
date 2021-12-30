
import './Home.css';
import Card from './Card.js'



function Service() {

    return (

        <div id="service" className="services-mf">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="text-center">
                            <h3 className="title-a">
                                SERVICES
                            </h3>
                            <p className="subtitle-a">
                                This is what I can do in this field.
                            </p>
                            <div className="line"></div>
                        </div>
                    </div>
                </div>
                <div className="row">
                  
                    <Card name="WEB DESIGN" pra="I can design web pages and web applications from scratch,
                and I can deal with design programs such as figma and adobe XD." icn="MonitorIcon"/>
                    <Card name="WEB DEVELOPMENT" pra="I can design web pages and web applications from scratch,
                and I can deal with design programs such as figma and adobe XD." icn="CodeIcon"/>
                    <Card name="MOBILE UI DESIGN" pra="I can design and develop your mobile
                application and it works on Android and iOS in Flutter." icn="PhoneIphoneIcon"/>
                    <Card name="Responsive Design" pra="I can design and develop responsive web pages and web applications using bootstrap css framework" icn="PhoneIphoneIcon"/>
                    <Card name="DATABASE" pra="I can design and develop your database because I have experience
                in databases such as Mysql, Postgress, SQL Server .." icn="TableRowsIcon"/>
                    <Card name="PYTHON" pra="I can develop programs in python language, do some algorithms of
                machine learning, read files, and draw diegrams." icn="IntegrationInstructionsIcon"/>
                    <div className="container line2"></div>
                </div>

            </div>

        </div>


    );
}
export default Service;