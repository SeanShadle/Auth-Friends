import React, {useEffect, useState} from 'react';
import {useParams, Link} from "react-router-dom"
import {axiosWithAuth} from '../utils/axiosWithAuth'



export default function Friend(){
    const [friend, setFriend] = useState({});
    const {id} = useParams();
    useEffect(() => {
        axiosWithAuth()
        .get(`/api/friends/${id}`)
        .then(res => setFriend(res.data))
    },[])
    return (
        <div className="friend">
                <h3>{friend.name}</h3>
            <p>Age: {friend.age}</p>
            <p>Email: {friend.email}</p>
        </div>
    )
}