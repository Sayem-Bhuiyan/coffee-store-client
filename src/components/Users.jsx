import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Users = () => {
  const loadedUsers = useLoaderData();
  const [users, setUsers] = useState(loadedUsers);
  const handleDelete = id => {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
            fetch(`http://localhost:5000/user/${id}`, {
                method: "DELETE",
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount > 0){
                    Swal.fire({
                        title: 'Success',
                        text: 'User Deleted Successfully',
                        icon: 'success',
                        confirmButtonText: 'Okay'
                      })
                }
                const remaining = users.filter(user => user._id !== id);
                setUsers(remaining)
            })
        }
      });
  }
  return (
    <div>
      <h2>users: {users.length}</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>Created At</th>
              <th>Last Logged In</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                  <th>{index + 1}</th>
                  <td>{user?.email}</td>
                  <td>{user?.createdAt}</td>
                  <td>{user?.lastSignIn}</td>
                  <td>
                    <button onClick={() => handleDelete(user._id)}>X</button>
                  </td>
                </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
