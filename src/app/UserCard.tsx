import React from "react";

interface UserCardProps {
  user: {
    name: string;
    age: number;
    email: string;
  };
}

export default function UserCard(props: UserCardProps) {
  return (
    <div className="p-4 rounded-xl drop-shadow-2xl bg-white border-neutral-300">
      <div>
        User Name: <b>{props.user.name}</b>
      </div>
      <div>
        User Email: <b>{props.user.email}</b>
      </div>
      <div>
        User Age: <b>{props.user.age}</b>
      </div>
    </div>
  );
}
