import React from 'react';

import {axiosWithAuth} from '../utils/axiosWithAuth';

class Friends extends React.Component {
    state = {
        friends: [],
    };

    componentDidMount(){
        this.getData();
    }

    getData = () => {
        const token = window.localStorage.getItem('token');
        axiosWithAuth()
            .get("api/friends")
            .then(res => {
                this.setState({
                    friends: res.data,
                })
            })
    }

    render(){
        return (
            <div className="friend">
                {this.state.friends.map(friend => (
                <div className="friend-container">
                    <div className="name">
                        <p>{friend.name}</p>
                    </div>
                    <div className="age">
                        <p>{friend.age}</p>
                    </div>
                    <div className="email">
                        <p>{friend.email}</p>
                    </div>
                </div>
                ))}
               
            </div>
        )
    }
}

export default Friends