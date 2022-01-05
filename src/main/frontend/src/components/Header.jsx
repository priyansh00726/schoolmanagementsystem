import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const Header = ({ title }) => {
  return (
    <header>
      <h1>
        {title !== "About" && title !== "Missing"
          ? `${title} Management System`
          : title === "About"
          ? "About Us"
          : "Missing Page"}
      </h1>
      <div className="nav">
        <Link to="/api/v1/students">
          <Button size="medium">Students</Button>
        </Link>
        <Link to="/api/v1/teachers">
          <Button size="medium">Teachers</Button>
        </Link>
        <Link to="/api/v1/about">
          <Button size="medium">About Us</Button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
