import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { authAtom } from "../_recoil/state";
import API from "../utils/devApi";
import { swalConfirm, swalError, swalSuccess } from "../utils/swal";
import { toast } from "react-toastify";

export const Dashboard = () => {
  const profileInfo = useRecoilValue(authAtom);
  const token = localStorage.getItem("token");
  const [products, setProducts] = useState([]);

  // delete product image
  const handleDestroy = async (image) => {
    try {
      if (image.length > 0) {
        for (let i = 0; i < image.length; i++) {
          await API.post("/api/media/destroy", {
            public_id: image[i].public_id,
          });
        }
      }
    } catch (err) {
      toast.error(err.response.data.msg);
    }
  };

  // handle delete product
  const handleDeleteProduct = async (id, product) => {
    swalConfirm(
      "You won't be able to revert this!",
      "Are you sure?",
      "Yes, delete it!"
    ).then(async (result) => {
      if (result.isConfirmed) {
        await API.delete(`/api/product/${id}`)
          .then(async (res) => {
            if (res.status === 200) {
              await handleDestroy(product?.images);
              const data = products.filter((item) => item?._id !== id);
              setProducts(data);
              swalSuccess("Product Deleted");
            } else {
              swalError("something went wrong");
            }
          })
          .catch((err) => {
            swalError(err.response.data.msg);
          });
      }
    });
  };

  useEffect(() => {
    // get products
    const getProducts = async () => {
      await API.get("/user/product")
        .then((res) => {
          if (res.status === 200) {
            setProducts(res.data);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    };
    if (token) {
      getProducts();
    }
  }, [token]);

  return (
    <section id="post_part">
      <div className="container">
        <div className="item">
          <div className="row">
            <div className="col-lg-4">
              <h2>{profileInfo?.name}</h2>
              <div className="add_post_btn">
                <Link to="/create-post">Post your ad now!</Link>
              </div>
            </div>

            <div className="col-lg-8">
              <h3>My Post</h3>
              {products &&
                products.length > 0 &&
                products
                  .slice(0)
                  .reverse()
                  .map((item, i) => (
                    <div className="post_item_link" key={i}>
                      <div className="post_item">
                        <div className="img">
                          <img src={item?.images[0]?.url} alt={item?.title} />
                        </div>
                        <div className="text">
                          <h3>{item?.title}</h3>
                          <p>
                            <i className="fa-solid fa-location-dot"></i>{" "}
                            {item?.division}
                            {item?.state && ","} {item?.state}
                          </p>
                          <h4 className="price">
                            {item?.damageWaiver} <span>Tk/day</span>
                          </h4>
                        </div>
                        <div
                          className="delete_btn"
                          onClick={() => {
                            handleDeleteProduct(item?._id, item);
                          }}
                        >
                          <button>Delete Ad ??</button>
                        </div>
                      </div>
                    </div>
                  ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
