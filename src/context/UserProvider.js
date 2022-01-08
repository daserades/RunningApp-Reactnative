import React, {createContext, useReducer} from 'react';
import reducer from './reducer';
import store from './store';

export const UserContext = createContext();


export default function UserProvider({children}) {
    const [state, dispatch] = useReducer(reducer, store);
  
    return (
      <UserContext.Provider value={{state, dispatch}}>
        {children}
      </UserContext.Provider>
    );
  }