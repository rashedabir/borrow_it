import { useRecoilValue, useSetRecoilState } from "recoil";
import API from "../../utils/devApi";
import { productAtom } from "../state";

export function useProductActions() {
  const setProduct = useSetRecoilState(productAtom);
  const products = useRecoilValue(productAtom);

  console.log({ products });

  return {
    getProduct,
  };

  // get auth profile data
  async function getProduct() {
    let url = `/api/products?limit=16`;
    if (products?.search !== undefined) {
      url = `/api/products?limit=16&title[regex]=${products?.search}`;
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
