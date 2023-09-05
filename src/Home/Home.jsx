import React, { useState } from "react";
import { FaCoffee } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import Coffee from "./Coffee";

const Home = () => {
  const allCoffee = useLoaderData();
  let [coffees, setCoffees] = useState(allCoffee)
 
   
   const handleDelete = (id) => {
     fetch(`http://localhost:3000/coffee/${id}`, {
       method: "DELETE",
     })
       .then((res) => res.json())
       .then((result) => {
         if (result.acknowledged) { 
           swal({
             title: "Are you sure?",
             text: "Once deleted, you will not be able to recover this  file!",
             icon: "warning",
             buttons: true,
             dangerMode: true,
           }).then((willDelete) => {
             if (willDelete) {
               swal("Poof! Your imaginary file has been deleted!", {
                 icon: "success",
               });
                const remain = coffees.filter((coff) => coff._id !== id);
                setCoffees(remain);
             } else {
               swal("Your imaginary file is safe!");
             }
           });
         }
        
         }
       );
   };
  return (
    <div>
      <h3 className="text-3xl font-bold text-center"> Coffees</h3>
      <div className="flex justify-center mt-12">
        <Link className="btn  bg-orange-700 mx-auto" to="/add">
          Add Coffee <FaCoffee />{" "}
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-4 ">
        {coffees.map((coffee) => (
          <Coffee key={coffee._id} coffee={coffee} handleDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
};

export default Home;
