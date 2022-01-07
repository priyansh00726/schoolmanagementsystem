import { Button, Card, TextField } from "@mui/material";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  editStudentDetails,
  getStudentById,
  postNewStudent,
} from "../services/StudentService";
import {
  editTeacherDetails,
  getTeacherById,
  postNewTeacher,
} from "../services/TeacherService";

const AddOrUpdateItem = ({ entity, method, items, setItems }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [className, setClassName] = useState("");
  const [salary, setSalary] = useState("");
  const [item, setItem] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (method === "update") {
      if (entity === "students") {
        const fetchResponse = async () => {
          try {
            const myItem = await getStudentById(id);
            const { f_name, l_name, email, mobile, class_num } = myItem;
            setItem(myItem);
            setFirstName(f_name);
            setLastName(l_name);
            setEmail(email);
            setMobile(mobile);
            setClassName(class_num);
          } catch (err) {
            console.log(err);
          }
        };
        fetchResponse();
      } else {
        const fetchResponse = async () => {
          try {
            const myItem = await getTeacherById(id);
            const { f_name, l_name, email, mobile, class_num, salary } = myItem;
            setItem(myItem);
            setFirstName(f_name);
            setLastName(l_name);
            setEmail(email);
            setMobile(mobile);
            setClassName(class_num);
            setSalary(salary);
          } catch (err) {
            console.log(err);
          }
        };
        fetchResponse();
      }
    }
  }, [method, entity, items, id]);

  const handleSave = () => {
    if (method === "add") {
      console.log(item);
      if (entity === "students") {
        postNewStudent(item)
          .then(res => {
            navigate("../");
            console.log(res);
          })
          .catch(err => console.log(err));
      } else {
        postNewTeacher(item)
          .then(res => {
            navigate("../");
            console.log(res);
          })
          .catch(err => console.log(err));
      }
    } else {
      console.log(item);
      if (entity === "students") {
        editStudentDetails(id, item)
          .then(res => {
            navigate("../");
            console.log(res);
          })
          .catch(err => console.log(err));
      } else {
        editTeacherDetails(id, item)
          .then(res => {
            navigate("../");
            console.log(res);
          })
          .catch(err => console.log(err));
      }
    }
  };

  const handleCancel = () => {
    navigate("../");
  };

  const handleFirstName = e => {
    const value = e.target.value;
    let myItem = { ...item, f_name: value };
    setItem(myItem);
    setFirstName(value);
  };

  const handleLastName = e => {
    const value = e.target.value;
    let myItem = { ...item, l_name: value };
    setItem(myItem);
    setLastName(value);
  };

  const handleEmail = e => {
    const value = e.target.value;
    let myItem = { ...item, email: value };
    setItem(myItem);
    setEmail(value);
  };

  const handleMobile = e => {
    const value = e.target.value;
    if (String(value).includes("^[0-9]*"))
      console.log("Enter the right number");
    else {
      let myItem = { ...item, mobile: value };
      setItem(myItem);
      setMobile(value);
    }
  };

  const handleClass = e => {
    const value = e.target.value;
    if (String(value).includes("^[0-9]*"))
      console.log("Enter the right number");
    else {
      let myItem = { ...item, class_num: value };
      setItem(myItem);
      setClassName(value);
    }
  };

  const handleSalary = e => {
    const value = e.target.value;
    if (String(value).includes("^[0-9]*"))
      console.log("Enter the right number");
    else {
      let myItem = { ...item, salary: value };
      setItem(myItem);
      setSalary(value);
    }
  };

  return (
    <main className="List">
      <Card sx={{ maxWidth: 400, minHeight: 400 }}>
        <TextField
          required
          id="outlined-basic"
          label="First Name"
          variant="outlined"
          value={firstName}
          onChange={e => handleFirstName(e)}
        />
        <TextField
          required
          id="outlined-basic"
          label="Last Name"
          variant="outlined"
          value={lastName}
          onChange={e => handleLastName(e)}
        />
        <TextField
          required
          id="outlined-basic"
          label="Email Address"
          variant="outlined"
          value={email}
          onChange={e => handleEmail(e)}
        />
        <TextField
          required
          id="outlined-basic"
          label="Mobile No."
          variant="outlined"
          value={mobile}
          onChange={e => handleMobile(e)}
        />
        <TextField
          required
          id="outlined-basic"
          label="Class"
          variant="outlined"
          value={className}
          onChange={e => handleClass(e)}
        />
        {entity === "teachers" ? (
          <TextField
            required
            id="outlined-basic"
            label="Salary"
            variant="outlined"
            value={salary}
            onChange={e => handleSalary(e)}
          />
        ) : (
          <></>
        )}
        <p className="ListItemButton">
          <Button
            variant="contained"
            style={{ width: "100px" }}
            color="success"
            onClick={handleSave}
          >
            {method === "add" ? "Save" : "Update"}
          </Button>
          <Button
            variant="contained"
            style={{ width: "100px" }}
            component="span"
            onClick={handleCancel}
          >
            Cancel
          </Button>
        </p>
      </Card>
    </main>
  );
};

export default AddOrUpdateItem;
