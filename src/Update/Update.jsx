import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import swal from "sweetalert";
const Update = () => {
  const loader = useLoaderData();
  const navigate = useNavigate();
  const { _id, photo, test, name, chef, price, supplier, category } = loader;
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const test = form.test.value;
    const price = form.price.value;
    const photo = form.photo.value;
    const coffee = { name, chef, supplier, test, photo, price };
    fetch(`http://localhost:3000/update/${_id}`, {
      method: "PUT",
      body: JSON.stringify(coffee),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.acknowledged) {
          swal({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success",
            button: "Aww yiss!",
          });
          navigate("/");
        }
      });
  };

  return (
    <div>
      <h3 className="text-3xl text-center mb-5">update </h3>
      <form onSubmit={handleUpdate}>
        <div className="w-1/2 mx-auto">
          <div className="flex  flex-row">
            <label className="input-group">
              <span>Name</span>
              <input
                type="text"
                className="input input-bordered"
                name="name"
                defaultValue={name}
              />
            </label>
            <label className="input-group">
              <span>Chef</span>
              <input
                type="text"
                className="input input-bordered"
                name="chef"
                defaultValue={chef}
              />
            </label>
          </div>
          <div className="flex  flex-row mt-5">
            <label className="input-group">
              <span>Supplier</span>
              <input
                type="text"
                className="input input-bordered"
                name="supplier"
                defaultValue={supplier}
              />
            </label>
            <label className="input-group">
              <span>Test</span>
              <input
                type="text"
                className="input input-bordered"
                name="test"
                defaultValue={test}
              />
            </label>
          </div>
          <div className="flex  flex-row mt-5">
            <label className="input-group">
              <span>Category</span>
              <input
                type="text"
                className="input input-bordered"
                name="category"
                defaultValue={category}
              />
            </label>
            <label className="input-group">
              <span>Price</span>
              <input
                type="text"
                className="input input-bordered"
                name="price"
                defaultValue={price}
              />
            </label>
          </div>
          <div className="flex  flex-row mt-5">
            <label className="input-group">
              <span>Photo URL</span>
              <input
                type="text"
                className="input input-bordered"
                name="photo"
                defaultValue={photo}
              />
            </label>
          </div>
          <div className="mt-12  flex justify-center ">
            <button className="btn btn-warning ">Update Coffee</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Update;
