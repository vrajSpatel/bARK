"use client";
import signin from "./server/dbFunctions/signin";

export default function Home() {
  // signin();
  return (
    <>
      <button
        onClick={() => {
          signin();
        }}
      >
        signin
      </button>
    </>
  );
}
