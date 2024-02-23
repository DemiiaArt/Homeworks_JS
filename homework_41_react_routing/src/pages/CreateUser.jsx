import React, { useState } from "react";
import Container from "@mui/material/Container";
import InputField from "../components/form/InputField.jsx";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

import { addUser } from "../services/userDataServices.js";

export default function CreateUser() {
  const [newUser, setNewUser] = useState({ address: {} });

  const handleSubmitUser = (e) => {
    e.preventDefault();
    addUser(newUser)
      .then(() => {
        setNewUser({});
      })
      .catch((error) => {
        console.error("Error adding user:", error);
      });
    e.target.reset();
  };

  return (
    <Container maxWidth="sm">
      <h3>Create User</h3>
      <form onSubmit={handleSubmitUser}>
        <Stack spacing={2}>
          <InputField
            liftValue={(value) =>
              setNewUser((prevState) => ({ ...prevState, name: value }))
            }
            type="text"
            input="Name"
            defVal={newUser.name}
          />
          <InputField
            liftValue={(value) =>
              setNewUser((prevState) => ({ ...prevState, username: value }))
            }
            type="text"
            input="Username"
            defVal={newUser.username}
          />
          <InputField
            liftValue={(value) =>
              setNewUser((prevState) => ({ ...prevState, email: value }))
            }
            type="email"
            input="Email"
            defVal={newUser.email}
          />
          <InputField
            liftValue={(value) =>
              setNewUser((prevState) => ({
                ...prevState,
                address: { ...prevState.address, city: value },
              }))
            }
            type="text"
            input="City"
            defVal={newUser.address?.city || ""}
          />
          <InputField
            liftValue={(value) =>
              setNewUser((prevState) => ({
                ...prevState,
                address: { ...prevState.address, street: value },
              }))
            }
            type="text"
            input="Street"
            defVal={newUser.address?.city || ""}
          />
          <Stack spacing={2} direction="row">
            <Link to="/">
              <Button variant="outlined">Back</Button>
            </Link>
            <Button variant="contained" type="submit">
              Save
            </Button>
          </Stack>
        </Stack>
      </form>
    </Container>
  );
}
