import React, { useState } from 'react';
import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  // Array of different ad messages
  const adMessages = [
    "Protect your journey with SafeTravels Insurance. Don't let unexpected mishaps ruin your trip. Get comprehensive coverage and travel with peace of mind.",
    "Experience luxury stays at affordable prices with Wonderland Hotels. Book your next vacation now and enjoy unparalleled comfort and service."
  ];

  // State to hold the randomly selected ad message
  const [randomAdMessage, setRandomAdMessage] = useState(adMessages[0]);

  // Function to select a random ad message
  const getRandomAdMessage = () => {
    const randomIndex = Math.floor(Math.random() * adMessages.length);
    setRandomAdMessage(adMessages[randomIndex]);
  };

  // Call the function to select a random ad message when the component mounts
  React.useEffect(() => {
    getRandomAdMessage();
  }, []);

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Sponsored
        </Typography>
        <Typography color={medium}>Get Covered Now</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="travel insurance"
        src="https://wallpapercave.com/wp/wp1916895.jpg"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>SafeTravels Insurance</Typography>
        <Typography color={medium}>safetravelsinsurance.com</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        {randomAdMessage}
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
