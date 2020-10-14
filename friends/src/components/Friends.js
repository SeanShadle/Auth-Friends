import React from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';

import {AddFriend} from '../components/AddFriend';

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

    handleSubmit = friends => this.setState({friends});

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
                <AddFriend handleSubmit={this.handleSubmit} />
            </div>
        )
    }
}

export default Friends;