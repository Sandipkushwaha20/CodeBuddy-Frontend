import { useState } from "react";
import axios from "axios";
import Banner from "../public/Video/Login_logo.mp4";
const Login = () => {
  const [emailId, setEmailId] = useState("sandip1234@gmail.com");
  const [password, setPassword] = useState("Sandip@1234");

  const hangleLogin = async (e) => {
    // console.log("skskskskk")
    e.preventDefault();
    try {
      await axios.post(
        "http://localhost:3000/login",
        {
          emailId,
          password,
        },
        { withCredentials: true }
      );
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="hero bg-base-200 min-h-screen flex justify-center ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        {/* Video */}
        <div className="mx-3 my-7 shadow-[10px_-5px_50px_-5px] shadow-blue-500 gap-2 ml-12">
          <video
            className="shadow-[20px_20px_rgba(255,255,255)]"
            muted
            loop
            autoPlay
          >
            <source src={Banner} type="video/mp4" />
          </video>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-2xl font-bold flex justify-center mt-10">
            Login now!
          </h1>
          <form className="card-body" onSubmit={hangleLogin}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
                onChange={(e) => setEmailId(e.target.value)}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button
                className="btn btn-primary"
                // onSubmit={(e) => hangleLogin(e)}
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
