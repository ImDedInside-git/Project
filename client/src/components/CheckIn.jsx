import { Box, Button, TextField, useMediaQuery, Typography, useTheme } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setLogin } from "state";
import { MenuItem } from "@mui/material";

const checkInSchema = yup.object().shape({
  bookingId: yup.string().required("Required"),
  lastName: yup.string().required("Required"),
});

const CheckInWidget = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { palette } = useTheme();
  const isNonMobile = useMediaQuery("(min-width:700px)");

  const handleCheckIn = async (values, onSubmitProps) => {
    // Here you can add logic to perform the CheckIn process
    // For example, sending a request to the server with the booking code and last name
    // Upon success, you can navigate to the CheckIn confirmation page or perform other actions

    onSubmitProps.resetForm();
  };

  const initialValues = {
    bookingId: "",
    lastName: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={checkInSchema}
      onSubmit={handleCheckIn}
    >
      {({
        values,
        errors,
        touched,
        handleBlur,
        handleChange,
        handleSubmit,
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
            <TextField
              label="Booking Reference"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.bookingId}
              name="bookingId"
              error={Boolean(touched.bookingId) && Boolean(errors.bookingId)}
              helperText={touched.bookingId && errors.bookingId}
              sx={{ gridColumn: "span 2" }}
            />

            <TextField
              label="Last Name"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.lastName}
              name="lastName"
              error={Boolean(touched.lastName) && Boolean(errors.lastName)}
              helperText={touched.lastName && errors.lastName}
              sx={{ gridColumn: "span 2" }}
            />

            {/* Additional fields for CheckIn can be added here */}

          </Box>

          {/* BUTTON */}
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
              CHECK IN
            </Button>
          </Box>
        </form>
      )}
    </Formik>
  );
};

export default CheckInWidget;
