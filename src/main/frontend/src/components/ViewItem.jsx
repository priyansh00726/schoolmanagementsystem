import { Avatar, Card } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getStudentById } from "../services/StudentService";
import { getTeacherById } from "../services/TeacherService";

const ViewItem = ({ entity }) => {
  const [item, setItem] = useState({});
  const { id } = useParams();

  useEffect(() => {}, []);

  const division =
    entity === "students" ? (
      <div>
        <div>{`Email Address : ${item.email}`}</div>
        <div>{`Mobile No. : ${item.mobile}`}</div>
        <div>{`Class : ${item.class_num}`}</div>
      </div>
    ) : (
      <div>
        <div>{`Email Address : ${item.email}`}</div>
        <div>{`Mobile No. : ${item.mobile}`}</div>
        {item.class_num !== 0 ? (
          <div>
            <div>{`Class Teacher : True`}</div>
            <div>{`Class : ${item.class_num}`}</div>
          </div>
        ) : (
          <div>{`Class Teacher : False`}</div>
        )}
        <div>{`Salary : ${item.salary}`}</div>
      </div>
    );

  useEffect(() => {
    if (entity === "students") {
      const fetchResponse = async () => {
        try {
          const myItem = await getStudentById(id);
          setItem(myItem);
        } catch (err) {
          console.log(err);
        }
      };
      fetchResponse();
    } else {
      const fetchResponse = async () => {
        try {
          const myItem = await getTeacherById(id);
          setItem(myItem);
        } catch (err) {
          console.log(err);
        }
      };
      fetchResponse();
    }
  }, [entity, id]);

  return (
    <main className="ViewList">
      <Card>
        <Avatar sx={{ bgcolor: deepPurple[500] }}>
          {String(item.f_name).toUpperCase().charAt(0)}
        </Avatar>
        <h2>{`${item.f_name} ${item.l_name}`}</h2>
        {division}
      </Card>
    </main>
  );
};

export default ViewItem;
