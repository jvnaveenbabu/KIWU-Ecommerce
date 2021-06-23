import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import loginImg from '../../../login.svg';
import { login } from '../authThunks';


export const Login=()=> {
    const dispatch = useDispatch()

    const {   login_loading,login_error} = useSelector(state => state.auth)

    const [user,setUser]=useState({
        email:"",
        password:""
    });

    const {email,password}=user;

    const handleChange = (item) => (event) => {
        setUser({ ...user, [item]: event.target.value });
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login(user))
        setUser({...user,email:"",password:""})
        // dispatch(AddProduct(product));
      };

        return( 
        <div className="base-container" >
                <div className="header">Login</div>
                <div className="content">
                    <div className="image">
                        <img src={loginImg} />
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="form" >
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" name="email" placeholder="Enter your Email" value={email} onChange={handleChange("email")}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" name="password" placeholder="Enter your Password" value={password} onChange={handleChange("password")}/>
                            <div >
                                <button type="button" className="btn" type="submit"> Login </button>
                             </div>
                            </div>
                        </div>
                    </form>
                </div>
                
            </div>
    )
}
