"use client";
import { MyContext } from "@/contex/context";
import React, { useContext } from "react";

export default function Page() {
  const { count, increment, decrement } = useContext(MyContext);
  return (
    <div className="conatiner bg-fuchsia-400 w-full h-screen flex justify-center items-center">
      <div className=" bg-red-500 flex justify-center items-center">
        <button
          onClick={() => {
            increment((pre) => pre + 1);
          }}
          className="btn bg-yellow-200 ring-1 px-4 py-3 shadow-md"
        >
          Incremnt
        </button>{" "}
        <h3 className="text-lg">count : {count}</h3>
        <button
          onClick={() => {
            if (count <= 0) {
              alert("0 is")
            } else {
              decrement((pre) => pre - 1)
            }
          }}
          className="btn bg-yellow-200 ring-1 px-4 py-3 shadow-md"
        >
          decrement
        </button>
      </div>
    </div>
  );
}
