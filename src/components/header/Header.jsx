import { Link } from "react-router-dom";
import classes from "./Header.module.css";

export default function HeaderCm() {
  return (
    <header className={classes.headerContainer}>
      <h1>Header</h1>
      <div>
        <Link to="/"> To game </Link>
        <Link to="/about"> To About </Link>
      </div>
    </header>
  );
}
