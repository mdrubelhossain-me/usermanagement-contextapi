import React, { useContext } from "react";
import User from "./User";
import { UserContext } from "../context/UserContext";

// Define the User type here
type User = {
  id: number;
  name: string;
};

type UserContextType = {
  users: User[];
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
};

const Users: React.FC = () => {
  const userContext = useContext(UserContext) as UserContextType;

  if (!userContext) {
    throw new Error("UserContext must be used within a UserProvider");
  }

  const { users, setUsers } = userContext;

  const handleDeleteUser = (id: number) => {
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <div>
      <div className="users">
        {users.map(user => (
          <User key={user.id} user={user} handleDeleteUser={handleDeleteUser} />
        ))}
      </div>
    </div>
  );
};

export default Users;
