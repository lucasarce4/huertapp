import * as yup from "yup";

export default {
  config: {
    buttonText: "Add",
  },
  fields: [
    {
      name: "title",
      label: "Title",
      type: "text",
      placeholder: "Title",
      isRequired: true,
      styleType: "textInput",
    },
    {
      name: "startDate",
      label: "Start date",
      type: "date",
      placeholder: "Start date",
      isRequired: true,
      styleType: "dateInput",
    },
    {
      name: "endDate",
      label: "End date",
      type: "date",
      placeholder: "Start date",
      isRequired: true,
      styleType: "dateInput",
    },
  ],
  yupSchema: {
    title: yup.string().required("Title is required"),
    startDate: yup.string().required("Start date is required"),
    endDate: yup.string().required("End date is required"),
  },
};
