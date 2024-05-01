import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import FlexBetween from "components/FlexBetween.jsx";
import WidgetWrapper from "components/WidgetWrapper.jsx";
import CheckIn from "../../components/CheckIn.jsx";

const BookingWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");


  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h3" fontWeight="500" sx={{ mb: "2rem"}}>
          Check In
        </Typography>
        <Typography color={medium} sx={{ mb: "2rem"}}>imdedinside</Typography>
      </FlexBetween>
      
      <CheckIn />
    
      <Typography color={medium} m="2rem 2%">
        In some airports, Check-in is available starting 24 hours before your scheduled departure. See our Check-in and Airport Processing Times page for details. Please note that online check-in will stop 2 hours before your departure time.
        
        <Box display={isNonMobileScreens ? "flex" : "block"} m="1.5rem 0%" gap="1rem">
          <Box m={isNonMobileScreens ? "0rem 0%" : "1rem 0%"}>
            <strong> International Flights: </strong> Please arrive at least 3 hours before your flight's departure time to allow ample time for check-in, security screening, and any necessary immigration procedures.
          </Box>
          <Box m={isNonMobileScreens ? "0rem 0%" : "1rem 0%"}>
            <strong> Domestic Flights: </strong> We recommend arriving at least 2 hours before your domestic flight's departure to ensure sufficient time for check-in and security procedures.
          </Box>
        </Box>
      
      </Typography>
    </WidgetWrapper>
  );
};

export default BookingWidget;
