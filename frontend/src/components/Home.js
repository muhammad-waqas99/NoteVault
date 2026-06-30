import { Navigate } from "react-router-dom";
import Notes from "./Notes";
import AddNote from "./AddNote";
import SkeletonNote from "./SkeletonNote";

const Home = () => {
  if (!localStorage.getItem("token")) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="nv-home-wrapper">
      <AddNote />
      <Notes />

     
    </div>
  );
};

export default Home;