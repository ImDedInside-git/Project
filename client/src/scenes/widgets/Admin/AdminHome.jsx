import {
    Box,
    useMediaQuery,
    Typography,
    Divider,
    useTheme,
    Paper,
    Grid,
  } from "@mui/material";
  import { useEffect, useState } from "react";
  import { useSelector } from "react-redux";
  import { useNavigate } from "react-router-dom";
  import FlexBetween from "components/FlexBetween";
  import WidgetWrapper from "components/WidgetWrapper";
  
  const AdminHome = ({ userId }) => {
    const [user, setUser] = useState(null);
    const { palette } = useTheme();
    const navigate = useNavigate();
    const token = useSelector((state) => state.token);
    const dark = palette.neutral.dark;
    const medium = palette.neutral.medium;
    const main = palette.neutral.main;
    const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  
  
    const getUser = async () => {
      const response = await fetch(`http://localhost:3001/users/${userId}`, {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await response.json();
      setUser(data);
    };
  
    useEffect(() => {
      getUser();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps
  
    if (!user) {
      return null;
    }
  
    const {
      firstName,
      lastName,
      location,
      occupation,
      viewedProfile,
      impressions,
      friends,
    } = user;
  
    // Define your image slideshow data
   
  
    return (
      <WidgetWrapper>
        {/* FIRST ROW */}
        <FlexBetween
          gap="0.5rem"
          pb="1.1rem"
        >
          <Box
            width="100%"
            padding={isNonMobileScreens ? "0rem 3%" : "1.3rem 3%"}
            display={isNonMobileScreens ? "flex" : "block"}
            gap="1.5rem"
            justifyContent="space-between"
          >
          {/* </Box> */}
            <Box 
              width="100%"
              display={"block"}
              gap="0.5rem"
              justifyContent="space-between"
            >
              <Typography
                variant="h2"
                padding="1rem 0%"
                color={dark}
                fontWeight="500"
                sx={{
                  "&:hover": {
                    color: palette.primary.light,
                    cursor: "pointer",
                  },
                }}
              > Experience the Kingdom
              </Typography>
              <Typography color={main} fontSize="1rem">
                Experience the allure of Bahrain - a land where ancient traditions meet modern marvels. Dive into the bustling souks of Manama, unwind on pristine beaches, and savor the flavors of Middle Eastern cuisine. With its rich history, vibrant culture, and warm hospitality, Bahrain promises an unforgettable journey. Plan your visit today and discover the hidden treasures of this enchanting destination.          {/* <Slideshow /> */}
              </Typography>
              <Typography color={main} fontSize="1rem"> &nbsp; </Typography>
              <img 
                src="https://wowtovisit.com/wp-content/uploads/2021/06/photo-1547548731-e95343697eb4.jpg" 
                alt="Boeing 787-9 Dreamliner" 
                style={{ width: "100%", height: "auto", borderRadius: "20px" }} />       
    
            </Box>
  
            <Box 
              width="100%"
              display={"block"}
              gap="1.5rem"
              justifyContent="space-between">
              <Typography
                variant="h2"
                padding="1rem 0%"
                color={dark}
                fontWeight="500"
                sx={{
                  "&:hover": {
                  color: palette.primary.light,
                  cursor: "pointer",
                 },
                }}
              > 
                  Boeing 787-9 Dreamliner
                </Typography>
                  <Typography color={main} fontSize="1rem">Experience our Boeing 787-9 Dreamliner, our flagship aircraft connecting
                    you from Bahrain to Bengaluru, Bangkok and select destinations within our
                    network. With 10 seats in the Falcon Elite&#8482; cabin, 16 seats in the Falcon Executive&#8482; cabin and 210 seats in Economy,
                    experience luxury with more personal space, enhanced on-board
                    entertainment and improved on board services.
                  </Typography>  
                  <Typography color={main} fontSize="1rem"> &nbsp; </Typography>     
                  <img 
                    src="https://www.topaviationsites.net/wp-content/uploads/2020/12/7e38fbdae720525772f8f7b7b680697d-930x620.jpg" 
                    alt="Boeing 787-9 Dreamliner" 
                    style={{ width: "100%", height: "auto", borderRadius: "20px" }} 
                  />
                  
            </Box>
          </Box>
        </FlexBetween>
      </WidgetWrapper>
    );
  };
  
  export default AdminHome;
  