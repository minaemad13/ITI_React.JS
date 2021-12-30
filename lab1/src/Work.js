import './Home.css';

function Work(params,title,image,url , date, til) {
   return( 
    <div className="col-md-4">
    <div className="work-box">
      <div className="work-img">
         <img src={params.image}alt="Rental" className="img-fluid"></img> 
      </div>
      <div className="work-content">
        <div className="row">
          <div className="col-sm-8">
            <h2 className="w-title"><a href={params.url} target="_blanck">{params.title}</a></h2>
            <div className="w-more">
              <span className="w-ctegory">{params.til}</span> / <span className="w-date">{params.date}</span>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="w-like">
              <span className="ion-heart"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>);
    
}export default Work;

