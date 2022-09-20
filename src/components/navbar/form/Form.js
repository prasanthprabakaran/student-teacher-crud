import "./form.css";
// import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";

const FormValidationSchema = yup.object({
  name: yup.string().required("Name field must be filled"),
  std: yup.string().required("Please fill the standard you study"),
  section: yup.string().required("Please fill the class field"),
  description: yup.string().required("Please fill the description field"),
});

const Form = () => {
  // const [name, setName] = useState('');

  const navigate = useNavigate();

  const formData = (newData) => {
    fetch("https://627dfc9e271f386cefeeddb7.mockapi.io/school-data", {
      method: "POST",
      body: JSON.stringify(newData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(navigate("/success"));
    console.log(newData);
  };

  const { handleSubmit, values, handleChange, handleBlur, touched, errors } =
    useFormik({
      initialValues: {
        name: "",
        std: "",
        section: "",
        description: "",
      },
      validationSchema: FormValidationSchema,
      onSubmit: (newData) => {
        console.log("onSubmit=", newData);
        formData(newData);
      },
    });

  return (
    <form onSubmit={handleSubmit} className="add-data-form">
        <TextField
          label="Name"
          variant="filled"
          name="name"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.name && errors.name ? true : false}
          helperText={touched.name && errors.name ? errors.name : ""}
        />
        <TextField
          label="std"
          variant="outlined"
          name="std"
          value={values.std}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.std && errors.std ? true : false}
          helperText={touched.std && errors.std ? errors.std : ""}
        />
        <TextField
          label="section"
          variant="outlined"
          name="section"
          value={values.section}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.section && errors.section ? true : false}
          helperText={touched.section && errors.section ? errors.section : ""}
        />
        <TextField
          label="description"
          variant="outlined"
          name="description"
          value={values.description}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.description && errors.description ? true : false}
          helperText={
            touched.description && errors.description ? errors.description : ""
          }
        />
      <Button variant="outlined" type="submit">
        Submit
      </Button>
    </form>
  );
};

export default Form;
