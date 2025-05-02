import React, { useState } from "react";

const NewUser: React.FC = () => {
  const [username, setUsername] = useState("");

  const handleUserNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newUser = { id: new Date().getTime().toString(), username: username };
    console.log(newUser);
    setUsername(""); // Clear the input field after submission
    // Assuming you have a function to add the new user to the list
  };

  return (
    <div>
      <h1>New User</h1>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={username}
          onChange={handleUserNameChange}
        />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default NewUser;
