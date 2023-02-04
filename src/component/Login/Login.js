import React, { useState} from 'react'
import './Login.css'
import { Link, useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';
import { withRouter } from 'react-router';
import UserService from '../../Service/UserService';

const Login = (props) => {
    let history = useHistory();
        const [formValue, setForm] = useState({
        password: "",
        loginID: "",
        error: "",

    });

    const login = (event) => {
        event.preventDefault();
        let object = {
            password: formValue.password,
            loginID: formValue.loginID
        };
        console.log(object)
        //window.localStorage.clear();
        if (formValue.password === "" && formValue.loginID === "") {
            alert("Enter input all Fileds")
        }
        else {
            UserService.userLogin(object).then((response) => {
                console.log(response);
                if(response.data.data==="Login Successful"){
                alert("successfull");  
                

                history.push("/home");
                }else{
                    console.log("Login Credential Wrong");
                }
                //window.location.reload();
            })
        }
    }
    const onNameChange = (event) => {
        setForm({ ...formValue, [event.target.name]: event.target.value });
        console.log('value for', event.target.name, event.target.value);
    }

    return (
        <div>
            <div className="form-content">
                <form className="form" action="#" onSubmit={login}>
                    <div className="formhead">
                        User Login Form
                    </div>
                    <div className="row-content">
                        <label htmlFor="name" className="label text">Login Id</label>
                        <input type="text" className="input" id="loginID" name="loginID" value={formValue.loginID}
                            placeholder="loginId.." required onChange={onNameChange} />
                        <error-output className="text-error" htmlFor="name"></error-output>
                    </div>
                    <div className="row-content">
                        <label htmlFor="name" className="label text">Password</label>
                        <input type="password" className="input" id="password" name="password" value={formValue.password}
                            placeholder="password.." required onChange={onNameChange} />
                        <error-output className="text-error" htmlFor="name"></error-output>
                    </div>
                    <div className="submit-reset">
                        <div className="buttonParent">
                            <Link to="/register" underline="none"> <Button variant="contained" size="large" className="resetButton
                                button cancleButton">Sign Up</Button></Link>
                            <Button variant="contained" size="large" type="submit" className="button submitButton" id="submitButton" onClick={login} >Login</Button>
                        </div>
                    </div>

                </form>

            </div>

        </div>
    )
}

export default withRouter(Login);