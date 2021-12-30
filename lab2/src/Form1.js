
import { useState } from "react"
import IconButton from "@material-ui/core/IconButton";

import Visibility from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";


const Form = () => {

    const [FormData, setFormData] = useState({
        Email: "",
        pass: "",
        show: false,
    });

    const [FormErr, setFormErr] = useState({
        EmailErr: "",
        PassErr: "",
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(FormData);
    };

    const FormHandeller = (e) => {
        if (e.target.name === "email") {
            setFormData({
                ...FormData,
                Email: e.target.value
            });
            setFormErr({
                ...FormErr,
                EmailErr:
                    e.target.value.length === 0 ? "This Fieald is required" : !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value)) ? "please inbut valid email" : ""
            });

        } else if (e.target.name === "password") {
            setFormData({
                ...FormData,
                pass: e.target.value
            });
            setFormErr({
                ...FormErr,
                PassErr:
                    e.target.value.length === 0 ? "This Fieald is required" : e.target.value.length < 8 ? "please the password must be more then 8 cracter" : ""
            });

        }
    }
    const handleClickShowPassword = () => {
        setFormData({ ...FormData, show: !FormData.show });
    };
    return (
        <>
            <div className="container ">
                <h1>Form Task 1</h1>
                <form onSubmit={(e) => {handleSubmit(e)}}>
                    <div className="mb-3">

                        <label htmlfo="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="text" className="form-control" value={FormData.username} name="email" onChange={(e) => FormHandeller(e)} />
                        <small className="text-danger">{FormErr.EmailErr}</small>
                    </div>
                    <div className="mb-3">
                        <label htmlfo="exampleInputPassword1" className="form-label">Password</label>
                        <input type={FormData.show ? "text" : "password"} className="form-control" value={FormData.pass} name="password" onChange={(e) => FormHandeller(e)} />
                        <IconButton onClick={handleClickShowPassword}>
                            {FormData.show ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                        <small className="text-danger">{FormErr.PassErr}</small>

                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </>
    )
}
export default Form; 