"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const apiURL = process.env.NEXT_PUBLIC_API_URL;

  // const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();

  //   if (!name || !email || !password) {
  //     setError("All fields are necessary. *");
  //     return;
  //   }

  //   try {
  //     const resUserExists = await fetch(
  //       `${apiURL}/api/user/userExists`,
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({ email }),
  //       }
  //     );

  //     if (!resUserExists.ok) {
  //       throw new Error("Failed to check if user exists. *");
  //     }

  //     const { user } = await resUserExists.json();

  //     if (user) {
  //       setError("User already exists. *");
  //       return;
  //     }

  //     const res = await fetch(`${apiURL}/api/user/register`, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         name,
  //         email,
  //         password,
  //       }),
  //     });

  //     if (!res.ok) {
  //       throw new Error("Failed to register user.");
  //     }

  //     setName("");
  //     setEmail("");
  //     setPassword("");
  //     setError("");
  //     router.replace("/");
  //   } catch (error) {
  //     console.error("Error during registration: ", error);
  //     setError("Registration failed. Please try again later. *");
  //   }
  // };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setError("All fields are necessary. *");
      return;
    }

    try {
      const resUserExists = await fetch(`${apiURL}/api/user/userExists`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (!resUserExists.ok) {
        throw new Error("Failed to check if user exists. *");
      }

      const { user } = await resUserExists.json();

      if (user) {
        setError("User already exists. *");
        return;
      }

      const res = await fetch(`${apiURL}/api/user/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to register user.");
      }

      // Automatically sign in the user after registration
      const signInResponse = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (signInResponse && !signInResponse.error) {
        // Update the session with the newly registered user
        router.replace("/");
      }

      setName("");
      setEmail("");
      setPassword("");
      setError("");
    } catch (error) {
      console.error("Error during registration: ", error);
      setError("Registration failed. Please try again later. *");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="shadow-lg p-8 rounded-lg border-t-2 w-[500px]">
        <h1 className="text-xl font-bold my-6">Register</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-[10px]">
          <input
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-900"
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Name"
          />

          <input
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500"
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Email"
          />
          <input
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500"
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
          <button className="text-black font-bold cursor-pointer px-6 py-2 border border-black rounded-md hover:bg-gray-200 hover:border-gray-900  transition duration-300">
            Register
          </button>

          {error && (
            <div className=" text-red-500 text-sm py-1 px-3 rounded-md mt-2">
              {error}
            </div>
          )}

          <a href="/login" className="text-sm mt-3 text-right">
            Already have an account? <span className="underline">Login</span>
          </a>
        </form>
      </div>
    </div>
  );
}
