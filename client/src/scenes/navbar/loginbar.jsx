import { useState } from "react";
import {
  Box,
  IconButton,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  DarkMode,
  LightMode,
  Help,
  Menu,
  Close,
  Refresh,
  Notifications
} from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { setMode } from "state";
import { useNavigate } from "react-router-dom";
import FlexBetween from "components/FlexBetween";
import logo from "../assets/logo2.png"


const Navbar = () => {
  const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isNonMobileScreens = useMediaQuery("(min-width: 700px)");

  const theme = useTheme();
  const dark = theme.palette.neutral.dark;
  const background = theme.palette.background.default;
  const primaryLight = theme.palette.primary.light;
  const alt = theme.palette.background.alt;

  const { palette } = useTheme();
  const medium = palette.neutral.medium;

  return (
    
    <FlexBetween padding="1rem 3%" backgroundColor={alt}>
      {!isNonMobileScreens && (
        <><img src={logo} alt="Logo" style={{ width: "60px", height: "60px" }} />
        <Typography
          fontWeight="bold"
          fontSize="clamp(0.75rem, 1.75rem, 2rem)"
          color="primary"
          onClick={() => navigate("/")}
          sx={{
            "&:hover": {
              color: primaryLight,
              cursor: "pointer",
            },
          }}
        >
          Falcon Airlines
        </Typography>
        </>
      )}
      
      {isNonMobileScreens && (
        <FlexBetween gap="1.75rem">
          <Typography
            fontWeight="bold"
            fontSize="clamp(1rem, 2rem, 2.25rem)"
            color="primary"
            onClick={() => navigate("/")}
            sx={{
              "&:hover": {
                color: primaryLight,
                cursor: "pointer",
              },
            }}
          >
          <div style={{ display: "flex", alignItems: "center" }}>
            <img src={logo} alt="Logo" style={{ width: "60px", height: "60px" }} />
            <Typography
              fontWeight="bold"
              fontSize="clamp(1rem, 1.6rem, 2.25rem)"
              color="primary"
              onClick={() => navigate("/home")}
              sx={{
                "&:hover": {
                  color: primaryLight,
                  display: "flex",
                  flexDirection: "column",
                  cursor: "pointer",
                },
              }}
            >
              &nbsp;&nbsp;&nbsp;Falcon Airlines
              <Typography color={medium} mt="-0.5rem">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Soar to new heights.&#8482;</Typography>
            </Typography>
          </div>
          </Typography>
        </FlexBetween>
      )}

      {/* DESKTOP NAV */}
      {isNonMobileScreens ? (
        <FlexBetween gap="2rem">
          
          <IconButton onClick={() => dispatch(setMode())}>
            {theme.palette.mode === "dark" ? (
              <>
              <DarkMode sx={{ fontSize: "25px" }} />&nbsp; Accessibility </>
            ) : (
              <>
              <LightMode sx={{ color: dark, fontSize: "25px" }} />&nbsp; Accessablity </>
            )}
          </IconButton>
          <IconButton>
            {theme.palette.mode === "dark" ? (
              <Notifications sx={{ fontSize: "25px" }} />
            ) : (
              <Notifications sx={{ color: dark, fontSize: "25px" }} />
            )}
          </IconButton>
          <IconButton>
            {theme.palette.mode === "dark" ? (
              <Help  sx={{ fontSize: "25px" }} />
            ) : (
              <Help  sx={{ color: dark, fontSize: "25px" }} />
            )}
          </IconButton>
          
        </FlexBetween>
      ) : (
        <IconButton
          onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
        >
          <Menu />
        </IconButton>
      )}

      {/* MOBILE NAV */}
      {!isNonMobileScreens && isMobileMenuToggled && (
        <Box
          position="fixed"
          right="0"
          bottom="0"
          height="100%"
          zIndex="10"
          maxWidth="500px"
          minWidth="200px"
          backgroundColor={background}
          style={{
            position: "fixed",
            right: 0,
            bottom: 0,
            top: 0,
            width: "100%",
            height: "100%",
            backgroundColor: isNonMobileScreens && isMobileMenuToggled ? "rgba(255, 255, 255, 0.5)" : "rgba(255, 255, 255, 0)",
            backdropFilter: "blur(8px)",
            transition: "background-color 0.3s ease",
          }}
        >
          {/* CLOSE ICON */}
          <Box display="flex" justifyContent="center" p="3rem">
            <IconButton
              onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
            >
              <Close />
            </IconButton>
          </Box>

          {/* MENU ITEMS */}
          <FlexBetween
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap="3rem"
          >
            <IconButton
              onClick={() => dispatch(setMode())}
              sx={{ fontSize: "25px" }}
            >
              {theme.palette.mode === "dark" ? (
                <>
                <DarkMode sx={{ fontSize: "25px" }} /> <Typography sx={{  color: dark, fontSize: "20px" }} > &nbsp; Accessibility </Typography></>
              ) : (
                <>
                <LightMode sx={{ color: dark, fontSize: "25px" }} /> <Typography sx={{  color: dark, fontSize: "20px" }} > &nbsp; Accessibility </Typography></>
              )}
            </IconButton>
            
            <IconButton
              onClick={() => dispatch()}
              sx={{ fontSize: "25px" }}
            >
              {theme.palette.mode === "dark" ? (
                <>
                <Notifications sx={{ fontSize: "25px" }} /> <Typography sx={{  color: dark, fontSize: "20px" }} > &nbsp; Announcements </Typography></>
              ) : (
                <>
                <Notifications sx={{ color: dark, fontSize: "25px" }} /> <Typography sx={{  color: dark, fontSize: "20px" }} > &nbsp; Announcements </Typography></>
              )}
            </IconButton>

            <IconButton
              onClick={() => dispatch()}
              sx={{ fontSize: "25px" }}
            >
              {theme.palette.mode === "dark" ? (
                <>
                <Help sx={{ fontSize: "25px" }} /> <Typography sx={{  color: dark, fontSize: "20px" }} > &nbsp; Help </Typography></>
              ) : (
                <>
                <Help sx={{ color: dark, fontSize: "25px" }} /> <Typography sx={{  color: dark, fontSize: "20px" }} > &nbsp; Help </Typography></>
              )}
            </IconButton>
          </FlexBetween>
        </Box>
      )}
    </FlexBetween>
  );
};

export default Navbar;
