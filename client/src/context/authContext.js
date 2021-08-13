import { createContext,useReducer } from "react";
import AuthReducer from '../context/authReducer'

const INITIAL_STATE = {
    user:JSON.parse(localStorage.getItem('CurrentUser')),
    isFetching:false,
    error:false
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({children})=>{
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

    return (
        <AuthContext.Provider
         value={{user:state.user,
            isFetching: state.isFetching,
            error:state.error,
            dispatch
            }}>
            {children}
        </AuthContext.Provider>
    );
}