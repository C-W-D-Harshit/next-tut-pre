"use client";

import React, { useState } from "react";
import UserCard from "./UserCard";
import Button from "./Button";
import UserHolder from "@/components/holders/UserHolder";

export default function Page() {
  const [session, setSession] = useState(false);
  const user = {
    name: "Don",
    age: 30,
    email: "email@xyz.com",
  };
  const users = [
    {
      name: "Don",
      age: 30,
      email: "email@xyz.com",
    },
    {
      name: "John",
      age: 25,
      email: "dmail@xyz.com",
    },
    {
      name: "Jane",
      age: 28,
      email: "fmail@xyz.com",
    },
    {
      name: "paine",
      age: 28,
      email: "fmail@xyz.com",
    },
  ];

  // assignment: make a holder for products
  return (
    <main className="w-full h-screen flex items-center flex-col gap-3 justify-center">
      {session ? (
        <>
          <UserHolder users={users} />
          <Button
            onClick={() => {
              setSession(false);
            }}
          >
            Logout
          </Button>
        </>
      ) : (
        <>
          <Button
            onClick={() => {
              setSession(true);
            }}
          >
            Admin Login
          </Button>
        </>
      )}
    </main>
  );
}
