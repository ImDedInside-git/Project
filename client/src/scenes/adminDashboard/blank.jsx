import React from 'react';
import { Box, Typography, useMediaQuery } from '@mui/material';
import Navbar from '../navbar';
import Footer from 'scenes/footer';
import UserWidget from 'scenes/widgets/UserWidget';
import { useSelector } from "react-redux";
import CreateFlight from 'scenes/widgets/Admin/CreateFlightWidget';
// import AdminHome from 'scenes/widgets/Admin/AdminHome';
import FlightsWidget from 'scenes/widgets/Flights/FlightsWidget';
import MyPostWidget from 'scenes/widgets/MyPostWidget';




const AdminDashboard = () => {
  const { _id, picturePath } = useSelector((state) => state.user);
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");


  return (
    <Box>
      <Navbar />
      
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

          </Box>
        </Box>
        
        {isNonMobileScreens && (
          <Box 
            flexBasis={isNonMobileScreens ? "35%" : undefined}
            mt={isNonMobileScreens ? undefined : "2rem"}
          >
            {/* <CreateFlight />
            <Box m="2rem 0" /> */}
            {/* <UserWidget userId={_id} picturePath={picturePath} /> */}
            <MyPostWidget picturePath={picturePath} />
            <FlightsWidget userId={_id} />


            
            {_id}
            {/* <Box m="2rem 0" /> */}
          </Box>
        )}
      </Box>
      <Footer />
    </Box>
  );
};

export default AdminDashboard;
