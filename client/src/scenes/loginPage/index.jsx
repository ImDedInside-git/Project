import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form";
import Footer from "scenes/footer";
import Loginbar from "scenes/navbar/loginbar.jsx";


const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  return (
    <Box>
      
      {/* Loginbar is the navbar dedicated for the login page */}
      <Loginbar />
    
      <Box
        width={isNonMobileScreens ? "50%" : "93%"}
        p={isNonMobileScreens ? "2rem" : "1.5rem"}
        m={isNonMobileScreens ? "4rem auto" : "1rem auto"}
        borderRadius={isNonMobileScreens ? "1.5rem" : "1rem"}
        backgroundColor={theme.palette.background.alt}
      >
        <Typography fontWeight="500" variant="h5" sx={{ mb: "2.5rem" }}>
          Welcome to Falcon Airlines
        </Typography>
        <Form />
      </Box>

      <Footer />
    </Box>
    
  );
};

export default LoginPage;
