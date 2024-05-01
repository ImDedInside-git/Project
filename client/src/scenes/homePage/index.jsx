import { Box, useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";
import Navbar from "scenes/navbar";
import Footer from "scenes/footer";
import UserWidget from "scenes/widgets/UserWidget";
import BookingWidget from "scenes/widgets/BookingWidget";
import HomeWidget from "scenes/widgets/HomeWidget";
import Slideshow from "scenes/widgets/Slideshows/Slideshow1";
import AdvertWidget1 from "scenes/widgets/Ads/AdvertWidget1.jsx";
import AdvertWidget2 from "scenes/widgets/Ads/AdvertWidget2.jsx";
import PostsWidget from "scenes/widgets/PostsWidget";

const HomePage = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const { _id, picturePath } = useSelector((state) => state.user);

  // Generate a random number between 0 and 1
  const randomIndex = Math.floor(Math.random() * 2); // 0 or 1

  // Determine which AdvertWidget to render based on the randomIndex
  const AdvertComponent =
    randomIndex === 0 ? AdvertWidget1 : AdvertWidget2;

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
        <Box flexBasis={isNonMobileScreens ? "62%" : undefined}>
          {!isNonMobileScreens && (
            <>
              <BookingWidget />

              <Box m="2rem 0" />
            </>
          )}

          <Box
            flexBasis={isNonMobileScreens ? "42%" : undefined}
            mt={isNonMobileScreens ? undefined : "2rem"}
          >
            <HomeWidget userId={_id} picturePath={picturePath} />
            <Box m="2rem 0" />
            <UserWidget userId={_id} picturePath={picturePath} />
          </Box>
        </Box>
        
        {isNonMobileScreens && (
          <Box 
            flexBasis={isNonMobileScreens ? "35%" : undefined}
            mt={isNonMobileScreens ? undefined : "2rem"}>
            <BookingWidget />
            <Box m="2rem 0" />
            <AdvertComponent />
          </Box>
        )}
      </Box>
      <Footer />
    </Box>
  );
};

export default HomePage;
