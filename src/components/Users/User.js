import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function User() {
  const { userId } = useParams();
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((err) => console.log(err.message));
  }, [userId]);

  return (
    <div>
      <h4>Here is Individual User:</h4>
      <p>{user?.id}</p>
      <p>{user?.name}</p>
      <p>{user?.username}</p>
    </div>
  );
}

export default User;
