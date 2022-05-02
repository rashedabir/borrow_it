import { toast } from "react-toastify";
import { useSetRecoilState } from "recoil";
import API from "../../utils/devApi";
import { authAtom } from "../state";
import { swalSuccess } from "../../utils/swal";

export function useUserActions() {
  const setAuth = useSetRecoilState(authAtom);

  return {
    registation,
    login,
    getProfile,
    logout,
    changePassword,
  };

  // sign up action
  async function registation(payload) {
    await API.post("/user/register", payload)
      .then((res) => {
        if (res.status === 200) {
          const { accessToken } = res.data;
          toast.success("Successfully Registered");
          localStorage.setItem("token", accessToken);
          window.location.href = "/dashboard";
        }
      })
      .catch((error) => {
        toast.error(error.response.data.msg);
      });
  }

  // login action
  async function login(payload) {
    await API.post("/user/login", payload)
      .then((res) => {
        if (res.status === 200) {
          const { accessToken } = res.data;
          toast.success("Wellcome");
          localStorage.setItem("token", accessToken);
          window.location.href = "/dashboard";
        }
      })
      .catch((error) => {
        toast.error(error.response.data.msg);
      });
  }

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
    localStorage.removeItem("token");
    setAuth(null);
    window.location.href = "/";
  }
}

export default useUserActions;
