import React, {useState} from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth'

const initialState = {
    name: "",
    age: "",
    email: ""
}

export const AddFriend = props => {
    
    const [friendInfo, setFriendInfo] = useState(initialState)


    const handleChange = e => {
        setFriendInfo({
            ...friendInfo,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth()
            .post('/api/friends', friendInfo)
            .then(res => {
                props.handleSubmit(res.data)
                setFriendInfo(initialState)
            })
            .catch(err => {
                console.log(err)
            })
    }


    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={friendInfo.name}
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    name="age"
                    placeholder="Age"
                    value={friendInfo.age}
                    onChange={handleChange}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={friendInfo.email}
                    onChange={handleChange}
                />
                <button className="addFriend">Add Friend</button>
            </form>
        </div>
    )
}