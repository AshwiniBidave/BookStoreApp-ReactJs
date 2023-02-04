import React, {useState} from 'react';
import Button from '@mui/material/Button';

import {Link,useHistory} from 'react-router-dom';
import "./RegistrationForm.css";
import UserService from '../../Service/UserService';
export default function UserRegistration(){
    //impl
    let [formValue,setForm]=useState({
        firstName: "",
        lastName: "",
        email: "",
        address: "",
        mobileNumber: "",
        password: "",
        loginID: "",
        isAdmin: false,

    });

let history=useHistory();
    const onReset = () => {
        setForm({
            ...formValue, id: formValue.id, isUpdate: formValue.isUpdate 
        });
    };

    const login = async (event) => {
        event.preventDefault();
        
        let object = {
            id: formValue.userid,
            firstName: formValue.firstName,
            lastName: formValue.lastName,
            password: formValue.password,
            address: formValue.address,
            email: formValue.email,
            loginID:formValue.loginID,
            mobileNumber:formValue.mobileNumber
        };

        if(formValue.firstName === "" && formValue.lastName === "" && formValue.loginID === "" && formValue.password === "" && formValue.emailId === ""){
            alert("Enter input all Fileds")
        }
        else{
            UserService.userRegistration(object).then((response) => {
                console.log(response);
                alert("Data Added!!",response)
            
        history.push("/login");
        
        let token = response.data.data;
        localStorage.setItem("token", token);
        
        }).catch((response) => {
            alert(response.response.data.data);
        });

    }}
    const onNameChange = (event) => {
        setForm({ ...formValue, [event.target.name]: event.target.value });
        console.log('value for', event.target.name, event.target.value);
    }

    return (
        <div>
            <div className="form-content">
                <form className="form" action="#" onSubmit={login}>
                    <div className="form-head">
                        User Registration Form
                    </div>
                    <div className="row-content">
                        <label htmlFor="name" className="label text">First Name</label>
                        <input type="text" className="input" id="firstName" name="firstName" value={formValue.firstName}
                            placeholder="Your first name.." required onChange={onNameChange} />
                        <error-output className="text-error" htmlFor="first name"></error-output>
                    </div>
                    <div className="row-content">
                        <label htmlFor="name" className="label text">Last Name</label>
                        <input type="text" className="input" id="lastName" name="lastName" value={formValue.lastName}
                            placeholder="Your last name.." required onChange={onNameChange} />
                        <error-output className="text-error" htmlFor=" last name"></error-output>
                    </div>

                    <div className="row-content">
                        <label htmlFor="name" className="label text">Phone Number</label>
                        <input type="text" className="input" id="mobileNumber" name="mobileNumber" value={formValue.mobileNumber}
                            placeholder="mobile number...." required onChange={onNameChange} />
                        <error-output className="text-error" htmlFor="number"></error-output>
                    </div>
                    <div className="row-content">
                    <label className="label text" htmlFor="address">Address</label>
                        <input type="text" className="input" name="address" id="address" rows="4" placeholder="Enter Address"
                          required onChange={onNameChange} value={formValue.address} ></input>
                    </div>

                    <div className="row-content">
                        <label htmlFor="name" className="label text">Login ID</label>
                        <input type="text" className="input" id="loginID" name="loginID" value={formValue.loginID}
                            placeholder="Enter Login Id.." required onChange={onNameChange} />
                        <error-output className="text-error" htmlFor="name"></error-output>
                    </div>
                    <div className="row-content">
                        <label htmlFor="name" className="label text">Password</label>
                        <input type="password" className="input" id="password" name="password" value={formValue.password}
                            placeholder="password.." required onChange={onNameChange} />
                        <error-output className="text-error" htmlFor="name"></error-output>
                    </div>
                    <div className="row-content">
                        <label htmlFor="name" className="label text">Email-Id</label>
                        <input type="email" className="input" id="email" name="email" value={formValue.emailId}
                            placeholder="Your email.." required onChange={onNameChange} />
                        <error-output className="text-error" htmlFor="name"></error-output>
                    </div>
                    <br></br>
                    <div className="submit-reset">
                    <div className="buttonParent">
                            <Button variant="contained" size="large" type="submit" className="button submitButton" id="submitButton" onClick={login} >Submit</Button>
                            <Link to="/login"> <Button variant="contained" size="large" type="reset" className="button resetButton" id="resetButton" onClick={onReset}>Login</Button></Link>
                            
                        </div>
                    </div>
                </form>
            </div >
        </div >
    )
}


