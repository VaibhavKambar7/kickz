"use client";

import { useState, FormEvent } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      if (!email || !password) {
        setError("All fields are necessary. *");
        return;
      }

      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res && res.error) {
        setError("Invalid Credentials. *");
        return;
      }

      router.replace("/");
    } catch (error) {
      console.error("Unexpected login error:", error);
      setError("Login failed. Please try again later. *");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="shadow-lg p-8 rounded-lg border-t-2 w-[500px]">
        <h1 className="text-xl font-bold my-6">Login</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-[10px]">
          <input
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500"
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
          />
          <input
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500"
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />

          <button className="text-black font-bold cursor-pointer px-6 py-2 border border-black rounded-md hover:bg-gray-200 hover:border-gray-900  transition duration-300">
            Login
          </button>
          {error && (
            <div className=" text-red-500 text-sm py-1 px-3 rounded-md mt-2">
              {error}
            </div>
          )}

          <a href="/register" className="text-sm mt-3 text-right">
            Don't have an account? <span className="underline">Register</span>
          </a>
        </form>
      </div>
    </div>
  );
}
