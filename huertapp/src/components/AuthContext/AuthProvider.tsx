import React, { PropsWithChildren, ReactElement, useState } from "react";
import AuthContext from "./AuthContext";

function AuthProvider({ children }: PropsWithChildren): ReactElement {
    const [token, setToken] = useState<string>(localStorage.getItem("token") === "undefined"? "" : localStorage.getItem("token") || "");

  return (
    <AuthContext.Provider
      value={{token, setToken}}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;