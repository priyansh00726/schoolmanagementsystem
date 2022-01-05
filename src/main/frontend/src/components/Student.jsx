import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import ListItems from "./ListItem";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Header from "./Header";
import { getAllStudents } from "../services/StudentService";

const Student = () => {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const data = await getAllStudents();
        setStudents(data);
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchItems();
  }, []);

  const handleNew = () => {};

  return (
    <div>
      <Header title="Student" />
      <span className="plus-icon">
        <Button variant="outlined" endIcon={<AddIcon />} onClick={handleNew}>
          ADD NEW
        </Button>
      </span>
      <Routes>
        <Route
          path=""
          element={
            <ListItems
              entity="students"
              items={students}
              setItems={setStudents}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default Student;
