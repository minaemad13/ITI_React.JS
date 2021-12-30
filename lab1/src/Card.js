import './Home.css';

import ReactDOM from 'react-dom';

import { MonitorIcon, CodeIcon,PhoneIphoneIcon,TableRowsIcon,IntegrationInstructionsIcon} from '@mui/material';
function Card(params,name,pra,icn) {
 
 console.log(params.icn)
    return(
        <div className="col-md-4">
        <div className="service-box">
            <div className="service-ico">
                <div className="ico-circle"><svg data-testid={params.icn}></svg></div>
            </div>
            <div className="service-content">
                <h2 className="s-title">{params.name}</h2>
                <p className="s-description text-center">
                    {params.pra}
                </p>
            </div>
        </div>
    </div>
    );

}export default Card;