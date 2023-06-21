"use client";
import React, { Dispatch, SetStateAction } from "react";
import { createContext, useState } from "react";

export interface MyContextProps {
  message: string;
  setmessage: Dispatch<SetStateAction<string>>;
  count: number;
  increment: Dispatch<SetStateAction<number>>;
  decrement: Dispatch<SetStateAction<number>>;
}

const defaultState = {
  message: "",
  setmessage: (msg: string) => {},
  count: 0,
  increment: () => {},
  decrement: () => {},
} as MyContextProps;

export const MyContext = createContext(defaultState);

export const ContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [message, setmessage] = useState<string>("nayeem");
  const [count, setcount] = useState<number>(0);

  return (
    <MyContext.Provider
      value={{
        message,
        setmessage,
        count,
        increment: setcount,
        decrement: setcount,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
