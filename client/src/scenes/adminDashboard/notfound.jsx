import React from 'react';
import { Box, Typography } from '@mui/material';
import { Link } from "react-router-dom"; // Import Link from React Router


const NotFound = () => {
  return (
    <Box
      width="100%"
      padding={"9rem 5%"}
      gap="0.5rem"
      justifyContent="space-between"
      height="100%"
      bgcolor="white"
    >
      <Typography variant="h1" fontFamily="Monospace" color="#b30000" padding={"2rem 0%"}>404 Page Not Found</Typography>
      <Typography variant="h4" fontFamily="Monospace" color="black"padding={"0.5rem 0%"}>Looks like the page you are looking for does not exist.</Typography>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <Typography style={{ textDecoration: 'underline' }} variant="h5" fontFamily="Monospace" color="black">Click here to go back to the homepage</Typography>
      </Link>
    </Box>
  );
};

export default NotFound;
