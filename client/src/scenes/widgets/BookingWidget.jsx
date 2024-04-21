import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween.jsx";
import WidgetWrapper from "components/WidgetWrapper.jsx";
import Book from '../../components/Book'; // Relative path from index.jsx to Book.js

const BookingWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  
  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500" sx={{ mb: "2rem"}}>
          Your journey starts with us.
        </Typography>
        <Typography color={medium} sx={{ mb: "2rem"}}>imdedinside</Typography>
      </FlexBetween>
      {/* <img
        width="100%"
        height="auto"
        alt="advert"
        src="http://localhost:3001/assets/info4.jpeg"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      /> */}
      <Book />
      {/* <FlexBetween>
        <Typography color={main}>MikaCosmetics</Typography>
        <Typography color={medium}>mikacosmetics.com</Typography>
      </FlexBetween> */}
      {/* <Typography color={medium} m="0.5rem 0">
        Wherever you want to go, we’ll take you there.
      </Typography> */}
    </WidgetWrapper>
  );
};

export default BookingWidget;
