// Register Page
import React from 'react';
import loginImg from '../../../login.svg';


export class Register extends React.Component {

    constructor(props) {
        super(props);
    }
    

    render() {
        
        return <div className="base-container" ref="this.props.containerRef">
                <div className="header">Register</div>
                <div className="content">
                    <div className="image">
                        <img src={loginImg} />
                    </div>
                    <div className="form">
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" name="username" placeholder="Enter your Username"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" placeholder="Enter your Email"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" placeholder="Enter your Password"/>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <button type="button" className="btn1"> Register </button>
                </div>
            </div>
    }

}