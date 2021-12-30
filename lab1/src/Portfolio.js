import "./Home.css"
import Work from './Work.js'
import img1 from './imaag/rest.png'
import img2 from './imaag/hosting.png'
import img3 from './imaag/vacancy.png'
import img4 from './imaag/Walke.png'
import img5 from './imaag/InkedGP PROTOTYPE_LI.jpg'
import img6 from './imaag/Screenshot 2021-12-12 201951.png'


function Protfolio(params) {
    return (

        <div id="work" className="portfolio-mf ">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="title-box text-center">
                            <h3 className="title-a">
                                PORTFOLIO
                            </h3>
                            <p className="subtitle-a">
                                These are some of my work in the field of
                                developing and designing websites and mobile applications.
                            </p>
                            <div className="line3"></div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <Work title="Rental
                      Vacation Responsive Design" image={img3} url="https://github.com/minaemad13/Vacation-Rental" date="18 Oct. 2021" til="Web Design" />

                    <Work title="Hosting Company Responsive Design" image={img2} url="https://github.com/minaemad13/Vacation-Rental" date="18 Oct. 2021" til="Web Design" />
                    <Work title="Egyptian Sushi Restaurant" image={img1} url="https://github.com/minaemad13/Vacation-Rental" date="18 Oct. 2021" til="Web Design" />
                    <Work title="Photographer Delivery" image={img4} url="https://github.com/minaemad13/Vacation-Rental" date="18 Oct. 2021" til="Web Design" />
                    <Work title="Metro Ticket Reservasion" image={img5} url="https://github.com/minaemad13/Vacation-Rental" date="18 Oct. 2021" til="Web Design" />
                    <Work title="Chrome Extensions" image={img6} url="https://github.com/minaemad13/Vacation-Rental" date="18 Oct. 2021" til="Web Design" />



                </div>
            </div>
        </div>


    );
} export default Protfolio;