import * as yup from "yup";

export default {
  config: {
    buttonText: "Add",
  },
  fields: [
    {
      name: "orchard_name",
      label: "Orchard name",
      type: "text",
      placeholder: "Orchard name",
      isRequired: true,
      styleType: "textInput",
    },
  ],
  yupSchema: {
    orchard_name: yup.string().required("Orchard name is required"),
  },
};
