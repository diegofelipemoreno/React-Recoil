import { useRecoilCallback } from "recoil";
import { cartState } from "./atoms";

export const UseCreateDispatcher = () => {
  const addItem = useRecoilCallback(({ set }) => (cartKey) => {

    set(cartState, (oldCartData) => {
      const newCartData = {[cartKey]: (oldCartData[cartKey] || 0) + 1};

      return {...oldCartData, ...newCartData};
    });
  });

  const removeItem = useRecoilCallback(({ set }) => (cartKey) => {
    set(cartState, (oldCartData) => {
      let copy = {...oldCartData};

      if (copy[cartKey] === 1) {
        copy = Object.keys(copy).reduce((acc, actual) => {
          const actualValue = copy[actual];

          if (actualValue !== 1) {
            acc[actual] = actualValue;
          }

          return acc;
        }, {});
      } else {
        copy = {...copy, [cartKey]: copy[cartKey] - 1 };
      }

      return copy;
    });
  });

  return {
    addItem,
    removeItem
  };
};

export default UseCreateDispatcher;