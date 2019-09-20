import React from 'react';

export default function Users({users}) {
    return (
        <div>
            {users.map(user => 
                <p key={user.id}>Welcome {user.name}, your email address is {user.email}</p>)}
        </div>
    )
}