import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import styles from "./styles/App.module.scss";
import UserProfile from "./components/UserProfile";
import Register from "./components/Register/index";
import Login from "./components/Login/index";
import Huertas from "./components/Pages/Huertas";
import HuertaEspecifica from "./components/Pages/HuertaEspecifica";
import Information from "./components/Information";
import TaskPage from "./components/Task/TaskPage";
import TaskProvider from "./components/Task/Context/TaskProvider";
import UpdateTask from "./components/Task/UpdateTask";
import Planner from "./components/Pages/Planner";
import { isLogin } from "./PrivateRoute/isLogin";
import AuthProvider from "./components/AuthContext/AuthProvider";
import NotFound from "./components/Pages/NotFound/index";

const App = () => {
  return (
    <div className={styles.appContainer}>
      <BrowserRouter>
        <AuthProvider>
          <TaskProvider>
            <Routes>
              <Route path="/" element={isLogin() ? <Huertas /> : <Login />} />
              <Route
                path="/login"
                element={isLogin() ? <Huertas /> : <Login />}
              />
              <Route
                path="/register"
                element={isLogin() ? <Navigate to="/" replace /> : <Register />}
              />
              <Route
                path="/userProfile"
                element={isLogin() ? <UserProfile /> : <Login />}
              />
              <Route
                path="orchard/:id"
                element={isLogin() ? <HuertaEspecifica /> : <Login />}
              />
              <Route
                path="/task"
                element={isLogin() ? <TaskPage /> : <Login />}
              />
              <Route
                path="/task/update/:id"
                element={isLogin() ? <UpdateTask /> : <Login />}
              />
              <Route
                path="/info"
                element={isLogin() ? <Information /> : <Login />}
              />
              <Route
                path="/planner"
                element={isLogin() ? <Planner /> : <Login />}
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </TaskProvider>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
