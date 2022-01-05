import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { deepPurple } from "@mui/material/colors";

import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";

const ListItems = ({ entity, items, setItems }) => {
  const handleDelete = (e, id) => {
    e.preventDefault();
    const itemsList = items.filter(student => student.id !== id);
    setItems(itemsList);
  };

  const handleEdit = (e, id) => {
    e.preventDefault();
  };

  return (
    <List
      className="List"
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
    >
      {items.map(item => (
        <Link
          key={item.id}
          to={
            entity === "students"
              ? `/api/v1/students/${item.id}`
              : `/api/v1/teachers/${item.id}`
          }
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: deepPurple[500] }}>
                {item.f_name.toUpperCase().charAt(0)}
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={`${item.f_name} ${item.l_name}`}
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    <main>
                      {item.email}
                      <br />
                      {item.mobile}
                    </main>
                  </Typography>
                  <Button
                    variant="outlined"
                    endIcon={<DeleteIcon />}
                    onClick={e => handleDelete(e, item.id)}
                  >
                    Delete
                  </Button>
                  <Button
                    variant="contained"
                    component="span"
                    onClick={e => handleEdit(e, item.id)}
                  >
                    Update
                  </Button>
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
        </Link>
      ))}
    </List>
  );
};

export default ListItems;
