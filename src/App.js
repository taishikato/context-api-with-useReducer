import React from 'react';

import Auth from './Auth';
import { auth, provider } from './firebase';
import { useStateValue } from './context/StateProvider';
import { actionTypes } from './context/reducer';
import './App.css';

function App() {
  const [state, dispatch] = useStateValue();

  const handleLogin = async () => {
    try {
      const result = await auth.signInWithPopup(provider);
      dispatch({
        type: actionTypes.SET_USER,
        user: result.user,
      });
    } catch (err) {
      alert(err.message);
    }
  };

  const handleLogout = async () => {
    await auth.signOut();
    dispatch({
      type: actionTypes.SET_USER,
      user: null,
    });
  };

  return (
    <Auth>
      <div className="App">
        <header className="App-header">
          <div>{state.user?.displayName}</div>
          {state.user ? (
            <button onClick={handleLogout}>Logout</button>
          ) : (
            <button onClick={handleLogin}>Login</button>
          )}
        </header>
      </div>
    </Auth>
  );
}

export default App;
