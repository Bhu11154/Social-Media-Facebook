export const LoginStart = (user)=>({
    type: 'LOGIN_START',
});

export const LoginSuccess = (user)=>({
    type: 'LOGIN_SUCCESS',
    payload:user
});
export const LoginFailure = (error)=>({
    type: 'LOGIN_FAILURE',
    payload:error
});
export const RegisterFailure = (error)=>({
    type: 'REGISTER_FAILURE',
    payload:error
});
export const RegisterSuccess = (user)=>({
    type: 'REGISTER_SUCCESS',
    payload:user
});
export const RegisterStart = (user)=>({
    type: 'REGISTER_START',
});
export const Logout = (user)=>({
    type: 'LOGOUT',
});



