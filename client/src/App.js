import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";
import HomePage from "scenes/homePage";
import BookingPage from "scenes/bookingPage";
import LoginPage from "scenes/loginPage";
import ProfilePage from "scenes/profilePage";
import CheckInPage from "scenes/checkInPage";
import ManagePage from "scenes/managePage";
import AdminDashboard from "scenes/adminDashboard"; // Import the AdminDashboard component
// import Test from "scenes/adminDashboard/test.jsx"; // Import the Testing component
import Test from "scenes/adminDashboard/blank.jsx"; 

import Forbidden from "scenes/adminDashboard/forbidden";
import NotFound from "scenes/adminDashboard/notfound";

function App() {
  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  const isAuth = Boolean(useSelector((state) => state.token));
  // const isAdmin = useSelector((state) => state.isAdmin); // Assuming you have a state variable indicating admin status
  const user = useSelector((state) => state.user);
  const isAdmin = user?.isAdmin === true; 


  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>

            // Route for login and default url pages
            <Route path="/login" element={<LoginPage />} />

            <Route
              path="/"
              element={isAuth ? <> {isAdmin ? <AdminDashboard /> : <HomePage />} </> : <Navigate to="/login" />}
            />
            

            // Routes for 404 and 403 pages
            <Route
              path="/forbidden"
              element={!isAdmin ? <Forbidden /> : <Navigate to="/" />}
            />
            <Route
              path="/notfound"
              element={ <NotFound /> }
            />
            <Route
              path="/*"
              element={isAuth ? <Navigate to="/notfound" /> : <Navigate to="/notfound" />}
            />

            // Routes for admin pages
            <Route
              path="/admin"
              element={isAuth && isAdmin ? <AdminDashboard /> : <Navigate to="/forbidden" />}
            />
            <Route
              path="/test"
              element={isAuth && isAdmin ? <Test /> : <Navigate to="/forbidden" />}
            />
            
            // Routes for the rest of the pages
            <Route
              path="/home"
              element={isAuth ? <HomePage /> : <Navigate to="/login" />}
            />
            <Route
              path="/book"
              element={isAuth ? <BookingPage /> : <Navigate to="/login" />}
            />
            <Route
              path="/checkin"
              element={isAuth ? <CheckInPage /> : <Navigate to="/login" />}
            />
            <Route
              path="/manage"
              element={isAuth ? <ManagePage /> : <Navigate to="/login" />}
            />
            
            
            
           




            {/* <Route
              path="/profile/:userId"
              element={isAuth ? <ProfilePage /> : <Navigate to="/" />}
            /> */}
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
