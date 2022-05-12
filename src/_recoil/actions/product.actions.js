import { useSetRecoilState } from "recoil";
import API from "../../utils/devApi";
import { productAtom } from "../state";

export function useProductActions() {
  const setProduct = useSetRecoilState(productAtom);

  return {
    getProduct,
  };

  // get auth profile data
  async function getProduct(search = false) {
    let url = `/api/products?limit=16`;
    if (search !== undefined || search !== false) {
      url = `/api/products?limit=16&title[regex]=${search}`;
    }
    await API.get(url)
      .then((res) => {
        if (res.status === 200) {
          setProduct(() => ({
            products: res?.data,
          }));
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

export default useProductActions;
