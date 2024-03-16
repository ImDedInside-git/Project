import { useState } from "react";
import {
  Box,
  IconButton,
  InputBase,
  Typography,
  Select,
  MenuItem,
  FormControl,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  Search,
  Message,
  DarkMode,
  LightMode,
  Notifications,
  Help,
  Menu,
  Close,
  Refresh,
  ExitToApp,
  Dashboard,
  Home,
  AddHome,
  CurrencyRupee,
  Reorder,
  Book,
  ManageHistory
} from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { setMode, setLogout } from "state";
import { useNavigate } from "react-router-dom";
import FlexBetween from "components/FlexBetween";
import logo from "../assets/logo2.png"
import NavUserImage from "components/NavUserImage";
import UserImage from "components/UserImage";




const Navbar = () => {
  const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const isNonMobileScreens = useMediaQuery("(min-width: 1345px)");
  const { _id, picturePath } = useSelector((state) => state.user);



  const theme = useTheme();
  const neutralLight = theme.palette.neutral.light;
  const dark = theme.palette.neutral.dark;
  const background = theme.palette.background.default;
  const primaryLight = theme.palette.primary.light;
  const alt = theme.palette.background.alt;

  const { palette } = useTheme();
  const medium = palette.neutral.medium;

  


  const fullName = `${user.firstName} ${user.lastName}`;

  return (
    
    <FlexBetween padding="1rem 3%" backgroundColor={alt} >
      
      {!isNonMobileScreens && (
        <><img src={logo} alt="Logo" style={{ width: "60px", height: "60px" }} />
        <Typography
          fontWeight="bold"
          fontSize="clamp(0.75rem, 1.75rem, 2rem)"
          color="primary"
          onClick={() => navigate("/home")}
          sx={{
            "&:hover": {
              color: primaryLight,
              cursor: "pointer",
            },
          }}
        >
          Falcon Airlines
          <Typography color={medium} mt="-0.5rem">&nbsp;&nbsp;&nbsp;Soar to new heights.&#8482;</Typography>
        </Typography>
        </>
      )}
      
      {isNonMobileScreens && (
        <FlexBetween gap="1.75rem">
          <Typography
            fontWeight="bold"
            fontSize="clamp(1rem, 2rem, 2.25rem)"
            color="primary"
            onClick={() => navigate("/home")}
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
          {isNonMobileScreens && (
          <FlexBetween
            backgroundColor={neutralLight}
            borderRadius="9px"
            gap="3rem"
            padding="0.1rem 1.5rem"
          >
            <InputBase placeholder="Search..." />
            <IconButton>
              <Search />
            </IconButton>
          </FlexBetween>
        )}
          
          
        </FlexBetween>
      )}
      

      {/* DESKTOP NAV */}
      {isNonMobileScreens ? (
        <FlexBetween gap="1.5rem">
          
          <IconButton onClick={() => navigate("/home")}>
            {theme.palette.mode === "dark" ? (
              <><Typography sx={{ fontSize: "20px" }} > Home </Typography></>
            ) : (
              <><Typography sx={{  fontSize: "20px" }} > Home </Typography> </>
            )}
          </IconButton>

          <IconButton onClick={() => navigate("/book")}>
            {theme.palette.mode === "dark" ? (
              <><Typography sx={{ fontSize: "20px" }}> Book </Typography></>
            ) : (
              <><Typography sx={{ fontSize: "20px" }}> Book </Typography> </>
            )}
          </IconButton>

          {/* <IconButton onClick={() => navigate("")}>
          {theme.palette.mode === "dark" ? (
              <><Typography sx={{ fontSize: "20px" }} > Manage </Typography></>
            ) : (
              <><Typography sx={{  fontSize: "20px" }} > Manage </Typography> </>
            )}
          </IconButton> */}

          <IconButton onClick={() => navigate("")}>
          {theme.palette.mode === "dark" ? (
              <><Typography sx={{ fontSize: "20px" }} > Check In </Typography></>
            ) : (
              <><Typography sx={{  fontSize: "20px" }} > Check In </Typography> </>
            )}
          </IconButton>
          
          <IconButton onClick={() => dispatch(setMode())}>
            {theme.palette.mode === "dark" ? (
              <DarkMode sx={{ fontSize: "25px" }} />
            ) : (
              <LightMode sx={{ color: dark, fontSize: "25px" }} />
            )}
          </IconButton>
          {/* <IconButton onClick={() => window.location.reload()}>
            {theme.palette.mode === "dark" ? (
              <Refresh sx={{ fontSize: "25px" }} />
            ) : (
              <Refresh sx={{ color: dark, fontSize: "25px" }} />
            )}
          </IconButton> */}
          <IconButton>
            {theme.palette.mode === "dark" ? (
              <Notifications sx={{ fontSize: "25px" }} />
            ) : (
              <Notifications sx={{ color: dark, fontSize: "25px" }} />
            )}
          </IconButton>
          {/* <IconButton>
            {theme.palette.mode === "dark" ? (
              <Help  sx={{ fontSize: "25px" }} />
            ) : (
              <Help  sx={{ color: dark, fontSize: "25px" }} />
            )}
          </IconButton> */}
          <FormControl variant="standard" value={fullName}>
            <Select
              value={fullName}
              sx={{
                backgroundColor: neutralLight,
                width: "15rem",
                borderRadius: "0.25rem",
                p: "0.25rem 1rem",
                "& .MuiSvgIcon-root": {
                  pr: "0.25rem",
                  width: "3rem",
                },
                "& .MuiSelect-select:focus": {
                  backgroundColor: neutralLight,
                },
              }}
              input={<InputBase />}
            >
              <MenuItem value={fullName} >
                <NavUserImage image={picturePath} />
              </MenuItem>
              <MenuItem onClick={() => dispatch(setLogout())}>
              &nbsp;&nbsp;<ExitToApp />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Log Out
              </MenuItem>
            </Select>
          </FormControl>
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
            
            <IconButton onClick={() => navigate("/home")}>
            {theme.palette.mode === "dark" ? (
              <><Typography sx={{ fontSize: "20px" }} > Home </Typography></>
            ) : (
              <><Typography sx={{  color: dark, fontSize: "20px" }} > Home </Typography> </>
            )}
          </IconButton>

          <IconButton onClick={() => navigate("/book")}>
            {theme.palette.mode === "dark" ? (
              <><Typography sx={{ fontSize: "20px" }}> Book </Typography></>
            ) : (
              <><Typography sx={{ color: dark, fontSize: "20px" }}> Book </Typography> </>
            )}
          </IconButton>

          {/* <IconButton onClick={() => navigate("")}>
          {theme.palette.mode === "dark" ? (
              <><Typography sx={{ fontSize: "20px" }} > Manage </Typography></>
            ) : (
              <><Typography sx={{  color: dark, fontSize: "20px" }} > Manage </Typography> </>
            )}
          </IconButton> */}

          <IconButton onClick={() => navigate("")}>
          {theme.palette.mode === "dark" ? (
              <><Typography sx={{ fontSize: "20px" }} > Check In </Typography></>
            ) : (
              <><Typography sx={{  color: dark, fontSize: "20px" }} > Check In </Typography> </>
            )}
          </IconButton>
          
          <IconButton onClick={() => dispatch(setMode())}>
            {theme.palette.mode === "dark" ? (
              <DarkMode sx={{ fontSize: "25px" }} />
            ) : (
              <LightMode sx={{ color: dark, fontSize: "25px" }} />
            )}
          </IconButton>
          {/* <IconButton onClick={() => window.location.reload()}>
            {theme.palette.mode === "dark" ? (
              <Refresh sx={{ fontSize: "25px" }} />
            ) : (
              <Refresh sx={{ color: dark, fontSize: "25px" }} />
            )}
          </IconButton> */}
          <IconButton>
            {theme.palette.mode === "dark" ? (
              <Notifications sx={{ fontSize: "25px" }} />
            ) : (
              <Notifications sx={{ color: dark, fontSize: "25px" }} />
            )}
          </IconButton>
          <UserImage image={picturePath} />
          {/* <IconButton>
            {theme.palette.mode === "dark" ? (
              <Help  sx={{ fontSize: "25px" }} />
            ) : (
              <Help  sx={{ color: dark, fontSize: "25px" }} />
            )}
          </IconButton> */}
            {/* <Refresh sx={{ fontSize: "25px" }} onClick={() => window.location.reload()} /> */}
            {/* <Notifications sx={{ fontSize: "25px" }} /> */}
            {/* <Help sx={{ fontSize: "25px" }} /> */}
            <FormControl variant="standard" value={fullName}>
              <Select
                value={fullName}
                sx={{
                  backgroundColor: neutralLight,
                  width: "150px",
                  borderRadius: "0.25rem",
                  p: "0.25rem 1rem",
                  "& .MuiSvgIcon-root": {
                    pr: "0.25rem",
                    width: "3rem",
                  },
                  "& .MuiSelect-select:focus": {
                    backgroundColor: neutralLight,
                  },
                }}
                input={<InputBase />}
              >
                <MenuItem value={fullName}>
                  <Typography
                    fontWeight="500"
                    fontSize="clamp(0.1rem, 0.8rem, 1.5rem)"
                    color="primary"
                    sx={{
                      "&:hover": {
                        color: primaryLight,
                        cursor: "pointer",
                      },
                    }}
                  > 
                    {fullName} 
                  </Typography>
                </MenuItem>
                <MenuItem onClick={() => dispatch(setLogout())} sx={{ mb: "2.5rem" }}>
                  <ExitToApp />&nbsp;&nbsp;&nbsp;Log Out
                </MenuItem>
              </Select>
            </FormControl>
          </FlexBetween>
        </Box>
      )}
    </FlexBetween>
  );
};

export default Navbar;
