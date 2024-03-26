import React from 'react';
import { Box, Typography } from '@mui/material';
import Loginbar from '../navbar/loginbar';
import Navbar from '../navbar';
import Footer from 'scenes/footer';
import BookingWidget from 'scenes/widgets/BookingWidget';
import ManageWidget from 'scenes/widgets/ManageWidget';
import CheckInWidget from 'scenes/widgets/CheckInWidget';
import AddFlights from 'components/Admin/AddFlights';
import WidgetWrapper from 'components/WidgetWrapper';
import PostsWidget from 'scenes/widgets/PostsWidget';



const AdminDashboard = () => {
  return (
    <Box>
      {/* <Loginbar /> */}
      {/* <Box m="1rem" /> */}
      <Navbar />
      
      <Box m="5rem">
      <Box width="50%" justifyContent="center" alignItems="center" marginTop="2rem">
        <PostsWidget />
        <WidgetWrapper>
          <b>
          Create Flight (ADMIN)
          </b>
          <br /><br />
          <AddFlights />
        </WidgetWrapper>
      </Box>


      </Box>
      <Box m="5rem">
        <Typography variant="h1" align="center" gutterBottom>Welcome to Admin Dashboard</Typography>
        <Box display="flex" justifyContent="center" alignItems="center" marginTop="2rem">
          {/* Add your admin dashboard content here */}
          <Box width="40%" padding="1rem" border="1px solid #ccc" borderRadius="5px" boxShadow="0px 0px 10px 0px rgba(0,0,0,0.1)">
            <Typography variant="h2" gutterBottom>Admin Overview</Typography>
            <Box m="1rem" />
            <BookingWidget />
            <Box m="1rem" />
            <ManageWidget />
            <Box m="1rem" />
            <CheckInWidget />
            <Box m="1rem" />

            {/* Add widgets or components for admin overview */}
            {/* Example: */}
            {/* <Typography variant="body1">You can display various statistics, graphs, or summaries here.</Typography> */}
          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default AdminDashboard;
