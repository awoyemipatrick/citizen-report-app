import { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from "./contexts/AuthContext";
import {
  Dashboard,
  Explore,
  Home,
  Login,
  Post,
  PostForm,
  Register,
  SingleReport,
} from "./config";


// Objective:
// - The objective of the App function is to render the different 
// routes of the application based on the user's authentication status.

// Flow:
// - The function first uses the useContext hook to get the current user's authentication status.
// - It then defines a ProtectedRoute component that checks if the user is authenticated and redirects to the login page if not.
// - The function then uses the Routes and Route components from react-router-dom to define the different routes of the application.
// - Each route is wrapped in the ProtectedRoute component to ensure that only authenticated users can access them.

// Outputs:
// - The main output of the function is the rendered application with its different routes and components.
// - The function also returns the ProtectedRoute component that is used to wrap the different routes.

// Additional aspects:
// - The function uses different components such as Dashboard, Home, Login, Register, Post, PostForm, and SingleReport to render the different pages of the application.
// - The function also uses different hooks such as useNavigate, useState, useEffect, and useContext to manage the state and behavior of the application.
// - The function uses Firebase and Firestore to handle user authentication and data storage.


function App() {
  const currentUser  = useContext(AuthContext);

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }
    return children;
  };
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />

        <Route path="/explore" element={<Explore />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/home/:id"
          element={
            <ProtectedRoute>
              <SingleReport />
            </ProtectedRoute>
          }
        />
        <Route
          path="/post"
          element={
            <ProtectedRoute>
              <Post />
            </ProtectedRoute>
          }
        />
        <Route
          path="/postForm"
          element={
            <ProtectedRoute>
              <PostForm />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
