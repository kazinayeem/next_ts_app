"use client";
import { MyContext } from "@/contex/context";
import React, { Suspense, useContext, useEffect, useState } from "react";
import { getItem } from "../server-component";

interface S {
  name: string;
  email: string;
  _id: string;
}
export default function Page() {
  const [data, setdata] = useState<S[]>([]);
  useEffect(() => {
    getItem()
      .then((res) => {
        setdata(res);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  const { setmessage, message } = useContext(MyContext);

  const c = () => {
    if (message === "nayeem") {
      setmessage("kazi nayeem");
    } else {
      setmessage("nayeem");
    }
  };

  if (data.length === 0) {
    return <h1>loading</h1>;
  }
  return (
    <div>
      About
      <div>
        <h1 className="text-lg">{message}</h1>
        <button
          onClick={c}
          className="p-4 text-lg text-gray-950 bg-green-700 ring-1"
        >
          change
        </button>
      </div>
      <Suspense fallback={<h1>loading</h1>}>
        {data.length === 0 ? (
          <h1>LOADING</h1>
        ) : (
          data &&
          data.map((d) => (
            <ul key={d._id}>
              <li>Name : {d.name}</li>
              <li>Name : {d.email}</li>
            </ul>
          ))
        )}
      </Suspense>
    </div>
  );
}
