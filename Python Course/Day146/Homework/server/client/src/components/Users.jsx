import React, { useState, useEffect } from 'react';

function Users() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/api/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, []);

    return (
        <div>
            <h2>Users</h2>
            {users.map(user => (
                <div key={user.id}>
                    <img src={user.profilePic} alt={user.name} style={{ maxWidth: '50px', borderRadius:'50%'}} />
                    <p>{user.name}</p>
                </div>
            ))}
        </div>
    );
}
export default Users
