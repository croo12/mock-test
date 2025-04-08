// import { combine } from "zustand/middleware";

// export const combineWithAction: typeof combine = (
//   initialState,
//   additionalStateCreator,
// ) => {
//   return combine(initialState, (setState, getState, store) => {
//     return {
//       actions: {
//         ...additionalStateCreator(setState, getState, store),
//       },
//     };
//   });
// };