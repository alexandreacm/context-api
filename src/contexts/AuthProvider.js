import React, { useState, createContext } from 'react';

export const AuthContext = createContext({
  user: null,
  SignIn: () => {},
  SignOut: () => {}
});

const USER = { name: 'Guest',password: '', isLogged: false };

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(USER);

  function SignIn(username, password) {
    if (username !== '' || username !== undefined) { 
      setUser({
        name: username,
        password,
        isLogged: true
      })
    }
 
    alert(`Logado as ${username}`);
  }

  function SignOut() {
    setUser(USER)
    alert('DesLogado');
  }

  return (
    <AuthContext.Provider value={{ user, SignIn, SignOut }}>
      {children}
    </AuthContext.Provider>
  );
};