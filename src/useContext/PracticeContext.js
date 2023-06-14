import {View, Text} from 'react-native';
import React, {useState} from 'react';

const PracticeContext = React.createContext();

const PracticeProvider = ({children}) => {
  const [val1, setVal1] = useState(1);
  const [val2, setVal2] = useState(2);
  const [val3, setVal3] = useState(3);
  const [userLoggedIn, setUserLOggedIn] = useState(false);

  return (
    <PracticeContext.Provider
      value={{
        val1,
        setVal1,
        val2,
        setVal2,
        val3,
        setVal3,
        userLoggedIn,
        setUserLOggedIn,
      }}>
      {children}
    </PracticeContext.Provider>
  );
};

export {PracticeContext, PracticeProvider};
