import { useState } from "react";
import Users from "./components/Users";

function App() {
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Doe" },
    { id: 3, name: "Jack Doe" },
    { id: 4, name: "Jill Doe" },
    { id: 5, name: "Joe Doe" },
    { id: 6, name: "Jim Doe" },
    { id: 7, name: "Judy Doe" },
    { id: 8, name: "Jake Doe" },
    { id: 9, name: "Jessie Doe" },
    { id: 10, name: "Jordan Doe" },
  ]);

  const handleDeleteUser = (id: number) => {
    const newUsers = users.filter((user) => user.id !== id);
    setUsers(newUsers);
  };

  return (
    <div>
      <Users users={users} handleDeleteUser={handleDeleteUser} />
    </div>
  );
}

export default App;
