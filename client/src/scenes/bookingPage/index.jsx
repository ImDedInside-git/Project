import Navbar from "scenes/navbar";
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
import { useDispatch, useSelector } from "react-redux";
import { setMode, setLogout } from "state";
import { useNavigate } from "react-router-dom";
import FlexBetween from "components/FlexBetween";
import UserWidget from "scenes/widgets/UserWidget";
import MyPostWidget from "scenes/widgets/MyPostWidget";
import PostsWidget from "scenes/widgets/PostsWidget";
import AdvertWidget1 from "scenes/widgets/Ads/AdvertWidget1.jsx";
import AdvertWidget2 from "scenes/widgets/Ads/AdvertWidget2.jsx";
// import FriendListWidget from "scenes/widgets/FriendListWidget";
import Book from "../../components/book.jsx";
import Footer from "scenes/footer";
import WidgetWrapper from "components/WidgetWrapper";
import Slideshow from "scenes/widgets/Slideshows/Slideshow2.jsx";



const HomePage = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const { _id, picturePath } = useSelector((state) => state.user);
  const theme = useTheme();


  return (
    <Box>
      <Navbar />
      {isNonMobileScreens && (
       <><Slideshow /></>
      )}
      {/* <Slideshow /> */}


      {/* <Box
        width={isNonMobileScreens ? "50%" : "93%"}
        p={isNonMobileScreens ? "2rem" : "1.5rem"}
        m={isNonMobileScreens ? "6rem auto" : "2rem auto"}
        borderRadius={isNonMobileScreens ? "2.5rem" : "1rem"}
        backgroundColor={theme.palette.background.alt}
      >
        
        
      </Box> */}


      {/* <Box
        width="100%"
        padding="2rem 6%"
        display={isNonMobileScreens ? "flex" : "block"}
        gap="0.5rem"
        justifyContent="space-between"
      >
        
        
      </Box>

      <Box
        width="100%"
        padding="2rem 6%"
        display={isNonMobileScreens ? "flex" : "block"}
        gap="0.5rem"
        justifyContent="space-between"
      >
        
             
        


      </Box> */}

      
      <Box
        width="100%"
        padding="2rem 6%"
        display={isNonMobileScreens ? "flex" : "block"}
        gap="0.5rem"
        justifyContent="space-between"
      >
        <Box flexBasis={isNonMobileScreens ? "60%" : undefined}>
          <Box>
            <WidgetWrapper>
              <Typography fontWeight="500" variant="h5" sx={{ mb: "2rem", fontStyle: "italic" }}>
                Your journey starts with us.
              </Typography>
              <Book />
            </WidgetWrapper>
          </Box>

          <Box m="2rem 0">
            <UserWidget userId={_id} picturePath={picturePath} />
          </Box>
        </Box>


        <Box m="2rem 0">
          {!isNonMobileScreens && <AdvertWidget2 />}
        </Box>
        {/* <Box
          flexBasis={isNonMobileScreens ? "42%" : undefined}
          mt={isNonMobileScreens ? undefined : "2rem"}
        >
          <MyPostWidget picturePath={picturePath} />
          <PostsWidget userId={_id} />
        </Box> */}
        {isNonMobileScreens && (
          <Box flexBasis="34%" sm="9rem" md="2.5rem">
            <Box>
              <AdvertWidget1 />
            </Box>
            <Box m="2rem 0" >
              <AdvertWidget2 />
            </Box>
          </Box>
        )}
      </Box>
      <Footer />
    </Box>
  );
};

export default HomePage;
