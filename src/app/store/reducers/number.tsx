type RootState = {
  number: number;
};

const defaultState: RootState = {
  number: 0,
};

export const TYPE = {
  INC: "increment",
  DEC: "decrement",
};

const increment = (payload = 1) => ({
  type: TYPE.INC,
  payload,
});
const decrement = (payload = 1) => ({
  type: TYPE.DEC,
  payload,
});

const reducer = (
  state = defaultState,
  { type, payload }: { type: string; payload: number }
) => {
  switch (type) {
    case TYPE.INC:
      return { number: state.number + payload };
    case TYPE.DEC:
      return { number: state.number - payload };
  }

  return state;
};

// const reducer = (
//   state = defaultState,
//   { type, payload }: { type: string; payload: number }
// ) => {
//   switch (type) {
//     case "increment":
//       return { number: state.number + payload };
//     case "decrement":
//       return { number: state.number - payload };
//   }

//   return state;
// };

export { increment, decrement };
export type { RootState };
export default reducer;
