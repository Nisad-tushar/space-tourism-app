import { createContext, useReducer } from 'react';
import reducer from './MenuReducer';
export const INITIAL_VALUE = {
  menuOpen: false,
};
export const menuContext = createContext(INITIAL_VALUE);
export const ContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_VALUE);
  return (
    <menuContext.Provider value={{ menuOpen: state.menuOpen, dispatch }}>
      {props.children}
    </menuContext.Provider>
  );
};
