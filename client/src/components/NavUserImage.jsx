import { Box, Typography, useTheme } from "@mui/material";
import { useSelector } from "react-redux";





const UserImage = ({ image, size = "35px" }) => {
  const user = useSelector((state) => state.user);
  const fullName = `${user.firstName} ${user.lastName}`;
  const theme = useTheme();
  const neutralLight = theme.palette.neutral.light;
  const dark = theme.palette.neutral.dark;
  const background = theme.palette.background.default;
  const primaryLight = theme.palette.primary.light;
  const alt = theme.palette.background.alt;

  return (
    <Box width={size} height={size} display="flex" alignItems="center">
      <img
        // style={{ width: "60px", height: "60px" }}
        style={{ objectFit: "cover", borderRadius: "50%" }}
        width={size}
        height={size}
        alt="user"
        src={`http://localhost:3001/assets/${image}`}
      />
      <Typography
          fontWeight="500"
          fontSize="clamp(0.1rem, 1rem, 1.5rem)"
          color="primary"
          sx={{
            "&:hover": {
              color: primaryLight,
              cursor: "pointer",
            },
          }}
      >
      &nbsp;&nbsp;&nbsp;{fullName}
      </Typography>
      
    </Box>
  );
};

export default UserImage;
