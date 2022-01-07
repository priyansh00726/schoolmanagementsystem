import { Routes, Route, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import ListItems from "./ListItem";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Header from "./Header";
import { getAllTeachers } from "../services/TeacherService";
import AddOrUpdateItem from "./AddOrUpdateItem";
import ViewItem from "./ViewItem";

const Teacher = () => {
  const [teachers, setTeachers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchResponse = async () => {
      try {
        const data = await getAllTeachers();
        setTeachers(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchResponse();
  }, []);

  const handleNew = () => {
    navigate("new");
  };

  return (
    <div>
      <Header title="Teacher" />

      <Routes>
        <Route
          path=""
          element={
            <>
              <span className="plus-icon">
                <Button
                  variant="outlined"
                  endIcon={<AddIcon />}
                  onClick={handleNew}
                >
                  ADD NEW
                </Button>
              </span>
              <ListItems entity="teachers" />
            </>
          }
        />
        <Route
          path="new"
          element={
            <AddOrUpdateItem
              entity="teachers"
              method="add"
              items={teachers}
              setItems={setTeachers}
            />
          }
        />
        <Route
          path=":id"
          element={
            <AddOrUpdateItem
              entity="teachers"
              method="update"
              items={teachers}
              setItems={setTeachers}
            />
          }
        />
        <Route path="view/:id" element={<ViewItem entity="teachers" />} />
      </Routes>
    </div>
  );
};

export default Teacher;
