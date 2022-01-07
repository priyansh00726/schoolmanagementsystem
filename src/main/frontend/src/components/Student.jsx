import { Routes, Route, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import ListItems from "./ListItem";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Header from "./Header";
import { getAllStudents } from "../services/StudentService";
import AddOrUpdateItem from "./AddOrUpdateItem";
import ViewItem from "./ViewItem";

const Student = () => {
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchResponse = async () => {
      try {
        const data = await getAllStudents();
        setStudents(data);
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
      <Header title="Student" />
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
              <ListItems entity="students" />
            </>
          }
        />
        <Route
          path="new"
          element={
            <AddOrUpdateItem
              entity="students"
              method="add"
              items={students}
              setItems={setStudents}
            />
          }
        />
        <Route
          path=":id"
          element={
            <AddOrUpdateItem
              entity="students"
              method="update"
              items={students}
              setItems={setStudents}
            />
          }
        />
        <Route path="view/:id" element={<ViewItem entity="students" />} />
      </Routes>
    </div>
  );
};

export default Student;
