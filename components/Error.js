import { useRouteError, Link } from "react-router-dom";
import ErrImg from "../icons/404 (2).png";
const Error = () => {
  const err = useRouteError();
  console.log(err);

  return (
    <div className="ErrPage">
      <img className="ErrorImg" src={ErrImg} alt="Error Img"></img>
      <h1>Oops! Restaurant not found....🫤</h1>
      <h2>{err.data}</h2>
      <button className="Err-btn">
        <Link to="/" style={{ textDecoration: "none" }}>
          Back Home
        </Link>
      </button>
    </div>
  );
};

export default Error;
