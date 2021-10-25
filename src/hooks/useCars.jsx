import { useReducer, useContext, createContext } from "react";

const initialState = {
  searchQuery: "",
  sortParams: {
    key: "price",
    order: 1,
  },
};

const CarsContext = createContext();

export function useCars() {
  return useContext(CarsContext);
}

export function CarsProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <CarsContext.Provider value={[state, dispatch]}>
      {children}
    </CarsContext.Provider>
  );
}

function reducer(state, action) {
  try {
    switch (action.type) {
      case "SET_QUERY": {
        return { ...state, searchQuery: action.payload };
      }
      case "SET_SORT_KEY": {
        return {
          ...state,
          sortParams: { ...state.sortParams, key: action.payload },
        };
      }
      case "SET_SORT_DIR": {
        return {
          ...state,
          sortParams: { ...state.sortParams, order: action.payload },
        };
      }
      default: {
        throw new Error(`Wrong action type! Received type is: ${action.type}`);
      }
    }
  } catch (error) {
    console.warn(error);
    return state;
  }
}
