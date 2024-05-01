import { Box, Typography, useTheme, useMediaQuery, Grid } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import FlexBetween from "components/FlexBetween";
import logo from "../assets/logo2.png"
import { 
  Twitter, 
  Facebook, 
  Instagram,
  HelpCenter
 } from "@mui/icons-material";

const Footer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const theme = useTheme();
  const neutralLight = theme.palette.nbg.light;
  const neutralDark = theme.palette.nbg.dark;
  const background = theme.palette.background.default;
  const primaryLight = theme.palette.primary.light;
  const alt = theme.palette.background.alt;
  

  const { palette } = useTheme();
  const medium = palette.nbg.medium;
  const isNonMobileScreens = useMediaQuery("(min-width: 700px)");

  const currentYear = new Date().getFullYear();
  const dark = palette.neutral.dark;


  return (
    <>
    <FlexBetween padding="2rem 2%" backgroundColor={neutralDark}>
      <Grid container spacing={3} justifyContent="center">

        {/* Branding */}
        <Grid item xs={12} sm={6} md={2.5}>
        <Box textAlign="left" padding="1rem" backgroundColor={neutralDark}>

        {isNonMobileScreens && (
          <>
          <img src={logo} alt="Logo" style={{ width: "110px", height: "110px" }} />
          </>
        )}
        {!isNonMobileScreens && (
          <>
          &nbsp;&nbsp;&nbsp;<img src={logo} alt="Logo" style={{ width: "60px", height: "60px" }} />
          </>
        )}
            <Typography
              fontWeight="bold"
              fontSize="clamp(1rem, 1.6rem, 2.25rem)"
              color="#e5e5e5"
              onClick={() => navigate("/home")}
              sx={{
                "&:hover": {
                  color: primaryLight,
                  display: "flex",
                  flexDirection: "column",
                  cursor: "pointer",
                },
              }}
            >
              &nbsp;&nbsp;&nbsp;Falcon Airlines
              <Typography color={medium} mt="-0.5rem">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Soar to new heights.&#8482;</Typography>
            </Typography>
          </Box>
        </Grid>


        {/* Quick Links */}
        <Grid item xs={12} sm={6} md={1.5}>
          <Box textAlign="center" padding="1rem" backgroundColor={neutralDark}>
            <Typography color={medium} fontSize="20px" fontWeight="500">
              Quick Links
            </Typography>
            <Typography color={medium} fontSize="15px"> &nbsp;</Typography>
            <Typography color={medium} fontSize="14px">
              <a href="/about" style={{ color: medium }}>About Us</a>
            </Typography>
            <Typography color={medium} fontSize="14px">
              <a href="/contact" style={{ color: medium }}>Contact Us</a>
            </Typography>
            <Typography color={medium} fontSize="14px">
              <a href="/book" style={{ color: medium }}>Book</a>
            </Typography>
            <Typography color={medium} fontSize="14px">
              <a href="/status" style={{ color: medium }}>Flight Status</a>
            </Typography>
          </Box>
        </Grid>

        {/* Follow Us */}
        <Grid item xs={12} sm={6} md={1}>
          <Box textAlign="center" padding="1rem" backgroundColor={neutralDark}>
            <Typography color={medium} fontSize="20px" fontWeight="500">
              Follow Us
            </Typography>
            <Typography color={medium} fontSize="15px"> &nbsp;</Typography>
            <Typography color={medium} fontSize="10px"> </Typography>
            <Typography color={medium} fontSize="20px">
              <a rel="noreferrer" target="_blank" href="https://www.facebook.com/falconairlines" style={{ color: medium }}><Facebook sx={{ fontSize: "35px" }}/></a>
            </Typography>
            <Typography color={medium} fontSize="30px">
              <a rel="noreferrer" target="_blank" href="https://twitter.com/falconairlines" style={{ color: medium }}><Twitter sx={{ fontSize: "35px" }}/></a>
            </Typography>
            <Typography color={medium} fontSize="30px">
              <a rel="noreferrer" target="_blank" href="https://instagram.com/falconairlines" style={{ color: medium }}><Instagram sx={{ fontSize: "35px" }}/></a>
            </Typography>
          </Box>
        </Grid>

        {/* Customer Support */}
        <Grid item xs={12} sm={6} md={2}>
          <Box textAlign="center" padding="1rem" backgroundColor={neutralDark}>
            <Typography color={medium} fontSize="20px" fontWeight="500">
              Customer Support
            </Typography>
            <Typography color={medium} fontSize="15px"> &nbsp;</Typography>
            <Typography color={medium} fontSize="14px">
              Phone: +973 1757 7700 (Toll Free)
            </Typography>
            <Typography color={medium} fontSize="14px">
              Email: <a rel="noreferrer" target="_blank" href="mailto:support@falconairlines.bh" style={{ color: medium }}>support@falconairlines.bh</a>
            </Typography>
          </Box>
        </Grid>

        {/* Address */}
        <Grid item xs={12} sm={6} md={3}>
          <Box textAlign="center" padding="1rem" backgroundColor={neutralDark}>
            <Typography color={medium} fontSize="20px" fontWeight="500">
              Address
            </Typography>
            <address>
            <Typography color={medium} fontSize="15px"> &nbsp;</Typography>

            <Typography color={medium} fontSize="14px">
              Bahrain: Falcon Airways Corporate, Road 855, Al-Hidd, Kingdom of Bahrain
            </Typography>
            <Typography color={medium} fontSize="14px">
              Bengaluru (India):  Ground Floor, Kempegowda International Airport, Bengaluru, India
            </Typography>
            <Typography color={medium} fontSize="14px">
              Dubai (UAE): Sheikh Isa Al Khalifa Building, Salahuddin Road, Dubai Marina, Dubai, United Arab Emirates
            </Typography>
            </address>
          </Box>
        </Grid>
      </Grid>

      
    </FlexBetween>
    <FlexBetween padding="rem 0%" backgroundColor={neutralDark}>
      {/* Horizontal Divider and Footer Information */}
      <Grid container justifyContent="center">
        <Grid item xs={12} style={{ textAlign: "center" }}>
          {/* Horizontal Divider */}
          <hr style={{ margin: "2rem 0", border: "none", borderBottom: `1px solid ${medium}`, width: "100%"}} />
          
          {/* Footer Information */}
          <Box textAlign="center" padding="0.2rem" backgroundColor={neutralDark} width="100%">
            <Typography color={medium} fontSize="14px">
              <strong>&copy; {currentYear} Falcon Airlines. All rights reserved.</strong>
            </Typography>
            <Typography color={medium} fontSize="14px" mt="0.5rem">
              <a rel="noreferrer" target="_blank" href="https://github.com/ImDedInside-git" style={{ color: medium }}>Designed by ImDedInside</a>
            </Typography>
            <Typography color={medium} fontSize="14px" mt="0.5rem">&nbsp;</Typography>

          </Box>
        </Grid>
      </Grid>
    </FlexBetween>
    </>
  );
};

export default Footer;
