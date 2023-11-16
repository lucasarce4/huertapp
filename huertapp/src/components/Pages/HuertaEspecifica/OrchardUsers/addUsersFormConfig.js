import * as yup from "yup";

export default {
  config: {
    buttonText: "Add",
  },
  fields: [
    {
      name: "user_email",
      label: "Email",
      type: "text",
      placeholder: "User email",
      isRequired: true,
      styleType: "textInput",
    },
  ],
  yupSchema: {
    user_email: yup
      .string()
      .email("Ivalid email format")
      .required("Email required"),
  },
};
