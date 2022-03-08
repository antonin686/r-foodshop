import { useReducer } from "react";
import { AuthContext } from "./_Contexts";

function AuthProvider(props: any) {
  const initialState: any = {
    token: null,
    user: null,
  };

  const reducer = (state: any, action: any) => {
    switch (action.type) {
      case "LOGIN":
        return { ...state, token: action.payload.token, user: action.payload.user };
      case "LOGOUT":
        return initialState;
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer<any>(reducer, initialState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
