import { useContext } from "react";
import { AuthContext } from "../providers/_Contexts";

function useAuth() {
  const { state, dispatch } = useContext<any>(AuthContext);

  const login = (data: any) => {
    dispatch({type: "LOGIN", payload: data})
  };

  const logout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return {
    login,
    logout,
    user: state?.user,
    token: state?.token,
    state
  };
}

export default useAuth;
