import { Box, useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";
import Navbar from "scenes/navbar";
import Footer from "scenes/footer";
import UserWidget from "scenes/widgets/UserWidget";
import MyPostWidget from "scenes/widgets/MyPostWidget";
import PostsWidget from "scenes/widgets/PostsWidget";
import BookingWidget from "scenes/widgets/BookingWidget";
import FriendListWidget from "scenes/widgets/ContactWidget";
import HomeWidget from "scenes/widgets/HomeWidget";
import Book from "components/book.jsx";
import Slideshow from "scenes/widgets/Slideshows/Slideshow1";

const HomePage = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const { _id, picturePath } = useSelector((state) => state.user);

  return (
    <Box>
      <Navbar />
      <Slideshow />
      
      <Box
        width="100%"
        padding={isNonMobileScreens ? "4rem 3%" : "1.3rem 3%"}
        display={isNonMobileScreens ? "flex" : "block"}
        gap="0.5rem"
        justifyContent="space-between"
      >
        {/* <Slideshow /> */}

        <Box flexBasis={isNonMobileScreens ? "62%" : undefined}>
          {!isNonMobileScreens && (
            <>

            
              <BookingWidget />

            </>
          )}

          <Box
              flexBasis={isNonMobileScreens ? "42%" : undefined}
              mt={isNonMobileScreens ? undefined : "2rem"}
          >
            {/* <UserWidget userId={_id} picturePath={picturePath} /> */}
            {/* <Book /> */}
            <HomeWidget userId={_id} picturePath={picturePath} />
          
          </Box>
          
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
            flexBasis={isNonMobileScreens ? "35%" : undefined}
            mt={isNonMobileScreens ? undefined : "2rem"}>
            <BookingWidget />
            <Box m="2rem 0" />
            <FriendListWidget userId={_id} />
          </Box>
        )}
      </Box>
      <Footer />
    </Box>
  );
};

export default HomePage;
