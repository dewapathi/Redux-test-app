"use client";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store/store";
import {
  decrement,
  decrementByAmount,
  increment,
  incrementByAmount,
} from "./store/reducers/numberSlice";

export default function Home() {
  const count = useSelector((state: RootState) => state.count.value);
  const calculateValue = useSelector(
    (state: RootState) => state.count.calculateValue
  );
  const dispatch = useDispatch();

  return (
    <>
      <div className="flex items-center justify-center font-semibold text-2xl">
        <h1>Calculate</h1>:<h2 className="ml-4">{count}</h2>
      </div>
      <div className="flex items-center justify-center font-semibold text-2xl">
        <button onClick={() => dispatch(increment())}>+</button>
      </div>
      <div className="flex items-center justify-center font-semibold text-2xl">
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
      <div className="flex items-center justify-center font-semibold text-2xl">
        <h1>Calculate</h1>:<h2 className="ml-4">{calculateValue}</h2>
      </div>
      <div className="flex items-center justify-center font-semibold text-2xl">
        <button onClick={() => dispatch(incrementByAmount(10))}>
          IncrementAount
        </button>
      </div>
      <div className="flex items-center justify-center font-semibold text-2xl">
        <button onClick={() => dispatch(decrementByAmount(10))}>
          IncrementAount
        </button>
      </div>
    </>
  );
}
