import React, { createContext, useContext, useReducer } from "react";

export const DataLayerContext = createContext();

// Here children is reffered as the content that is present inside of the <DataLayer> which is used in the index.js.
export const DataLayer = ({ initialState, reducer, children }) => (
  <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </DataLayerContext.Provider>
);

export const useDataLayerValue = () => useContext(DataLayerContext);
