import React from "react";


export type User = {
  id: number;
  name: string;
};

type UserProps = {
  user: User;
  handleDeleteUser: (id: number) => void;
};

const User: React.FC<UserProps> = ({ user, handleDeleteUser }) => {
  const { id, name } = user;

  return (
    <div className="user">
      <h1>{id} - {name}</h1>
      <button onClick={() => handleDeleteUser(id)}>Delete</button>
    </div>
  );
};

export default User;
