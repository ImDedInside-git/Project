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
        <Typography color={medium}>Get Covered Now</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="travel insurance"
        src="https://www.travelalerts.ca/wp-content/uploads/2018/10/luggage1.jpg"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>SafeTravels Insurance</Typography>
        <Typography color={medium}>safetravelsinsurance.com</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        Protect your journey with SafeTravels Insurance. Don't let unexpected mishaps ruin your trip. Get comprehensive coverage and travel with peace of mind.
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
