import React, { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';

function Users() {
  const [usersList, setUsersList] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setUsersList(data))
      .catch((err) => console.log(err.message));
  }, []);
  console.log(usersList);
  return (
    <div>
      <h3>Here is the list of our users:</h3>

      <div className="users__list">
        {usersList?.map((user) => (
          <Link key={user?.id} to={`${user?.id}`}>
            {user?.name}
          </Link>
        ))}
      </div>

      <Outlet />
    </div>
  );
}

export default Users;
