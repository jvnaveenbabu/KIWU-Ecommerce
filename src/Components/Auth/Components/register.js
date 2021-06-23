// Register Page
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import loginImg from '../../../login.svg';
import { register } from '../authThunks';


export const Register=()=>{
    const dispatch = useDispatch()

    const {  register_loading,register_error} = useSelector(state => state.auth)
    console.log(register_error);

    const [user,setUser]=useState({
        username:"",
        email:"",
        password:""
    });

    const {username,email,password}=user;

    const handleChange = (item) => (event) => {
        setUser({ ...user, [item]: event.target.value });
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(register(user));
        setUser({...user,email:"",password:"",username:""})
        // dispatch(AddProduct(product));
      };

        return (<div className="base-container" >
                <div className="header">Register</div>
                <div className="content">
                    <div className="image">
                        <img src={loginImg} />
                    </div>
                   <form onSubmit={handleSubmit}>
                   <div className="form">
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" name="username" placeholder="Enter your Username" value={username} onChange={handleChange("username")}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" placeholder="Enter your Email" value={email} onChange={handleChange("email")}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" placeholder="Enter your Password" value={password} onChange={handleChange("password")}/>
                        </div>
                        <div  >
                            <button type="button" className="btn1" type="submit"> Register </button>
                        </div>
                    </div>
                   </form>
                </div>
                
            </div>
        )
};
