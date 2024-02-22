import React, {useState} from "react";
import Form from '../components/form/Form.jsx'
import Container from '@mui/material/Container';
import InputField from "../components/form/InputField.jsx";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Switch, Route, Link } from "react-router-dom";

import getUsers, {addItem} from '../services/userDataServices.js'

export default function CreateUser() {
    const [newUser, setNewUser] = useState({})
    
    const handleSubmitUser = (e) => {
        e.preventDefault();
        addItem(newUser).then(() => {
            setNewUser({});
        }).catch(error => {
            console.error("Error adding user:", error);
        });
        console.log(getUsers());
        // e.target.reset();
    } 

    console.log(newUser);
  return (
    <Container maxWidth="sm">
      <h3>Create User</h3>
      {/* <Form onSubmitForm={handleSubmitUser} setUser={setNewUser}/> */}
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
              setNewUser((prevState) => ({ ...prevState, city: value }))
            }
            type="text"
            input="City"
            defVal={newUser.address?.city || ""}
          />
          <InputField
            liftValue={(value) =>
              setNewUser((prevState) => ({ ...prevState, street: value }))
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
