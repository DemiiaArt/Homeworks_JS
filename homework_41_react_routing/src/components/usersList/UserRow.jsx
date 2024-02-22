import React from "react";

import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";

import { Switch, Route, Link } from "react-router-dom";

export default function UserRow({deleteUser, user }) {
  return (
    <ListItem>
      <ListItemText primary={user.name} />
      <Stack direction="row" spacing={2}>
        <Button
          color="primary"
          size="medium"
          variant="outlined"
          href={`/user/${user.id}`}
          endIcon={<SendIcon />}
        >
          Edit
        </Button>

        <Button
          color="primary"
          size="medium"
          variant="outlined"
          onClick={() => deleteUser(user.id)}
          startIcon={<DeleteIcon />}
        >
          Delete
        </Button>
      </Stack>
    </ListItem>
  );
}
