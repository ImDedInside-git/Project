import React from 'react';
import { Box, Typography, useMediaQuery } from '@mui/material';
import { Link } from "react-router-dom"; // Import Link from React Router


const Forbidden = () => {

  return (
    <Link to="/" style={{ textDecoration: 'none' }}>
      <Box
        width="100%"
        padding={"9rem 5%"}
        gap="0.5rem"
        justifyContent="space-between"
        height="100%"
        bgcolor="white"
      >
        <Typography variant="h1" fontFamily="Monospace" color="#b30000" padding={"2rem 0%"}>403 Forbidden - Access Denied</Typography>
        <Typography variant="h4" fontFamily="Monospace" color="black" padding={"0.5rem 0%"}>You don't have permission to access the requested resource. Please contact the website administrator to resolve this issue.</Typography>
        <Typography style={{ textDecoration: 'underline' }} variant="h5" fontFamily="Monospace" color="black">Click here to go back to the homepage</Typography> 
      </Box>
    </Link>
  );
};

export default Forbidden;
