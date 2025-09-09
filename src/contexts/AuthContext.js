import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for stored user data on app load
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    // Simulate API call
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email === 'admin@stickwithmo.com' && password === 'admin123') {
          const adminUser = {
            id: 1,
            email: 'admin@stickwithmo.com',
            name: 'Admin User',
            role: 'admin'
          };
          setUser(adminUser);
          localStorage.setItem('user', JSON.stringify(adminUser));
          resolve(adminUser);
        } else if (email && password) {
          const regularUser = {
            id: 2,
            email: email,
            name: email.split('@')[0],
            role: 'user'
          };
          setUser(regularUser);
          localStorage.setItem('user', JSON.stringify(regularUser));
          resolve(regularUser);
        } else {
          reject(new Error('Invalid credentials'));
        }
      }, 1000);
    });
  };

  const register = async (email, password, name) => {
    // Simulate API call
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email && password && name) {
          const newUser = {
            id: Date.now(),
            email: email,
            name: name,
            role: 'user'
          };
          setUser(newUser);
          localStorage.setItem('user', JSON.stringify(newUser));
          resolve(newUser);
        } else {
          reject(new Error('Please fill in all fields'));
        }
      }, 1000);
    });
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const value = {
    user,
    login,
    register,
    logout,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
