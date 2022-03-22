import React, { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Loader from "./components/Loader";
import { useAuth } from "./hooks/authListner";
import { AuthProvider } from "./provider/AuthProvider";

function App() {
  const user = useAuth();

  const Home = lazy(() => import("./pages/Home"));
  const Login = lazy(() => import("./pages/Login"));
  const Explore = lazy(() => import("./pages/Explore"));
  const Library = lazy(() => import("./pages/Library"));
  const YourPosts = lazy(() => import("./pages/YourPosts"));
  const Search = lazy(() => import("./pages/Search"));
  const Followers = lazy(() => import("./pages/Followers"));
  const Create = lazy(() => import("./pages/Create"));
  const Profile = lazy(() => import("./pages/Profile"));
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <AuthProvider>
          <Routes>
            <Route
              path="/"
              element={user ? <Home /> : <Navigate to="/login" />}
            />
            <Route
              path="/login"
              element={!user ? <Login /> : <Navigate to="/" />}
            />
            <Route
              path="/explore"
              element={user ? <Explore /> : <Navigate to="/login" />}
            />
            <Route
              path="/library"
              element={user ? <Library /> : <Navigate to="/login" />}
            />
            <Route
              path="/your_posts"
              element={user ? <YourPosts /> : <Navigate to="/login" />}
            />
            <Route
              path="/search/:caption"
              element={user ? <Search /> : <Navigate to="/login" />}
            />
            <Route
              path="/profile/:uuid"
              element={user ? <Profile /> : <Navigate to="/login" />}
            />
            <Route
              path="/followers"
              element={user ? <Followers /> : <Navigate to="/login" />}
            />
            <Route
              path="/create"
              element={user ? <Create /> : <Navigate to="/login" />}
            />
          </Routes>
        </AuthProvider>
      </Suspense>
    </Router>
  );
}

export default App;
