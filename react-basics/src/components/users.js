import React, { Component } from 'react';
import './users.css';
class Users extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <div className="card">
                    <h1>John Doe</h1>
                    <p className="title">CEO & Founder, Example</p>
                    <p>Harvard University</p>
                    <p><button>Contact</button></p>
                </div>
                <div className="card">
                    <h1>John Doe</h1>
                    <p className="title">CEO & Founder, Example</p>
                    <p>Harvard University</p>
                    <p><button>Contact</button></p>
                </div>
                <div className="card">
                    <h1>John Doe</h1>
                    <p className="title">CEO & Founder, Example</p>
                    <p>Harvard University</p>
                    <p><button>Contact</button></p>
                </div>
            </div>
        );
    }
}

Users.propTypes = {

};

export default Users;