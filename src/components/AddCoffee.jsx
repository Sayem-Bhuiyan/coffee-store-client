import Swal from 'sweetalert2'

const AddCoffee = () => {

    const handleAddCoffee = e => {
        e.preventDefault();
        const form = e.target;
        const coffeeName = form.coffeeName.value;
        const quantity = form.quantity.value;
        const supplierName = form.supplierName.value;
        const taste = form.taste.value;
        const categoryName = form.categoryName.value;
        const details = form.details.value;
        const photo = form.photoURL.value;

        const newCoffee = {
            coffeeName, quantity, supplierName, taste, categoryName, details, photo
        }
        
        fetch('http://localhost:5000/coffee', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success',
                    text: 'User Added to Database',
                    icon: 'success',
                    confirmButtonText: 'Okay'
                  })
                  form.reset()
            }
        })
    }
  return (
    <div className="bg-[#F4F3F0] p-28">
      <h2 className="text-4xl font-bold">Add New Coffee</h2>
      <form onSubmit={handleAddCoffee}>
        {/* form row */}
        <div className="flex gap-6 mb-6">
          <div className="form-control md:w-1/2 ">
            <label className="label">
              <span className="label-text">Coffee Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter Coffee Name"
              name="coffeeName"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control md:w-1/2 ">
            <label className="label">
              <span className="label-text">Quantity</span>
            </label>
            <input
              type="text"
              placeholder="Enter Qunatity"
              name="quantity"
              className="input input-bordered w-full"
              required
            />
          </div>
        </div>

        {/* form row */}
        <div className="flex gap-6 mb-6">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Supplier Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter Supplier Name"
              name="supplierName"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Taste</span>
            </label>
            <input
              type="text"
              placeholder="How it Taste"
              name="taste"
              className="input input-bordered w-full"
              required
            />
          </div>
        </div>

        {/* form row */}
        <div className="flex gap-6 mb-6">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Category Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter Category Name"
              name="categoryName"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <input
              type="text"
              placeholder="Enter Details"
              name="details"
              className="input input-bordered w-full"
              required
            />
          </div>
        </div>

        {/* form row */}
        <div className="flex gap-6 mb-6">
          <div className="form-control md:w-full">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input
              type="text"
              placeholder="Enter Photo URL"
              name="photoURL"
              className="input input-bordered w-full"
              required
            />
          </div>
        </div>
        <input className="btn btn-block text-white font-semibold text-xl" type="submit" value="Add Coffee" />
      </form>
    </div>
  );
};

export default AddCoffee;
