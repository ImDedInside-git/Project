import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Sponsored
        </Typography>
        <Typography color={medium}>Book Now</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="hotel booking"
        src="https://www.travelalerts.ca/wp-content/uploads/2018/10/hotel1.jpg"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>Wonderland Hotels</Typography>
        <Typography color={medium}>wonderlandhotels.com</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        Experience luxury stays at affordable prices with Wonderland Hotels. Book your next vacation now and enjoy unparalleled comfort and service.
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
