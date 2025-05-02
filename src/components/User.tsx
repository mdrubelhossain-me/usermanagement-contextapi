import React from 'react';

type UserType = {
  id: number;
  name: string;
};

type UserProps = {
  user: UserType;
  handleDeleteUser: (id: number) => void;
};

const User: React.FC<UserProps> = ({ user, handleDeleteUser }) => {
  const { id, name } = user;

  const handleDelete = () => {
    handleDeleteUser(id);
  };

  return (
    <div className='user'>
      <h1>{id} - {name}</h1>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default User;
