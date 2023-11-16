import React from "react";

type AuthContextType = {
  token: string | null
  setToken: (token: string) => void
};

const AuthContext = React.createContext<AuthContextType>({} as AuthContextType);

export default AuthContext;
