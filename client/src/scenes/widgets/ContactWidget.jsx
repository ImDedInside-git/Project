import { Box, Typography, useTheme } from "@mui/material";
import Friend from "components/Flights";
import WidgetWrapper from "components/WidgetWrapper";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFriends } from "state";

const ContactWidget = ({ userId }) => {
  const dispatch = useDispatch();
  const { palette } = useTheme();
  const token = useSelector((state) => state.token);
  const friends = useSelector((state) => state.user.friends);
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  const getFriends = async () => {
    const response = await fetch(
      `http://localhost:3001/users/${userId}/bookings`,
      {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    const data = await response.json();
    dispatch(setFriends({ friends: data }));
  };

  useEffect(() => {
    getFriends();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <WidgetWrapper>
      <Typography
        color={palette.neutral.dark}
        variant="h5"
        fontWeight="700"
        sx={{ mb: "1.5rem" }}
      >
        Contact Us 
      </Typography>
      <Box display="flex" flexDirection="column" gap="0.5rem">
        <Typography color={dark}>
          <span style={{ fontWeight: 500 }}>Email:</span>&nbsp; <a href="mailto:support@falconairlines.bh" style={{ color: dark }}>support@falconairlines.bh</a>

        </Typography>
        <Typography color={dark}>
        <span style={{ fontWeight: 500 }}>Telephone:</span>&nbsp; +973 1757 7700 <span color={medium} style={{ fontWeight: 100 }}>(Toll Free)</span>
        </Typography>
        <Typography color={dark}>
        <span style={{ fontWeight: 500 }}>Address:</span>&nbsp; 855 Falcon Way, Al-Hidd, Bahrain
        </Typography>
        <Typography color={dark}>
        <span style={{ fontWeight: 500 }}>&nbsp; </span>
        </Typography>
      </Box>
    </WidgetWrapper>
  );
};

export default ContactWidget;
