"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import SimpleButton from "@/app/components/button";
import CustomInput from "@/app/components/input";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    if (res.ok) {
      router.push("/admin/dashboard");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="bg-background-100 h-screen flex items-center justify-center">
      <div className="bg-background-200 max-w-2xl rounded-2xl p-4">
          <h1 className="text-2xl md:text-4xl">Admin Login</h1>
          <form onSubmit={handleSubmit} className="flex flex-col">
            <CustomInput
                name="username"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <CustomInput
            name="Password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <SimpleButton type="submit" inform="Login"></SimpleButton>
            {error && <p>{error}</p>}
          </form>
          <p>
            Don't have an account? <a className="text-secondary-500 font-bold hover:text-accent-500" href="/admin/register">Register</a>
          </p>
      </div>
    </div>
  );
}
