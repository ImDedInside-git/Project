import { Box, useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";
import Navbar from "scenes/navbar";
import UserWidget from "scenes/widgets/UserWidget";
import MyPostWidget from "scenes/widgets/MyPostWidget";
import PostsWidget from "scenes/widgets/PostsWidget";
import BookingWidget from "scenes/widgets/BookingWidget";
import FriendListWidget from "scenes/widgets/ContactWidget";
import HomeWidget from "scenes/widgets/HomeWidget";
import Book from "scenes/bookingPage/book.jsx";

const HomePage = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const { _id, picturePath } = useSelector((state) => state.user);

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
        <Box flexBasis={isNonMobileScreens ? "66%" : undefined}>
          {/* <UserWidget userId={_id} picturePath={picturePath} /> */}
          {/* <Book /> */}
          <HomeWidget userId={_id} picturePath={picturePath} />
        </Box>
        {/* <Box
          flexBasis={isNonMobileScreens ? "42%" : undefined}
          mt={isNonMobileScreens ? undefined : "2rem"}
        >
          <MyPostWidget picturePath={picturePath} />
          <PostsWidget userId={_id} />
        </Box> */}
        {isNonMobileScreens && (
          <Box 
            flexBasis={isNonMobileScreens ? "32%" : undefined}
            mt={isNonMobileScreens ? undefined : "2rem"}>
            <BookingWidget />
            <Box m="2rem 0" />
            <FriendListWidget userId={_id} />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default HomePage;
