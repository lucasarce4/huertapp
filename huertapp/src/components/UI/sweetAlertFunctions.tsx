import Swal from "sweetalert2";
export const setSuccesAlert = (title: string) => {
  Swal.fire({
    icon: "success",
    title,
    text: "",
    timer: 2000,
    showConfirmButton: false,
  });
};

export const setErrorAlert = (title: string) => {
  Swal.fire({
    icon: "error",
    title,
    text: "",
    timer: 2000,
    showConfirmButton: false,
  });
};
