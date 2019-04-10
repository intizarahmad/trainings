import React, { Component } from 'react';
import './users.css';
import User from './user';
import AddUser from './addUser';
class Users extends Component {
    constructor(props) {
        super(props);
        this.state ={
            isShowUser: false,
            buttonText: 'Add New User',
            usersDetails : [
                {
                    id: '1',
                    name :'Intizar Ahmad',
                    designation: 'ML',
                    skills: 'React Js, NodeJs angular JS'
                },
                {
                    id: '2',
                    name :'Akash Agarwal',
                    designation: 'SSE',
                    skills: 'React Js, NodeJs angular JS'
                },
                {
                    id: '3',
                    name :'Ravi Yadav',
                    designation: 'ML',
                    skills: 'React Js, NodeJs angular JS'
                }
            ]
        } 
    }

    deleteUser =(id)=>{
        const {usersDetails}  = this.state; 
        this.setState({
            usersDetails : usersDetails.filter(item=>item.id !==id)
        });
    }
    
    saveUserDetails = (user)=>{
        console.log('saveUserDetails', user);
        let newUser = {...user, id: 10}
        const {usersDetails}  = this.state; 
        this.setState({
            usersDetails : usersDetails.concat(newUser)
        });
    }
    toggleUser = ()=>{
            this.setState({
                isShowUser: !this.state.isShowUser,
                buttonText: this.state.isShowUser?'Add New User':'Hide User'
            })
    }
    render() {
        const {usersDetails, buttonText, isShowUser} = this.state;
        
        return (
            <div style={{marginTop: '20px'}}>
                <button style ={{width:'200px', marginBottom: '20px'}} onClick= {this.toggleUser} >{buttonText}</button>
               {
                   isShowUser && <AddUser saveUser={this.saveUserDetails}/>
               } 
                <div >
                {
                    usersDetails.length > 0  ?
                    usersDetails.map((item)=>{
                        return <User userdetails={item} key={item.id} onDelete = {this.deleteUser}/>
                    })
                    :'No data found'
                }
                </div>
                {/* <div className="card">
                    <h1>{usersDetails['0'].name}</h1>
                    <p className="title">{usersDetails['0'].designation}</p>
                    <p>{usersDetails['0'].skills}</p>
                    <p><button>Delete</button></p>
                </div>
                <div className="card">
                    <h1>{usersDetails['1'].name}</h1>
                    <p className="title">{usersDetails['1'].designation}</p>
                    <p>{usersDetails['0'].skills}</p>
                    <p><button>Delete</button></p>
                </div>
                <div className="card">
                    <h1>{usersDetails['2'].name}</h1>
                    <p className="title">{usersDetails['2'].designation}</p>
                    <p>{usersDetails['0'].skills}</p>
                    <p><button>Delete</button></p>
                </div> */}
            </div>
        );
    }
}

export default Users;