import React from "react";
import UserCard from "./UserCard";
import Button from "./Button";

export default function page() {
  let a = 2;
  const user = {
    name: "Don",
    age: 30,
    email: "email@xyz.com",
  };
  return (
    <main className="w-full h-screen flex items-center flex-col gap-3 justify-center">
      <UserCard user={user} />
      <Button>Click Me</Button>
      <Button>
        <div>icon</div>
        Reveal
      </Button>
    </main>
  );
}
