
import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import Employer from '@/interfaces/Employer';
import Labor from '@/interfaces/Labor';
import toast, { Toaster } from 'react-hot-toast';
// Labor and Employer interfaces go here

// Create a context
interface ContextType {
  userLabor: Labor | null;
  setUserLabor: React.Dispatch<React.SetStateAction<Labor | null>>;
  userEmployer: Employer | null;
  setUserEmployer: React.Dispatch<React.SetStateAction<Employer | null>>;
}

export const MyContext = createContext({} as ContextType);

interface MyContextProviderProps {
  children: React.ReactNode;
}

export const MyContextProvider = ({ children }: MyContextProviderProps) => {
  const [userLabor, setUserLabor] = useState<Labor | null>(null);
  const [userEmployer, setUserEmployer] = useState<Employer | null>(null);

  useEffect(() => {
    const fetchDataLabor = async () => {
      try {
        const response = await axios.get('http://localhost:5500/api/auth/labor/profile', {
          withCredentials: true,
        });
        if (response.data.success) {
          toast.success(response.data.message)
          setUserLabor(response.data.labor);
        }
      } catch (error) {
        console.error('Error fetching labor data:', error);
      }
    };

    const fetchDataEmployer = async () => {
      try {
        const response = await axios.get('http://localhost:5500/api/auth/employer/profile', {
          withCredentials: true,
        });
        if (response.data.success) {
          toast.success(response.data.message)
          setUserEmployer(response.data.employer);
        }
      } catch (error) {
        console.error('Error fetching employer data:', error);
      }
    };

    fetchDataLabor();
    fetchDataEmployer();
  }, []);

  return (
    <MyContext.Provider value={{ userLabor, setUserLabor, userEmployer, setUserEmployer }}>
      {children}
      <Toaster/>
    </MyContext.Provider>
  );
};

export const useMyContext = () => useContext(MyContext);
