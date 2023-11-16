import * as yup from "yup";

export default {
  config: {
    buttonText: "Add",
  },
  fields: [
    {
      name: "name",
      label: "Name",
      type: "text",
      placeholder: "Name",
      isRequired: true,
      styleType: "textInput",
    },
    {
      name: "description",
      label: "Description",
      type: "text",
      placeholder: "Description",
      isRequired: false,
      styleType: "textInput",
    },
    {
      name: "imgLink",
      label: "Link",
      type: "text",
      placeholder: "Insert image link",
      isRequired: false,
      styleType: "textInput",
    },
    {
      name: "startDate",
      label: "Planting date",
      type: "date",
      placeholder: "Planting date",
      isRequired: true,
      styleType: "dateInput",
    },
    {
      name: "endDate",
      label: "Harvest date",
      type: "date",
      placeholder: "Harvest date",
      isRequired: true,
      styleType: "dateInput",
    },
  ],
  yupSchema: {
    name: yup.string().required("Name is required"),
    description: yup.string(),
    imgLink: yup.string(),
    startDate: yup.string().required("Start date is required"),
    endDate: yup.string().required("End date is required"),
  },
};
