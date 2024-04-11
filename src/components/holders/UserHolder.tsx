import UserCard from "@/app/UserCard";
import React from "react";

interface UserHolderProps {
  users: {
    name: string;
    age: number;
    email: string;
  }[];
}

export default function UserHolder(props: UserHolderProps) {
  return (
    <div className="flex items-center gap-3">
      {props.users.map((user, index) => (
        <UserCard user={user} key={index} />
      ))}
    </div>
  );
}
