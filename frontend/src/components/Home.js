import { Navigate } from "react-router-dom";
import Notes from "./Notes";
import AddNote from "./AddNote";

const Home = () => {

  if (!localStorage.getItem("token")) {
    return <Navigate to="/login" replace />;
  }

  return (
    <>
      <AddNote />
      <Notes />
    </>
  );
};

export default Home;