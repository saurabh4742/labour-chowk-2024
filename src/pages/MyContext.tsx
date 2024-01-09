// MyContext.js
import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react';

// Create a context
export const MyContext = createContext({});

// Create a context provider
export const MyContextProvider = ({ children }) => {
  const [userLabor, setUserLabor] = useState({});
  const [userEmployer, setUserEmployer] = useState({});
  useEffect(() => {
    const fetchDataLabor = async () => {
      try {
        const response = await axios.get('http://localhost:5500/api/auth/labor/profile', {
          withCredentials: true, // Include credentials in the request
        })
        if (response.data.success) {
          setUserLabor(response.data.labor);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
    const fetchDataEmployer = async () => {
      try {
        const response = await axios.get('http://localhost:5500/api/auth/employer/profile', {
          withCredentials: true, // Include credentials in the request
        })
        if (response.data.success) {
          setUserEmployer(response.data.employer);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
    fetchDataLabor();
    fetchDataEmployer();
  }, []);
  return (
    <MyContext.Provider value={{ userLabor, setUserLabor, userEmployer, setUserEmployer }}>
      {children}
    </MyContext.Provider>
  );
};

// Custom hook to consume the context
export const useMyContext = () => useContext(MyContext);
