import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export default function Button(props: ButtonProps) {
  return (
    <button
      onClick={props.onClick}
      className="h-8 w-fit flex items-center gap-3 px-3 rounded-xl bg-blue-500 drop-shadow-lg text-white"
    >
      {props.children}
    </button>
  );
}
