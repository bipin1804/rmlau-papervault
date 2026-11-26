

import { useState, useContext } from "react";
import apiclient from "../api/api.js";
import { useLocation, useNavigate } from "react-router-dom";
import { Appcontext } from "../context/context.jsx";
import { useEffect } from "react";

export default function Signup() {
  const location = useLocation();
  const navigate = useNavigate();

const { auth, setAuth } = useContext(Appcontext);

  const [form, setform] = useState({
    name: "",
    password: "",
    email: "",
  });

  const [msg, setmsg] = useState("");
  const [state, setstate] = useState("Login");

  const handlechange = (e) => {
    setform({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handlesubmit = async (e) => {
    e.preventDefault();





    try {
      let response;

      if (state === "Sign up") {
        response = await apiclient.post("/auth/signup", form);

        setmsg(response.data.message || "Signup successful");
        setstate("Login");
      } else {
        response = await apiclient.post(
          "/auth/login",
          {
            name: form.name,
            password: form.password,
          },
          {
            withCredentials: true,
          }
        );

        // Login successful hone par auth update karo
        setAuth(true);


        setmsg(response.data.message || "Login successful");


        // User ko requested page par wapas bhejo
        const redirectTo = location.state?.from?.pathname || "/";
        navigate(redirectTo, { replace: true });

        
navigate("/", {
  state: {
    message: response.data.message || "Paper uploaded successfully",
  },
});


      }

      console.log(response.data);
    } catch (err) {
      setmsg(
        err.response?.data?.message || "Something went wrong"
      );
      console.log(err);
    }


    

    
  };



useEffect(() => {
  if (!msg) return;

  const timer = setTimeout(() => {
    setmsg("");
  }, 2000);

  return () => clearTimeout(timer);
}, [msg]);



  return (
    <div className="min-h-[80px] flex items-center flex-col">
      <p className="text-red-500 font-bold">{msg}</p>

      <form
        onSubmit={handlesubmit}
        className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 rounded text-zinc-600 text-sm shadow-lg mt-4 mb-4"
      >
        <p className="text-2xl font-semibold">
          {state === "Sign up" ? "Create Account" : "Login"}
        </p>

        <p>
          Please {state === "Sign up" ? "sign up" : "log in"} to
          access papers
        </p>

        <div className="w-full flex flex-col gap-2">
          <label htmlFor="name" className="text-sm font-medium">
            Username
          </label>

          <input
            id="name"
            className="border py-1 rounded"
            type="text"
            placeholder="Enter your username"
            required
            value={form.name}
            name="name"
            onChange={handlechange}
          />
        </div>

        {state === "Sign up" && (
          <div className="w-full flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-medium">
              Enter Email
            </label>

            <input
              id="email"
              className="border py-1 rounded"
              type="email"
              placeholder="Enter your email"
              required
              value={form.email}
              name="email"
              onChange={handlechange}
            />
          </div>
        )}

        <div className="flex w-full flex-col gap-2">
          <label htmlFor="password" className="text-sm font-medium">
            Enter Password
          </label>

          <input
            id="password"
            className="border py-1 rounded"
            type="password"
            placeholder="Enter your password"
            required
            value={form.password}
            name="password"
            onChange={handlechange}
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white w-full py-2 rounded-md text-base"
        >
          {state === "Sign up" ? "Sign Up" : "Login"}
        </button>

        {state === "Sign up" ? (
          <p>
            Already have an account?{" "}
            <span
              onClick={() => setstate("Login")}
              className="text-blue-500 underline cursor-pointer"
            >
              Login here
            </span>
          </p>
        ) : (
          <p>
            Create a new account?{" "}
            <span
              onClick={() => setstate("Sign up")}
              className="text-blue-500 underline cursor-pointer"
            >
              Sign up
            </span>
          </p>
        )}
      </form>
    </div>
  );
}
