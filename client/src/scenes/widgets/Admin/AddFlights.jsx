import { useState } from "react";
import {
  Box,
  Button,
  TextField,
  useMediaQuery,
  Typography,
  useTheme,
} from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { Formik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLogin } from "state";
import Dropzone from "react-dropzone";
import FlexBetween from "components/FlexBetween";
import { MenuItem } from "@mui/material";


// const registerSchema = yup.object().shape({
//   firstName: yup.string().required("Required"),
//   lastName: yup.string().required("Required"),
//   email: yup.string().email("Invalid email").required("Required"),
//   password: yup.string().required("Required"),
//   location: yup.string().required("Required"),
//   occupation: yup.string().required("Required"),
//   picture: yup.string().required("Required"),
// });

// const loginSchema = yup.object().shape({
//   email: yup.string().email("invalid email").required("Email ID required"),
//   password: yup.string().required("Password required"),
// });


// const initialValuesRegister = {
//   firstName: "",
//   lastName: "",
//   email: "",
//   password: "",
//   location: "",
//   occupation: "",
//   picture: "",
// };

// const initialValuesLogin = {
//   email: "",
//   password: "",
// };

const createSchema = yup.object().shape({
  From: yup.string().required("Required"),
  To: yup.string().required("Required"),
  departureDate: yup.string().required("Required"),
  returnDate: yup.string(),
});


const initialValues = {
  from: "",
  to: "",
  departureDate: "",
  returnDate: "",
};

const Form = () => {
  const [pageType, setPageType] = useState("login");
  const { palette } = useTheme();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isNonMobile = useMediaQuery("(min-width:700px)");
  const isLogin = pageType === "login";
  const isRegister = pageType === "register";

  const register = async (values, onSubmitProps) => {
    // this allows us to send form info with image
    const formData = new FormData();
    for (let value in values) {
      formData.append(value, values[value]);
    }
    formData.append("picturePath", values.picture.name);

    const savedUserResponse = await fetch(
      "http://localhost:3001/auth/register",
      {
        method: "POST",
        body: formData,
      }
    );
    const savedUser = await savedUserResponse.json();
    onSubmitProps.resetForm();

    if (savedUser) {
      setPageType("login");
    }
  };

  const login = async (values, onSubmitProps) => {
    const loggedInResponse = await fetch("http://localhost:3001/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    const loggedIn = await loggedInResponse.json();
    onSubmitProps.resetForm();
    if (loggedIn) {
      dispatch(
        setLogin({
          user: loggedIn.user,
          token: loggedIn.token,
        })
      );
      navigate("/home");
    }
  };

  const handleFormSubmit = async (values, onSubmitProps) => {
    if (isLogin) await login(values, onSubmitProps);
    if (isRegister) await register(values, onSubmitProps);
  };

  return (
    <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={ createSchema }
    >
        {({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
            setFieldValue,
            resetForm,
        }) => (
            <form onSubmit={handleSubmit}>
                <Box
                    display="grid"
                    gap="30px"
                    gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                    sx={{
                        "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
                    }}
                >
                    {isRegister && (
                      <></>
                    )}
                       

            <TextField
                  label="flightId"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.firstName}
                  name="firstName"
                  error={
                    Boolean(touched.firstName) && Boolean(errors.firstName)
                  }
                  helperText={touched.firstName && errors.firstName}
                  sx={{ gridColumn: "span 4" }}
            />

            <TextField
                select
                label="departureAirport"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.role}
                name="departureAirport"
                error={Boolean(touched.role) && Boolean(errors.role)}
                helperText={touched.role && errors.role}
                sx={{ gridColumn: "span 2" }}
            >
                <MenuItem value="BAH">Bahrain (BAH)</MenuItem>
                <MenuItem value="BLR">Bangalore (BLR)</MenuItem>
                <MenuItem value="BKK">Bangkok (BKK)</MenuItem>
                <MenuItem value="DEL">Delhi (DEL)</MenuItem>
                <MenuItem value="DOH">Doha (DOH)</MenuItem>
                <MenuItem value="HYD">Hyderabad (HYD)</MenuItem>
                <MenuItem value="RYD">Riyadh (RYD)</MenuItem>
                <MenuItem value="SIN">Singapore (SIN)</MenuItem>

            </TextField>

            <TextField
                select
                label="arrivalAirport"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.role}
                name="arrivalAirport"
                error={Boolean(touched.role) && Boolean(errors.role)}
                helperText={touched.role && errors.role}
                sx={{ gridColumn: "span 2" }}
            >
                <MenuItem value="BAH">Bahrain (BAH)</MenuItem>
                <MenuItem value="BLR">Bangalore (BLR)</MenuItem>
                <MenuItem value="BKK">Bangkok (BKK)</MenuItem>
                <MenuItem value="DEL">Delhi (DEL)</MenuItem>
                <MenuItem value="DOH">Doha (DOH)</MenuItem>
                <MenuItem value="HYD">Hyderabad (HYD)</MenuItem>
                <MenuItem value="RYD">Riyadh (RYD)</MenuItem>
                <MenuItem value="SIN">Singapore (SIN)</MenuItem>
            </TextField>


            <Typography fontWeight="200" variant="h7" sx={{ mb: "0rem", gridColumn: "span 4" }}>
              
            </Typography>

            <Typography fontWeight="200" variant="h7" sx={{ mb: "0rem", gridColumn: "span 2" }}>
              departureDateTime
            </Typography>

            
            <Typography fontWeight="200" variant="h7" sx={{ mb: "0rem", gridColumn: "span 2" }}>
              arrivalDateTime
            </Typography>
            
            
            <TextField
                type="datetime-local"
                label=""
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.departureDate}
                name="departureDate"
                error={
                    Boolean(touched.departureDate) &&
                    Boolean(errors.departureDate)
                }
                helperText={touched.departureDate && errors.departureDate}
                sx={{ gridColumn: "span 2" }}
                inputProps={{
                    min: new Date().toISOString().split("T")[0],
                }}
            />

            <TextField
                type="datetime-local"
                label=""
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.arrivalDate}
                name="returnDate"
                error={
                    Boolean(touched.arrivalDate) &&
                    Boolean(errors.arrivalDate)
                }
                helperText={touched.arrivalDate && errors.arrivalDate}
                sx={{ gridColumn: "span 2" }}
                inputProps={{
                    min: new Date().toISOString().split("T")[0],
                }}
            />

            <TextField
                  label="availableSeats"
                  type="number"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.availableSeats}
                  name="availableSeats"
                  error={
                    Boolean(touched.availableSeats) && Boolean(errors.availableSeats)
                  }
                  helperText={touched.firstName && errors.firstName}
                  sx={{ gridColumn: "span 2" }}
            />

            <TextField
                  label="ticketPrice"
                  type="number"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.ticketPrice}
                  name="ticketPrice"
                  error={
                    Boolean(touched.ticketPrice) && Boolean(errors.ticketPrice)
                  }
                  helperText={touched.firstName && errors.firstName}
                  sx={{ gridColumn: "span 2" }}
            />

            <TextField
                  label="flightStatus"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.flightStatus}
                  name="flightStatus"
                  error={
                    Boolean(touched.flightStatus) && Boolean(errors.flightStatus)
                  }
                  helperText={touched.flightStatus && errors.flightStatus}
                  sx={{ gridColumn: "span 4" }}
            />

            


          </Box>

          {/* BUTTONS */}
          <Box
            borderRadius="2.5rem"
          >
            {/* <Button
              fullWidth
              type="submit"
              sx={{
                m: "2rem 0",
                p: "1rem",
                backgroundColor: palette.primary.main,
                color: palette.background.alt,
                "&:hover": { color: palette.primary.main },
              }}
            >
              CREATE NEW FLIGHT
            </Button> */}
            
            
          </Box>
        </form>
      )}
    </Formik>
  );
};

export default Form;
