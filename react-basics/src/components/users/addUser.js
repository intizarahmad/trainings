import React, {Component } from 'react';
import './addUser.css';
class AddUser extends Component {
    constructor(props){
        super(props);
        this.state = {
            user:{}
        }
    }

    handleChange =(e)=>{
        console.log(e.target.value);
        this.setState({
            user : {
                ...this.state.user,
                [e.target.name] : e.target.value
            }, 
        })
    }

    handleSaveUser =()=>{
        const {user}  = this.state;
        this.props.saveUser(user);
    }
    render(){
        return (
            <div style={{marginBottom: '20px'}}>
                <h2>Add New User</h2>
                <div className="container" >
                        <input type="text" name="name" onChange= {this.handleChange} placeholder="Your name.." />
                        <input  type="text" name="designation" onChange= {this.handleChange} placeholder="Your Designation" />
                        <input type="text" name="skills" onChange= {this.handleChange} placeholder="Your Skills" />
                        <button onClick = {this.handleSaveUser}>Save</button>
                </div>
            </div>
        );
    }    
}

export default AddUser;