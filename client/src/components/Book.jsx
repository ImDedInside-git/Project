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
// import FlexBetween from "scenes/components/FlexBetween";
import { MenuItem } from "@mui/material";


const bookSchema = yup.object().shape({
  From: yup.string().required("Required"),
  To: yup.string().required("Required"),
  Class: yup.string().required("Required"),
  departureDate: yup.string().required("Required"),
  returnDate: yup.string(),
});

const initialValues = {
  from: "",
  to: "",
  class: "",
  departureDate: "",
  returnDate: "",
};



const Book = () => {
  const [pageType, setPageType] = useState("login");
  const { palette } = useTheme();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isNonMobile = useMediaQuery("(min-width:700px)");
  const isLogin = pageType === "login";
  const isRegister = pageType === "register";

  const checkavail = async (values, onSubmitProps) => {
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

  const checkFlights = async (values, onSubmitProps) => {
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
    await checkFlights(values, onSubmitProps);
  };

return (
    <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={ bookSchema }
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
                select
                label="From"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.role}
                name="From"
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
                label="To"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.role}
                name="To"
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
                label="Class"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.role}
                name="Class"
                error={Boolean(touched.role) && Boolean(errors.role)}
                helperText={touched.role && errors.role}
                sx={{ gridColumn: "span 4" }}
            >
                <MenuItem value="F">Falcon Elite (First Class)</MenuItem>
                <MenuItem value="B">Falcon Executive (Business Class)</MenuItem>
                <MenuItem value="E">Economy</MenuItem>
            </TextField>

            <Typography fontWeight="200" variant="h7" sx={{ mb: "0rem", gridColumn: "span 4" }}>
              Dates
            </Typography>
            
            <TextField
                type="date"
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
                type="date"
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

            


          </Box>

          {/* BUTTONS */}
          <Box
            borderRadius="2.5rem"
          >
            <Button
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
              CHECK AVAILABLITY
            </Button>
            
            
          </Box>
        </form>
      )}
    </Formik>
  );
};

export default Book;
