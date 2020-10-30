import React, { createContext, useContext, useReducer } from "react";
 
  //creating context
  export const StateContext=createContext();

  //defining provider  
  export const StateProvider=({children,initialState,reducer})=>(
   <StateContext.Provider value={useReducer(reducer,initialState)}>
      {children}
    </StateContext.Provider>
  );
  
  // using context
  export const useStateValue=()=>useContext(StateContext);