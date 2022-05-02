import React, { useEffect, useState } from "react";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import API from "../utils/devApi";
import Select from "react-select";
import { useRecoilValue } from "recoil";
import { authAtom } from "../_recoil/state";
import { swalConfirm, swalError, swalSuccess } from "../utils/swal";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const init = {
  condition: "",
  authenticity: "",
  title: "",
  brand: "",
  model: "",
  description: "",
  price: undefined,
  damageWaiver: undefined,
  division: "",
  state: "",
  category: "",
  images: [
    {
      public_id: "",
      url: "",
    },
  ],
  phone1: undefined,
  phone2: undefined,
};

export const CreateEditPost = () => {
  const navigate = useNavigate();
  const profileInfo = useRecoilValue(authAtom);
  const [category, setCategory] = useState([]);
  const [division, setDivision] = useState([]);
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(false);

  // Validation schema
  const validationSchema = Yup.object().shape({
    condition: Yup.string().required("Field is required"),
    authenticity: Yup.string().required("Field is required"),
    title: Yup.string().required("Title is required"),
    brand: Yup.string().required("Brand is required"),
    model: Yup.string().required("Model is required"),
    description: Yup.string().required("Description is required"),
    price: Yup.number().required("Price is required"),
    damageWaiver: Yup.number().required("Field is required"),
    division: Yup.string().required("Division is required"),
    category: Yup.string().required("Category is required"),
    phone1: Yup.number().required("Phone Number is required"),
    images: Yup.array().of(
      Yup.object().shape({
        public_id: Yup.string().required("required-field"),
        url: Yup.string().required("required-field"),
      })
    ),
  });

  // fetch state
  const getState = async (id) => {
    await API.get(`/api/district/${id}`).then((res) => {
      if (res.status === 200) {
        const { data } = res;
        setState(() =>
          data.map((item) => {
            return {
              value: item.id,
              label: item.name,
            };
          })
        );
      }
    });
  };

  // handle click event of the Remove button
  const handleRemoveClick = (values, index, setFieldValue) => {
    swalConfirm(
      "You won't be able to revert this!",
      "Are you sure?",
      "Yes, delete it!"
    ).then((result) => {
      if (result.isConfirmed) {
        const images = [...values.images];
        images.splice(index, 1);
        if (values.images[index].url.length > 0) {
          handleDestroy(values.images[index]);
        }
        setFieldValue("images", images);
        swalSuccess("Your field has been deleted.");
      }
    });
  };

  // image upload
  const handleUpload = async (e, setFieldValue, i) => {
    e.preventDefault();
    setLoading(true);
    try {
      const file = e.target.files[0];
      let formData = new FormData();
      formData.append("file", file);
      const res = await API.post("/api/media/upload", formData);
      setFieldValue(`images.${i}`, {
        public_id: res.data.public_id,
        url: res.data.url,
      });
    } catch (error) {
      toast.error(error.response.data.msg);
    }
    setLoading(false);
  };

  // image delete
  const handleDestroy = async (image) => {
    try {
      setLoading(true);
      await API.post("/api/media/destroy", { public_id: image.public_id });
      setLoading(false);
    } catch (err) {
      toast.error(err.response.data.msg);
    }
  };

  // handle form submit
  const handleSubmitForm = async (values) => {
    setLoading(true);
    await API.post("/api/product", values)
      .then((res) => {
        if (res.status === 200) {
          swalSuccess("Product Added");
          navigate("/dashboard");
          setLoading(false);
        } else {
          swalError("something went wrong");
          setLoading(false);
        }
      })
      .catch((error) => {
        toast.error(error.response.data.msg);
        setLoading(false);
      });
    setLoading(false);
  };

  useEffect(() => {
    // fetch category
    const getCategory = async () => {
      await API.get("/api/category").then((res) => {
        if (res.status === 200) {
          const { data } = res;
          setCategory(() =>
            data.map((item) => {
              return item.name;
            })
          );
        }
      });
    };

    // fetch division
    const getDivision = async () => {
      await API.get("/api/division").then((res) => {
        if (res.status === 200) {
          const { data } = res;
          setDivision(() =>
            data.map((item) => {
              return {
                value: item.id,
                label: item.name,
              };
            })
          );
        }
      });
    };

    // callback
    getCategory();
    getDivision();
  }, []);

  return (
    <section id="add_post">
      <Formik
        initialValues={init}
        enableReinitialize={true}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          handleSubmitForm(values);
        }}
      >
        {({ handleSubmit, setFieldValue, values, errors, touched }) => {
          return (
            <Form className="needs-validation">
              <div className="container">
                <div className="row">
                  <div className="offset-lg-2 col-lg-8">
                    <div className="product_condition one">
                      <h3>condition</h3>
                      <div className="condition">
                        <div className="left">
                          <Field
                            type="radio"
                            id="lala"
                            name="condition"
                            value={"used"}
                          />
                          <label htmlFor="lala">Used</label>
                        </div>

                        <div className="right">
                          <Field
                            type="radio"
                            name="condition"
                            id="new"
                            value={"new"}
                          />
                          <label htmlFor="new">New</label>
                        </div>
                      </div>
                      {errors?.condition && touched?.condition && (
                        <div className="invalid-feedback">
                          {errors.condition}
                        </div>
                      )}
                    </div>

                    <div className="product_condition">
                      <h3>Authenticity</h3>
                      <div className="condition">
                        <div className="left">
                          <Field
                            type="radio"
                            id="original"
                            name="authenticity"
                            value="original"
                          />
                          <label htmlFor="original">Original</label>
                        </div>

                        <div className="right">
                          <Field
                            type="radio"
                            name="authenticity"
                            id="Refurbished"
                            value="refurbished"
                          />
                          <label htmlFor="Refurbished">Refurbished</label>
                        </div>
                      </div>
                      {errors?.authenticity && touched?.authenticity && (
                        <div className="invalid-feedback">
                          {errors.authenticity}
                        </div>
                      )}
                    </div>

                    <div className="brand">
                      <div className="title">
                        <label>Title</label>
                        <Field name="title" type="text" placeholder="Title" />
                        {errors?.title && touched?.title && (
                          <div className="invalid-feedback">{errors.title}</div>
                        )}
                      </div>
                      <div className="top">
                        <label>Brand</label>
                        <Field name="brand" type="text" placeholder="Brand" />
                        {errors?.brand && touched?.brand && (
                          <div className="invalid-feedback">{errors.brand}</div>
                        )}
                      </div>

                      <div className="bottom">
                        <label>Model</label>
                        <Field name="model" type="text" placeholder="Model" />
                        {errors?.model && touched?.model && (
                          <div className="invalid-feedback">{errors.model}</div>
                        )}
                      </div>

                      <div className="details">
                        <label>Description</label>
                        <textarea
                          name="description"
                          id=""
                          placeholder="More details = more interested buyers!"
                          onChange={(e) => {
                            setFieldValue("description", e.target.value);
                          }}
                          value={values.description ?? ""}
                        ></textarea>
                        {errors?.description && touched?.description && (
                          <div className="invalid-feedback">
                            {errors.description}
                          </div>
                        )}
                      </div>
                      <div className="price">
                        <label>price (Tk)</label>
                        <input
                          onChange={(e) => {
                            setFieldValue("price", e.target.value);
                          }}
                          value={values.price ?? ""}
                          name="price"
                          type="number"
                          placeholder="Price"
                          onWheel={() => document.activeElement.blur()}
                        />
                        {errors?.price && touched?.price && (
                          <div className="invalid-feedback">{errors.price}</div>
                        )}
                      </div>
                      <div className="price">
                        <label>Damage Waiver (Tk)</label>
                        <input
                          onChange={(e) => {
                            setFieldValue("damageWaiver", e.target.value);
                          }}
                          value={values.damageWaiver ?? ""}
                          name="damageWaiver"
                          type="number"
                          onWheel={() => document.activeElement.blur()}
                          placeholder="Damage Waiver cost"
                        />
                        {errors?.damageWaiver && touched?.damageWaiver && (
                          <div className="invalid-feedback">
                            {errors.damageWaiver}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="category">
                      <label>Category</label>
                      <select
                        className="form-select"
                        aria-label="Default select example"
                        onChange={(e) => {
                          setFieldValue("category", e.target.value);
                        }}
                        value={values.category ?? ""}
                      >
                        <option value="" disabled>
                          Select a Category
                        </option>
                        {category &&
                          category.length > 0 &&
                          category.map((item, i) => (
                            <option key={i} value={item}>
                              {item}
                            </option>
                          ))}
                      </select>
                      {errors?.category && touched?.category && (
                        <div className="invalid-feedback">
                          {errors.category}
                        </div>
                      )}
                    </div>

                    <div className="category">
                      <label>Division</label>
                      <Select
                        className="basic-single"
                        classNamePrefix="select"
                        isLoading={division.length > 0 ? false : true}
                        isSearchable={true}
                        name="division"
                        placeholder="Select Division"
                        defaultValue={values.division ?? ""}
                        options={division ?? []}
                        onChange={async (e) => {
                          setFieldValue("division", e.label);
                          await getState(e.value);
                        }}
                      />
                      {errors?.division && touched?.division && (
                        <div className="invalid-feedback">
                          {errors.division}
                        </div>
                      )}
                    </div>

                    <div className="category">
                      <label>District</label>
                      <Select
                        className="basic-single"
                        classNamePrefix="select"
                        isLoading={state.length > 0 ? false : true}
                        isSearchable={true}
                        name="state"
                        placeholder="Select District"
                        defaultValue={values.state ?? ""}
                        options={state ?? []}
                        onChange={async (e) => {
                          setFieldValue("state", e.label);
                        }}
                      />
                    </div>

                    <div className="add_img">
                      <div className="images">
                        {values.images.map((item, i, row) => (
                          <div className="upload" key={i}>
                            <input
                              type="file"
                              name="file"
                              id="file_up"
                              key={i}
                              onChange={(e) => {
                                handleUpload(e, setFieldValue, i);
                              }}
                            />
                            {errors?.images && touched?.images && (
                              <div className="invalid-feedback">
                                {errors.images[i]?.public_id}
                              </div>
                            )}
                            {values.images.length > 1 && (
                              <span
                                onClick={() => {
                                  handleRemoveClick(values, i, setFieldValue);
                                }}
                              >
                                X
                              </span>
                            )}

                            {row[i].url.length > 0 && (
                              <div id="file_img">
                                <img
                                  src={item.url ? item.url : ""}
                                  alt=""
                                  style={{
                                    display:
                                      row[i].url.length > 0 ? "block" : "none",
                                  }}
                                />
                                {row.length > 1 && (
                                  <span
                                    onClick={() => {
                                      handleRemoveClick(
                                        values,
                                        i,
                                        setFieldValue
                                      );
                                    }}
                                  >
                                    X
                                  </span>
                                )}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>

                      <h3>Add up to 5 photos</h3>

                      {values.images.length === 5 ? null : (
                        <label
                          onClick={() => {
                            setFieldValue(`images.${values.images.length}`, {
                              public_id: "",
                              url: "",
                            });
                          }}
                        >
                          Add Image
                        </label>
                      )}
                    </div>

                    <div className="contact_details">
                      <h3>Contact details</h3>
                      <p className="name">
                        Name: <span>{profileInfo?.name}</span>
                      </p>
                      <p className="email">
                        Email: <span>{profileInfo?.email}</span>
                      </p>

                      <div className="main">
                        <div className="mb-3 left">
                          <label className="form-label">Phone-1</label>
                          <input
                            type="number"
                            className="form-control"
                            name="phone1"
                            placeholder="Enter Your Phone Number"
                            value={values.phone1 ?? ""}
                            onChange={(e) => {
                              setFieldValue("phone1", e.target.value);
                            }}
                            onWheel={() => document.activeElement.blur()}
                          />
                          {errors?.phone1 && touched?.phone1 && (
                            <div className="invalid-feedback">
                              {errors.phone1}
                            </div>
                          )}
                        </div>
                        <div className="mb-3 right">
                          <label className="form-label">Phone-2</label>
                          <input
                            onChange={(e) => {
                              setFieldValue("phone2", e.target.value);
                            }}
                            value={values.phone2 ?? ""}
                            type="number"
                            className="form-control"
                            name="phone2"
                            placeholder="Enter Your Phone Number"
                            onWheel={() => document.activeElement.blur()}
                          />
                        </div>
                      </div>
                    </div>

                    <button
                      className="post_ad_btn"
                      onClick={() => {
                        handleSubmit();
                      }}
                      type="button"
                      disabled={loading}
                    >
                      Post Ad
                    </button>
                  </div>
                </div>
              </div>
            </Form>
          );
        }}
      </Formik>
    </section>
  );
};

export default CreateEditPost;
