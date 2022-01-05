import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import ListItems from "./ListItem";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Header from "./Header";
import { getAllTeachers } from "../services/TeacherService";

const Teacher = () => {
  const [teachers, setTeachers] = useState([]);
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const data = await getAllTeachers();
        setTeachers(data);
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
      <Header title="Teacher" />
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
              entity="teachers"
              items={teachers}
              setItems={setTeachers}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default Teacher;
