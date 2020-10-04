import React, { useEffect } from 'react';

import { auth } from './firebase';
import { actionTypes } from './context/reducer';
import { useStateValue } from './context/StateProvider';

const Auth = ({ children }) => {
  const [state, dispatch] = useStateValue(); // Or const [state, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        // Login
        dispatch({
          type: actionTypes.SET_USER,
          user,
        });
      } else {
        // Not logged in
        console.log('Not logged in');
      }
    });
  }, [dispatch]);
  return <div>{children}</div>;
};

export default Auth;
