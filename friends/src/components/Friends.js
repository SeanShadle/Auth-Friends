import React from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import {AddFriend} from '../components/AddFriend';
import Friend from './Friend';

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
    
    deleteFriend = id => {
        axiosWithAuth().delete(`/api/friends/${id}`)
        .then(res => {
            this.setState({
                friends: res.data,
            })
        })
    }

    render(){
        console.log("Here it is:", this.state.friends);
        return (
            <div className="friend">
                {this.state.friends.map(friend => (
                <div className="friend-container">
                    <div className="name">
                        <Link to={`/friends/${friend.id}`}><p>{friend.name}</p></Link>
                    </div>
                    <div className="age">
                        <p>{friend.age}</p>
                    </div>
                    <div className="email">
                        <p>{friend.email}</p>
                    </div>
                    <button onClick={() => this.deleteFriend(friend.id)}>Delete Friend</button>
                </div>
                ))}
                <AddFriend handleSubmit={this.handleSubmit} />
            </div>
        )
    }
}

export default Friends;