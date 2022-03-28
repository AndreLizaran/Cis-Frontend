// Modules
import React, { createContext, useReducer } from 'react';

// Reducers
import generalReducer from '../reducers/generalReducer';

export type StateType = {
  showMenuModal:boolean;
}

export const initialState:StateType = {
  showMenuModal:false
}

type GeneralContextType = {
  state:StateType;
  switchModalMenu: () => void;
}

export const GeneralContext = createContext({} as GeneralContextType);

export default function GeneralState ({ children }:any) {

  const [state, dispatch] = useReducer(generalReducer, initialState);

  function switchModalMenu () {
    dispatch({ type:'SWITCH_SHOW_MENU_MODAL', payload:null });
  }

  return (
    <GeneralContext.Provider 
      value={{ 
        state, 
        switchModalMenu
      }}
    >
      {children}
    </GeneralContext.Provider>
  )
}
