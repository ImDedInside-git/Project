import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form";
import Navbar from "scenes/navbar";
import Loginbar from "scenes/navbar/loginbar.jsx";


const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  return (
    <Box>
      {/* Navbar for testing purposes */}
      {/* <Navbar /> */}

      {/* Loginbar is the navbar dedicated for the login page */}
      <Loginbar />
      

      <Box
        width={isNonMobileScreens ? "50%" : "93%"}
        p={isNonMobileScreens ? "2rem" : "1.5rem"}
        m={isNonMobileScreens ? "6rem auto" : "2rem auto"}
        borderRadius={isNonMobileScreens ? "2.5rem" : "1rem"}
        backgroundColor={theme.palette.background.alt}
      >
        <Typography fontWeight="500" variant="h5" sx={{ mb: "2.5rem" }}>
          Welcome to Falcon Airlines
        </Typography>
        <Form />
      </Box>
    </Box>
  );
};

export default LoginPage;
