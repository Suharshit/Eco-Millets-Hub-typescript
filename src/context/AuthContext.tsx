import { createContext, useState } from 'react';
import authservice from '../appwrite/auth';

const INITIAL_STATE = {
  setIsAuthenticated: () => {},
  checkAuthUser: async () => false as boolean,
};

export interface AuthContextProps {
    value: boolean;
    setValue: (newValue: boolean) => void;
  }

export const AuthContext = createContext<AuthContextProps>({
    value: false,
    setValue: () => {},
  });

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const checkAuthUser = async() => {
    try {
      const currentAccount = await authservice.getCurrentUser();
      if(currentAccount){
        setIsAuthenticated(!isAuthenticated);
        return true;
      }
    } catch (error) {
      console.error(error);
    }
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
  }
}