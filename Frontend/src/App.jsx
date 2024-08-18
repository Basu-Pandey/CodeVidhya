import React from "react";
import Home from "./Home/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import Courses from "./Courses/Courses";
import Signup from "./components/Signup";
import toast, { Toaster } from "react-hot-toast";
import { useAuth } from "./Context/AuthProvider";

const App = () => {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);

  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route
            path="/course"
            element={authUser ? <Courses></Courses> : <Navigate to="/https://code-vidhya-p3uu.vercel.app/signup" />}
          ></Route>
          <Route path="/https://code-vidhya-p3uu.vercel.app/signup" element={<Signup></Signup>}></Route>
        </Routes>
        <Toaster />
      </div>
    </>
  );
};

export default App;
