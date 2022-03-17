import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";


const toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

const timedModal = Swal.mixin({
  toast: false,
  position: 'center',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
})



export {
  toast,
  timedModal
}
