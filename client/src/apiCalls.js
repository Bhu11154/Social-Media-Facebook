import axios from 'axios'

export const loginCall = async (user,dispatch) =>{
    dispatch({ type: "LOGIN_START"});
    try{
        const res = await axios.post('/api/auth/login', user);
        dispatch({type: "LOGIN_SUCCESS", payload:res.data})
    }catch(err){
        dispatch({type: "LOGIN_FAILURE", payload:err})
    }  
}

export const registerCall = async (user, dispatch) =>{
    dispatch({type:"REGISTER_START"});
    try{
        const res = await axios.post('/api/auth/register', user);
        dispatch({type:"REGISTER_SUCCESS", payload:res.data})
    }catch(err){
        dispatch({type: "REGISTER_FAILURE", payload:err})
    } 
}

export const userCall = (dispatch) => {
    dispatch({type: "LS_TO_USER", payload: JSON.parse(localStorage.getItem('CurrentUser'))});
}