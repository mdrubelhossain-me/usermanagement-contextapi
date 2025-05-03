import React, { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";

// Define the User type here directly
type User = {
  id: number;
  name: string;
};

type UserContextType = {
  users: User[];
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
};

const NewUser: React.FC = () => {
  const [name, setName] = useState("");

  const userContext = useContext(UserContext) as UserContextType;

  if (!userContext) {
    throw new Error("UserContext must be used within a UserProvider");
  }

  const { users, setUsers } = userContext;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmedName = name.trim();
    if (!trimmedName) return;

    const newUser: User = {
      id: Date.now(),
      name: trimmedName,
    };

    setUsers([...users, newUser]);
    setName("");
  };

  return (
    <div>
      <h1>New User</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default NewUser;
