import React from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";

const Coffee = ({ coffee, handleDelete, updateHandle }) => {
  const { _id, photo, name, chef, price } = coffee;
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl mx-3 my-5">
        <figure className="w-6/12">
          <img src={photo} alt="Movie" className="w-full" />
        </figure>
        <div className="card-body">
          <p>{name}</p>
          <p>{chef}</p>
          <p>{price}</p>
        </div>
        <div className="flex flex-col justify-end">
          <button className="btn btn-primary mt-3">view</button>
          <Link className="btn btn-primary mt-3"to={`/update/${_id}`}>
            update
          </Link>
          <button
            className="btn btn-primary mt-3 mb-3"
            onClick={() => handleDelete(_id)}
          >
            delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Coffee;
