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
import FlexBetween from "components/FlexBetween.jsx";
import UserWidget from "scenes/widgets/UserWidget";
import MyPostWidget from "scenes/widgets/MyPostWidget";
import PostsWidget from "scenes/widgets/PostsWidget";
import AdvertWidget1 from "scenes/widgets/Ads/AdvertWidget1.jsx";
import AdvertWidget2 from "scenes/widgets/Ads/AdvertWidget2.jsx";
// import FriendListWidget from "scenes/widgets/FriendListWidget";
import Book from '../../components/Book'; // Relative path from index.jsx to Book.js
import Footer from "scenes/footer";
import WidgetWrapper from "components/WidgetWrapper.jsx";
import Slideshow from "scenes/widgets/Slideshows/Slideshow2.jsx";

const HomePage = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const { _id, picturePath } = useSelector((state) => state.user);
  const theme = useTheme();

  // Generate a random number between 0 and 1
  const randomIndex = Math.floor(Math.random() * 2); // 0 or 1

  // Determine which AdvertWidget to render based on the randomIndex
  const AdvertComponent =
    randomIndex === 0 ? AdvertWidget1 : AdvertWidget2;

  return (
    <Box>
      <Navbar />
      {isNonMobileScreens && <><Slideshow /></>}
      {/* <Slideshow /> */}
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
              <Typography fontWeight="400" variant="h4" sx={{ mb: "2rem", fontStyle: "italic" }}>
                Your journey starts with us.
              </Typography>
              <Book />
            </WidgetWrapper>
          </Box>

          <Box m="2rem 0">
            {/* <UserWidget userId={_id} picturePath={picturePath} /> */}
          </Box>
        </Box>

        <Box m="2rem 0">
          {!isNonMobileScreens && <AdvertWidget2 />}
        </Box>
        {isNonMobileScreens && (
          <Box flexBasis="34%" sm="9rem" md="2.5rem">
            <Box>
              <AdvertComponent /> {/* Render the randomly chosen AdvertWidget */}
            </Box>
            <Box m="2rem 0" />
          </Box>
        )}
      </Box>
      <Footer />
    </Box>
  );
};

export default HomePage;
