import Swal from "sweetalert2";

type AlertType = {
  icon: "success" | "warning" | "error" | "info" | "question";
  title: string;
  text: string;
  timer: number;
  showConfirmButton: boolean;
};

const AlertUi = ({
  icon,
  title,
  text,
  timer = 2000,
  showConfirmButton = false,
}: AlertType) => {
  return Swal.fire({
    icon,
    title,
    text,
    timer,
    showConfirmButton,
  });
};

export default AlertUi;
