import React, { useState } from "react";

type NewUserProps = {
  handleAddUser: (user: { id: number; name: string }) => void;
};

const NewUser: React.FC<NewUserProps> = ({ handleAddUser }) => {
  const [name, setName] = useState("");

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newUser = {
      id: Date.now(),
      name: name,
    };
    handleAddUser(newUser);
    setName(""); // Clear the input field
  };

  return (
    <div>
      <h1>New User</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleNameChange}
        />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default NewUser;
