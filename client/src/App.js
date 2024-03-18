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
            <Route path="/login" element={<LoginPage />} />

            

            <Route
              path="/"
              element={isAuth ? <HomePage /> : <Navigate to="/login" />}
            />
            
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
            <Route
              path="/admin"
              element={isAuth && isAdmin ? <AdminDashboard /> : <Navigate to="/" />}
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
