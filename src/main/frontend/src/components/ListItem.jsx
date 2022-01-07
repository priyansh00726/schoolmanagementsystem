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
import { Link, useNavigate } from "react-router-dom";
import { Card } from "@mui/material";
import { deleteStudent, getAllStudents } from "../services/StudentService";
import { deleteTeacher, getAllTeachers } from "../services/TeacherService";

const ListItems = ({ entity }) => {
  const navigate = useNavigate();
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    if (entity === "students") {
      const fetchResponse = async () => {
        try {
          const data = await getAllStudents();
          setItems(data);
        } catch (err) {
          console.log(err);
        }
      };
      fetchResponse();
    } else {
      const fetchResponse = async () => {
        try {
          const data = await getAllTeachers();
          setItems(data);
        } catch (err) {
          console.log(err);
        }
      };
      fetchResponse();
    }
  }, [entity]);

  const handleDelete = (e, id) => {
    e.preventDefault();
    const itemsList = items.filter(item => item.id !== id);
    setItems(itemsList);
    if (entity === "students") {
      const fetchItems = async () => {
        try {
          const data = await deleteStudent(id);
          console.log(data);
        } catch (err) {
          console.log(err);
        }
      };
      fetchItems();
    } else {
      const fetchItems = async () => {
        try {
          const data = await deleteTeacher(id);
          console.log(data);
        } catch (err) {
          console.log(err);
        }
      };
      fetchItems();
    }
  };

  const handleEdit = (e, id) => {
    e.preventDefault();
    navigate(`${id}`);
  };

  return (
    <main className="List">
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {items.map(item => (
          <Link
            style={{ textDecoration: "none" }}
            key={item.id}
            to={
              entity === "students"
                ? `/api/v1/students/view/${item.id}`
                : `/api/v1/teachers/view/${item.id}`
            }
          >
            <Card>
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
                        sx={{ display: "inline", textDecoration: "none" }}
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
                      <span className="ListItemButton">
                        <Button
                          style={{
                            backgroundColor: "rgb(172, 87, 87)",
                            color: "white",
                          }}
                          variant="outlined"
                          endIcon={
                            <DeleteIcon
                              style={{ color: "#fff" }}
                              // style={{ color: "rgb(197, 31, 31)" }}
                            />
                          }
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
                      </span>
                    </React.Fragment>
                  }
                />
              </ListItem>
            </Card>
            <Divider variant="middle" flexItem />
          </Link>
        ))}
      </List>
    </main>
  );
};

export default ListItems;
