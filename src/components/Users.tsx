import React from 'react';
import User from './User';

type Users = {
  id: number;
  name: string;
};

type UsersProps = {
  users: Users[];
  handleDeleteUser: (id: number) => void;
};

const Users: React.FC<UsersProps> = ({ users, handleDeleteUser }) => {
  return (
    <div>
      <div className="users">
        {users.map(user => <User key={user.id} user={user} handleDeleteUser={handleDeleteUser} />
    )}
      </div>
    </div>
  );
};

export default Users;
