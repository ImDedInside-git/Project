import React from 'react';
import { Box, Typography, useMediaQuery } from '@mui/material';
import Navbar from '../navbar';
import Footer from 'scenes/footer';
import UserWidget from 'scenes/widgets/UserWidget';
import { useSelector } from "react-redux";
import CreateFlight from 'scenes/widgets/Admin/CreateFlightWidget';
import WidgetWrapper from 'components/WidgetWrapper';
// import "/node_modules/flag-icons/css/flag-icons.min.css";





const AdminDashboard = () => {
  const { _id, picturePath, email, viewedProfile} = useSelector((state) => state.user);
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
 


  return (
    <Box>
      <Navbar />
      <span class="fi fi-bh"></span> 
      {/* <span class="fi fi-bh fis"></span> */}
      
      <Box
        width="100%"
        padding={isNonMobileScreens ? "4rem 3%" : "1.3rem 3%"}
        display={isNonMobileScreens ? "flex" : "block"}
        gap="0.5rem"
        justifyContent="space-between"
      >
        <Box flexBasis={isNonMobileScreens ? "35%" : undefined}>

          <Box
            mt={isNonMobileScreens ? undefined : "2rem"}
          >
            <CreateFlight />
            {/* <AdminHome /> */}

          </Box>
        </Box>
        {isNonMobileScreens && (
          <Box 
            flexBasis={isNonMobileScreens ? "30%" : undefined}
            mt={isNonMobileScreens ? undefined : "2rem"}
          >
            {/* <CreateFlight />
            <Box m="2rem 0" /> */}
            {/* <UserWidget userId={_id} picturePath={picturePath} /> */}
            {/* <FlightsWidget userId={_id} /> */}
            <Box m="2rem 0" />
          </Box>
        )}

        {isNonMobileScreens && (
          <Box 
            flexBasis={isNonMobileScreens ? "15%" : undefined}
            mt={isNonMobileScreens ? undefined : "2rem"}
          >
            {/* <CreateFlight />
            <Box m="2rem 0" /> */}
            {/* <FlightsWidget userId={_id} /> */}
            <WidgetWrapper>
              <Box> 65f72c2beebe702b17508169 </Box>
              <Box> admin@falconair.bh </Box>
              <Box> 41139396 </Box>
            </WidgetWrapper>
            <Box m="2rem 0" />
            <WidgetWrapper>
              <Box> NaN </Box>
              <Box> xyz@falconair.bh </Box>
              <Box> NaN </Box>
            </WidgetWrapper>
            <Box m="2rem 0" />
          </Box>
        )}
        
        {isNonMobileScreens && (
          <Box 
            flexBasis={isNonMobileScreens ? "15%" : undefined}
            mt={isNonMobileScreens ? undefined : "2rem"}
          >
            {/* <CreateFlight />
            <Box m="2rem 0" /> */}
            {/* <FlightsWidget userId={_id} /> */}
            <WidgetWrapper>
              <Box> NaN </Box>
              <Box> xyz@falconair.bh </Box>
              <Box> NaN </Box>
            </WidgetWrapper>
            <Box m="2rem 0" />
            <WidgetWrapper>
              <Box> NaN </Box>
              <Box> xyz@falconair.bh </Box>
              <Box> NaN </Box>
            </WidgetWrapper>
            <Box m="2rem 0" />
          </Box>
        )}
      </Box>
      <Footer />
    </Box>
  );
};

export default AdminDashboard;
