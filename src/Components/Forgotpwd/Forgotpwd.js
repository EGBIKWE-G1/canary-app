import React from 'react';
import './Forgotpwd.css';
import logo from "../../assets/logo.png";
import { Link } from 'react-router-dom';
class Forgotpwd extends React.Component{
    state={   
        email:'',
    }   
  
    handleChange = (e) =>{
        const {name,value} = e.target
        this.setState({[name]:value})
    }

    handleSubmit = (e) =>{
        e.preventDefault()
        this.props.isLogin(true)  
}     
    render(){
        return(  
            <div>
            <div className="canary-head">
            <div>
            <div className="align-head">
            <div className="company-logo">
            <img className="logo" height="50px" width="130px" src={logo} alt="logo" />
            </div>
            <body className="align">
                <div className="logins">
                <header className="logins__header">
                <h2 >Forgot password</h2>
                <br />
                <form className="logins__form" onSubmit = {this.handleSubmit}>
                <div>
                <label htmlfor="email">Enter a registered email</label>
                <input className="input-head" type='email' name='email' placeholder='mail@mail.com' required onChange={this.handleChange}/>
                </div>
                
                <Link to="/login">
                <div className="button-head">
                <input className="button" type="submit" value="Reset" />
                </div>
                </Link>

                </form>
                 <br />
                 <br />
                 <Link  to="/Signup">
                    <div className="signup-link">
                    Don't have an account? <a className="register" style={{color:'#20b8eb'}} href=" #">Register here</a></div>
                    </Link>
                </header>
                </div>
                </body>
                </div>
            </div>
        </div>
        <br />
        <br />
        <br />
        
         {/* <hr /> */}
    <div className="footer-forgotpwd">

    </div>
        </div>
        )
    }
}
    
export default Forgotpwd;


