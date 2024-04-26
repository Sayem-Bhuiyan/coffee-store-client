import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee }) => {
  const {
    _id,
    coffeeName,
    photo,
    quantity,
    supplierName,
    categoryName,
    taste,
  } = coffee;

  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        
        console.log('delete confromed')
        fetch(`http://localhost:5000/coffee/${id}`, {
          method: "DELETE"
        })
        .then(res => res.json())
        .then(data => {
          console.log(data);
         if(data.deletedCount > 0) {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
            
          });
         }
        })
      }
    });
  };
  return (
    <div className="card card-side bg-base-100 shadow-xl flex items-center gap-6">
      <figure>
        <img src={photo} alt="Coffee image" />
      </figure>
      <div className="flex  w-full justify-between">
        <div className="text-left">
          <h2 className="card-title">Name: {coffeeName}</h2>
          <p>{quantity}</p>
          <p>{supplierName}</p>
          <p>{categoryName}</p>
          <p>{taste}</p>
        </div>
        <div className="card-actions justify-end">
          <div className="join join-vertical space-y-3">
            <button className="btn join-item">View</button>
            <Link 
            to={`/updateCoffee/${_id}`} className="btn join-item">Edit</Link>
            <button
              onClick={() => handleDelete(_id)}
              className="btn join-item bg-red-500 text-white"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
CoffeeCard.propTypes = {
  coffee: PropTypes.object,
};

export default CoffeeCard;
