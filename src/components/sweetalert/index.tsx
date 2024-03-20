import Swal from "sweetalert2";

const Toast = Swal.mixin({
  toast: true,
  position: "bottom-start",
  iconColor: "white",
  customClass: {
    popup: "colored-toast",
  },
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
});

export default Toast