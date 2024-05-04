import {  useContext, useEffect } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import axios from "axios";

const SignUp = () => {
    const {createUser} = useContext(AuthContext)
    const handleSignUp = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
        .then(userCredential => {
            const result = userCredential.user;
            const createdAt = result.metadata?.creationTime;
            const lastSignIn = result?.metadata?.lastSignInTime;
            console.log(lastSignIn);
            console.log(result);
            const user ={ email, createdAt: createdAt, lastSignIn: lastSignIn};

            // using Axios
            axios.post('http://localhost:5000/user', user)
            .then(data => {
              console.log(data.data);
            })

            // usging fetch
            // fetch('http://localhost:5000/user', {
            //     method: "POST", 
            //     headers: {
            //         'content-type': 'application/json'
            //     },
            //     body: JSON.stringify(user)
            // })
            // .then(res => res.json())
            // .then(data => {
            //     console.log(data);
            //     if(data.insertedId){
            //         Swal.fire({
            //             title: 'Success',
            //             text: 'Account Created Successfully',
            //             icon: 'success',
            //             confirmButtonText: 'Okay'
            //           })
            //     }
            // })
            form.reset()
        })
        .catch(error => {
            console.log(error);
        })
    }
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col ">
        <div className="text-center ">
          <h1 className="text-5xl font-bold">SignUp now!</h1>
          
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSignUp} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
             
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
