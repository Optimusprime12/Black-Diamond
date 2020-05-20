import React from "react";
import "../Registration/signin.scss";
import FormInput from "../../components/form-input/forminput";
import {signInWithGoogle} from '../../Firebase/FireBaseUtils'
class SignIn extends React.Component{
    constructor(props){
        super(props)
        this.state={
            email:"",
            password:""
        }
    }
handleSubmit = (event) =>{
 event.preventDefault();
 this.setState({email:"", password:""})
    }
    handleChange = (event) =>{
const {name,value}=event.target;
this.setState({[name]:value})
    }
    render(){
        return(
            <div className="sign-in" onSubmit={this.handleSubmit}>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form>
                    <FormInput type="email" name="email" value={this.state.email} handleChange={this.handleChange} label="email" required />
                    <FormInput type="password" name="password" value={this.state.password} handleChange={this.handleChange} label="password" required />
                   <div className="button">
                   <button className="custom-button" type="submit" value="Submit Form" > SIGN IN</button>
                    <button className="google-button" onClick={signInWithGoogle}>GOOGLE SIGN IN</button>
                   </div>
                    
                </form>
            </div>
        )
    }
}
export default SignIn;