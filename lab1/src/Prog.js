import './Home.css';

function Prog(skill,wid) {

  

console.log(skill.wid)
    return (

        <div>{skill.skill}
         <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{width: skill.wid }} 
                      aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
            </div>

            );
}
export default Prog;