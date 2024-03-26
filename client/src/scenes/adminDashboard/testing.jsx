import React from 'react';
import { Box } from '@mui/material';
import Navbar from '../navbar';
import Footer from 'scenes/footer';
import BookingWidget from 'scenes/widgets/BookingWidget';
import ManageWidget from 'scenes/widgets/ManageWidget';
import CheckInWidget from 'scenes/widgets/CheckInWidget';
import PostsWidget from 'scenes/widgets/PostsWidget';
import CreateFlightWidget from 'scenes/widgets/Admin/CreateFlightWidget';



const testing = () => {

  return (
    <Box>
      {/* <Loginbar /> */}
      {/* <Box m="1rem" /> */}
      <Navbar />
      
      <Box m="5rem">
      <Box width="50%" display="block" justifyContent="center" alignItems="center" marginTop="2rem">
        <CreateFlightWidget />
        {/* <PostsWidget userId={_id} /> */}

      </Box>


      </Box>
      <Box m="5rem">
        <Box display="flex" justifyContent="center" alignItems="center" marginTop="2rem">
          <Box width="50%"  >
            <Box m="1rem" />
            <BookingWidget />
            <Box m="1rem" />
            <ManageWidget />
            <Box m="1rem" />
            <CheckInWidget />
            <Box m="1rem" />
          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default testing;
