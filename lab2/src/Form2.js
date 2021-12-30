
import { useState } from "react"
import IconButton from "@material-ui/core/IconButton";

import Visibility from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";


const Form2 = () => {

    const [FormData, setFormData] = useState({
        Name: "",
        Email: "",
        Username: "",
        pass: "",
        conpass: "",
        show: false,
        show1:false,
    });

    const [FormErr, setFormErr] = useState({
        NameErr: "",
        EmailErr: "",
        UsernameErr: "",
        PassErr: "",
        conpasserr: ""
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(FormData);
    };

    const FormHandeller = (e) => {
        if (e.target.name === "Name") {
            setFormData({
                ...FormData,
                Name: e.target.value
            });
            setFormErr({
                ...FormErr,
                NameErr:
                    e.target.value.length === 0 ? "This Fieald is required" : ""
            });

        }
      else  if (e.target.name === "User") {
            setFormData({
                ...FormData,
                Username: e.target.value
            });
            setFormErr({
                ...FormErr,
                UsernameErr:
                    e.target.value.length === 0 ? "This Fieald is required" : !(/^\S*$/.test(e.target.value)) ? "please inbut username without spaces" : ""
            });

        }
        else if (e.target.name === "email") {
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
                    e.target.value.length === 0 ? "This Fieald is required" : e.target.value.length < 8 ? "please the password must be more then 8 cracter" : !(/^(?=.{10,}$)(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*?\W).*$/.test(e.target.value)) ? "Please enter valid Password" : ""
            });

        } else if (e.target.name === "Conferm password") {
            setFormData({
                ...FormData,
                conpass: e.target.value
            });
            setFormErr({
                ...FormErr,
                conpasserr:
                    e.target.value !== FormData.pass ?  "please enter mached password" :  e.target.value.length ===0 ?"this field is requried" :""
            });

        }
    }
    const handleClickShowPassword = () => {
        setFormData({ ...FormData, show: !FormData.show });
    };
    const handleClickShowPassword1 = () => {
        setFormData({ ...FormData, show1: !FormData.show1 });
    };
    return (
        <>
            <div className="container ">
                <h1>Form Task 1</h1>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="mb-3">

                        <label className="form-label">Name</label>
                        <input type="text" className="form-control" value={FormData.Name} name="Name" onChange={(e) => FormHandeller(e)} />
                        <small className="text-danger">{FormErr.NameErr}</small>
                    </div>

                    <div className="mb-3">

                        <label htmlfo="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="text" className="form-control" value={FormData.username} name="email" onChange={(e) => FormHandeller(e)} />
                        <small className="text-danger">{FormErr.EmailErr}</small>
                    </div>
                    <div className="mb-3">

                        <label className="form-label">User Name</label>
                        <input type="text" className="form-control" value={FormData.Username} name="User" onChange={(e) => FormHandeller(e)} />
                        <small className="text-danger">{FormErr.UsernameErr}</small>
                    </div>
                    <div className="mb-3">
                        <label htmlfo="exampleInputPassword1" className="form-label">Password</label>
                        <input type={FormData.show ? "text" : "password"} className="form-control" value={FormData.pass} name="password" onChange={(e) => FormHandeller(e)} />
                        <IconButton onClick={handleClickShowPassword}>
                            {FormData.show ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                        <small className="text-danger">{FormErr.PassErr}</small>

                    </div>
                    <div className="mb-3">
                        <label className="form-label">Conferm Password</label>
                        <input type={FormData.show1 ? "text" : "password"} className="form-control" value={FormData.conpass} name="Conferm password" onChange={(e) => FormHandeller(e)} />
                        <IconButton onClick={handleClickShowPassword1}>
                            {FormData.show1 ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                        <small className="text-danger">{FormErr.conpasserr}</small>

                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>

            </div>
        </>
    )
}
export default Form2 ; 