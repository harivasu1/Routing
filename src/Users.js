import React from 'react';
import { useParams } from 'react-router-dom';

const Users = () => {
    const {id}=useParams();
    return (
        <div>
            <h1>Users</h1>
            <p>This is users page</p>
            {id ? <b>USER ID :{id}</b>:<b>Select User Id</b>}
        </div>
    );
};

export default Users;