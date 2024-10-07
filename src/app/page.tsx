"use client";

import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, RootState } from "./store/reducers/number";

export default function Home() {
  const number = useSelector((store: RootState) => store.number);
  const dispatch = useDispatch();
  console.log("11111", number);

  return (
    <>
      <div className="flex items-center justify-center mb-4">
        <div className="">I love cricket {number}</div>
      </div>
      <div className="flex flex-col items-center gap-2">
        <button
          onClick={() => dispatch(increment(2))}
          className="border w-[100px] bg-cyan-400"
        >
          +
        </button>
        <button
          onClick={() => dispatch(decrement())}
          className="border w-[100px] bg-lime-500"
        >
          -
        </button>
      </div>
    </>
  );
}
