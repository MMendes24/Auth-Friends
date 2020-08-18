import React, { useState, useEffect } from 'react'

import axiosWithAuth from '../utils/axiosWithAuth'

const intialFriends = []

const FriendsList = () => {
    const [ friends, setFriends ] = useState(intialFriends)

    useEffect( () => {
        axiosWithAuth()
        .get('/api/friends')
        .then(res => {
            console.log(res.data)
            setFriends(res.data)
        })
    }, [])

    return (
        <section className="friends-container">
            <h1>My friends...</h1>
            {friends.map(friend => {
                return <h3 key={friend.id}>{friend.name}</h3>
            })}
        </section>
    )
}

export default FriendsList