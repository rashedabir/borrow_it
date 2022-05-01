import { useSetRecoilState } from "recoil";
import API from "../../utils/devApi";
import { categoryAtom } from "../state";

export function useCategoryActions() {
  const setCategory = useSetRecoilState(categoryAtom);

  return {
    getCategory,
  };

  // get auth profile data
  async function getCategory(
    title = false,
    division = false,
    district = false
  ) {
    let url = "/api/product?limit=16";
    if (division && !district && !title) {
      url = `/api/product?limit=16&division=${division}`;
    } else if (division && district && !title) {
      url = `/api/product?limit=16&division=${division}&state=${district}`;
    } else if (title && !division && !district) {
      url = `/api/product?limit=16&title[regex]=${title}`;
    } else if (title && division && district) {
      url = `/api/product?limit=16&division=${division}&state=${district}&title[regex]=${title}`;
    }
    await API.get(url)
      .then((res) => {
        if (res.status === 200) {
          setCategory(res.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

export default useCategoryActions;
