import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom'; // Import Link from React Router

const NotFound = () => {
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const redirectTimer = setInterval(() => {
      setCountdown(prevCountdown => prevCountdown - 1);
    }, 1000); // Update countdown every second

    const countdownTimeout = setTimeout(() => {
      window.location.href = '/'; // Redirect to homepage after 5 seconds
    }, 5000); // 5 seconds delay

    return () => {
      clearInterval(redirectTimer); // Clean up the timer on unmount
      clearTimeout(countdownTimeout); // Clean up the timeout on unmount
    };
  }, []);

  return (
    <Box
      width="100%"
      padding={"4rem 5%"}
      gap="0.5rem"
      justifyContent="space-between"
      height="100%"
      bgcolor="white"
    >
      <Typography variant="h1" fontFamily="Monospace" color="black" padding={"2rem 0%"}>404 Page Not Found</Typography>
      <Typography variant="h4" fontFamily="Monospace" color="black" padding={"0.5rem 0%"}>Looks like the page you are looking for does not exist.</Typography>
      <Typography variant="h5" fontFamily="Monospace" color="black">
        {`Redirecting to homepage in ${countdown} seconds...`}
      </Typography>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <Typography style={{ textDecoration: 'underline' }} variant="h5" fontFamily="Monospace" color="black" padding={"10rem 0%"}>
          If the page fails to redirect automatically, please click here to return to the homepage.
        </Typography>
      </Link>
    </Box>
  );
};

export default NotFound;
