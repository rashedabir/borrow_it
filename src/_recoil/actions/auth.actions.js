import { toast } from "react-toastify";
import { useSetRecoilState } from "recoil";
import API from "../../utils/devApi";
import { authAtom } from "../state";
import { swalSuccess } from "../../utils/swal";
import Cookies from "js-cookie";

export function useUserActions() {
  const setAuth = useSetRecoilState(authAtom);

  return {
    getProfile,
    logout,
    changePassword,
  };

  // password change action
  async function changePassword(payload, action) {
    await API.post("/user/change-password", payload)
      .then((res) => {
        if (res.status === 200) {
          action.resetForm();
          swalSuccess("Password Change");
        }
      })
      .catch((error) => {
        toast.error(error.response.data.msg);
      });
  }

  // get auth profile data
  async function getProfile() {
    await API.get("/user/profile")
      .then((res) => {
        if (res.status === 200) {
          setAuth(res.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // remove user from local storage, set auth state to null and redirect to home page
  async function logout() {
    await API.get("/user/logout").then((res) => {
      if (res.status === 200) {
        localStorage.removeItem("token");
        Cookies.remove("refreshToken");
        setAuth(null);
        window.location.href = "/";
      }
    });
  }
}

export default useUserActions;
