import React, { useState, useEffect } from "react";
import { getUserInfo } from "../services/userDataServices.js";
// import Form from "../components/form/Form.jsx";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import Container from "@mui/material/Container";
import InputField from "../components/form/InputField.jsx";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import { editItem } from "../services/userDataServices.js";

export default function User() {
  const [user, setUser] = useState({});
  const { userId } = useParams();

  useEffect(() => {
    (async () => {
      let item = await getUserInfo(userId);
      setUser(item);
    })();
  }, [userId]);

  const handleEditUser = async (e) => {
    e.preventDefault();
    try {
      await editItem(userId, user);
      // console.log("User data updated successfully:", user);
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  return (
    <Container maxWidth="sm">
      <h4>User: {user.name}</h4>
      <form onSubmit={handleEditUser}>
        <Stack spacing={2}>
          <InputField
            liftValue={(value) =>
              setUser((prevState) => ({ ...prevState, name: value }))
            }
            type="text"
            input="Name"
            defVal={user.name}
          />
          <InputField
            liftValue={(value) =>
              setUser((prevState) => ({ ...prevState, username: value }))
            }
            type="text"
            input="Username"
            defVal={user.username}
          />
          <InputField
            liftValue={(value) =>
              setUser((prevState) => ({ ...prevState, email: value }))
            }
            type="email"
            input="Email"
            defVal={user.email}
          />
          <InputField
            liftValue={(value) =>
              setUser((prevState) => ({ ...prevState, city: value }))
            }
            type="text"
            input="City"
            defVal={user.address?.city || ""}
          />
          <InputField
            liftValue={(value) =>
              setUser((prevState) => ({ ...prevState, street: value }))
            }
            type="text"
            input="Street"
            defVal={user.address?.city || ""}
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
