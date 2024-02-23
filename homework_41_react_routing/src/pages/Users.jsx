import React, { useState, useEffect } from "react";
import getUsers, { deleteUser } from "../services/userDataServices.js";
import List from "@mui/material/List";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";

import UserRow from "../components/usersList/UserRow.jsx";

export default function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    (async () => {
      let todo = await getUsers();
      setUsers(todo);
    })();
  }, []);

  const handleDeleteUser = (id) => {
    (async () => {
      await deleteUser(id);
      setUsers((prevState) => prevState.filter((item) => item.id !== id));
    })();
  };
  return (
    <Container maxWidth="sm">
      <section>
        <h1>Users</h1>
        <a href="/CreateUser">
          <Button variant="contained">Create User</Button>
        </a>
        <List>
          {users.map((item) => (
            <UserRow deleteUser={handleDeleteUser} key={item.id} user={item} />
          ))}
        </List>
      </section>
    </Container>
  );
}
