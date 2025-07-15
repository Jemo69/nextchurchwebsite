"use client";

import { useState } from "react";
import CustomInput from "@/app/components/input";
import { useRouter } from "next/navigation";
import SimpleButton from "@/app/components/button";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [securityCode, setSecurityCode] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password, securityCode }),
    });

    if (res.ok) {
      router.push("/admin/login");
    } else {
      const data = await res.json();
      setError(data.message || "Registration failed");
    }
  };

  return (
    <div className="bg-background-100 w-screen h-screen flex items-center justify-center ">
      <div className="bg-background-200 flex max-w-xl p-5 rounded-2xl flex-col justify-center">
          <h1 className="font-bold text-2xl md:text-4xl">Register New User</h1>
          <form onSubmit={handleSubmit} className="flex flex-col">
            <CustomInput
              type="text"
              name="username"
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
            <CustomInput
            name="SecurityCode"
              type="text"
              placeholder="Security Code"
              value={securityCode}
              onChange={(e) => setSecurityCode(e.target.value)}
            />
            <SimpleButton type="submit" inform="Register"></SimpleButton>
            {error && <p>{error}</p>}
          </form>
      </div>
    </div>
  );
}
