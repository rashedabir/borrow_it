import Swal from "sweetalert2";

export function swalConfirm($msg, $title, $cText) {
  try {
    let result = Swal.fire({
      title: $title || "Are you sure?",
      text: $msg,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: $cText || "Yes, delete it!",
      allowOutsideClick: false,
    });
    return result;
  } catch (e) {
    // Fail!
    console.error(e);
    return false;
  }
}

//Error Message
export function swalError($msg, $title = "Oops...") {
  try {
    let result = Swal.fire({
      icon: "error",
      title: $title,
      text: $msg,
      allowOutsideClick: false,
    });
    return result;
  } catch (e) {
    // Fail!
    console.error(e);
    return false;
  }
}

//Error Message
export function swalWarning($msg, $title = "Oops...") {
  try {
    let result = Swal.fire({
      icon: "warning",
      title: $title,
      text: $msg,
      allowOutsideClick: false,
    });
    return result;
  } catch (e) {
    // Fail!
    return false;
  }
}

//Success Message
export function swalSuccess(
  $text = "Your work has been saved!",
  $title = "Success!",
  $html = false
) {
  try {
    let result = "";
    if ($html !== false) {
      result = Swal.fire({
        icon: "success",
        title: $title,
        html: $html,
        showConfirmButton: false,
        allowOutsideClick: false,
        timer: 2500,
      });
    } else {
      result = Swal.fire({
        icon: "success",
        title: $title,
        text: $text,
        showConfirmButton: false,
        allowOutsideClick: false,
        timer: 2500,
      });
    }
    return result;
  } catch (e) {
    // Fail!
    console.error(e);
    return false;
  }
}
