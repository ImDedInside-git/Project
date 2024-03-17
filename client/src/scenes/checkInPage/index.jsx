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

import WidgetWrapper from "components/WidgetWrapper";
import Slideshow from "scenes/widgets/Slideshows/Slideshow2.jsx";

import UserWidget from "scenes/widgets/UserWidget";
import MyPostWidget from "scenes/widgets/MyPostWidget";
import PostsWidget from "scenes/widgets/PostsWidget";
import CheckInWidget from "scenes/widgets/CheckInWidget";

// import FriendListWidget from "scenes/widgets/FriendListWidget";
import Book from "../../components/Book.jsx";
import Footer from "scenes/footer";

const CheckInPage = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const { _id, picturePath } = useSelector((state) => state.user);
  const theme = useTheme();

  return (
    <Box>
      <Navbar />
      <Box
        width="100%"
        padding="2rem 6%"
        display={isNonMobileScreens ? "flex" : "block"}
        gap="0.5rem"
        justifyContent="space-between"
      >
        <Box flexBasis={isNonMobileScreens ? "60%" : undefined}>
          <Box>
            <CheckInWidget />
          </Box>

          <Box m="2rem 0" />
        </Box>

        <Box m="2rem 0">
        </Box>
        {isNonMobileScreens && (
          <Box flexBasis="34%" sm="9rem" md="2.5rem">
            <Box>
            <UserWidget userId={_id} picturePath={picturePath} />
            </Box>
            <Box m="2rem 0" />
          </Box>
        )}
      </Box>
      <Footer />
    </Box>
  );
};

export default CheckInPage;
