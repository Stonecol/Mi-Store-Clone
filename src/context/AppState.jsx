import { useState } from "react";
import { AppContext } from "./appContext";

export const AppState = (props) => {
    const [appState,setAppState] = useState({cartItems:[]})
  return <AppContext.Provider value={{appState,setAppState}}>{props.children}</AppContext.Provider>;
};
