import * as yup from "yup";

const loginSchema = yup.object({
  name: yup
    .string()
    .required("required name")
    .min(2, "name must be 2 or more character"),
  email: yup
    .string()
    .required("Required email")
    .matches(
      /^[A-Za-z0-9]+@redberry\.ge$/,
      "Please enter valid email address, ex: niKa7@redberry.ge"
    ),
  tel: yup
    .string()
    .required("Required phone number")
    .min(9, "tel number must be 9 numbers")
    .max(9, "tel number must be 9 numbers")
    .matches(/^\d{9}$/, "The telephone number must consist of 9 digits"),
  date: yup
    .string()
    .required("Required date of birth")
    .matches(
      /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{4}$/,
      "Please enter valid date, ex:01/31/2000"
    ),
});
export default loginSchema;
