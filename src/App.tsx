import { useState } from "react";
import Users from "./components/Users";
import NewUser from "./components/NewUser";
import { UserContext } from "./context/UserContext";

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

  return (
    <UserContext.Provider value={{ users, setUsers }}>
      <div>
        <NewUser />
        <br />
        <Users />
      </div>
    </UserContext.Provider>
  );
}

export default App;
