import { Navigate, Outlet } from "react-router-dom"
import { createContext, useState } from 'react';
import NavBar from "@/components/elements/NavBar";

export interface AuthContextProps {
  value: boolean;
  setValue: (newValue: boolean) => void;
}

export const AuthContext = createContext<AuthContextProps>({
  value: true,
  setValue: () => {},
});


const RootLayout = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(true);
  return (
    <AuthContext.Provider value={{value: isAuthenticated, setValue: setIsAuthenticated}}>
      <>
        { isAuthenticated ? (
          <section>
            <div className="bg-[url('/public/assets/homepage/chewebsite-bg.png')] h-screen bg-cover bg-no-repeat">
              <div className="justify-between">
                <NavBar/>
              </div>
              <div className=""> 
                <Outlet/>
              </div>
            </div>
          </section>
        ) : (
          <Navigate to='/login'/>
        )}
      </>
    </AuthContext.Provider>
  )
}

export default RootLayout