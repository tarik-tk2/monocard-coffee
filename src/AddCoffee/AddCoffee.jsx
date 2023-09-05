import React from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

const AddCoffee = () => {
    const navigate=useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
      const test = form.test.value;
      const price = form.price.value;
    const photo = form.photo.value;
    const coffee = { name, chef, supplier, test, photo, price };
    fetch("http://localhost:3000/coffee", {
      method: "POST",
      body: JSON.stringify(coffee),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then(response => response.json())
        .then(data => {
            if (data.insertedId) {
              swal({
                title: "Good job!",
                text: "You clicked the button!",
                icon: "success",
                button: "Aww yiss!",
              });
              navigate('/')  
          }
      });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="w-1/2 mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl">Add A New Coffee</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus,
            adipisci nemo. Quidem unde atque optio odio animi ad. Quisquam sunt
            voluptates eveniet laudantium tempore voluptatem aliquid neque
            tempora repellendus a.
          </p>
        </div>
        <div className="flex  flex-row">
          <label className="input-group">
            <span>Name</span>
            <input type="text" className="input input-bordered" name="name" />
          </label>
          <label className="input-group">
            <span>Chef</span>
            <input type="text" className="input input-bordered" name="chef" />
          </label>
        </div>
        <div className="flex  flex-row mt-5">
          <label className="input-group">
            <span>Supplier</span>
            <input
              type="text"
              className="input input-bordered"
              name="supplier"
            />
          </label>
          <label className="input-group">
            <span>Test</span>
            <input type="text" className="input input-bordered" name="test" />
          </label>
        </div>
        <div className="flex  flex-row mt-5">
          <label className="input-group">
            <span>Category</span>
            <input
              type="text"
              className="input input-bordered"
              name="category"
            />
          </label>
          <label className="input-group">
            <span>Price</span>
            <input
              type="text"
              className="input input-bordered"
              name="price"
            />
          </label>
        </div>
        <div className="flex  flex-row mt-5">
          <label className="input-group">
            <span>Photo URL</span>
            <input type="text" className="input input-bordered" name="photo" />
          </label>
        </div>
        <div className="mt-12  flex justify-center ">
          <button className="btn btn-warning ">Add Coffee</button>
        </div>
      </div>
    </form>
  );
};

export default AddCoffee;
