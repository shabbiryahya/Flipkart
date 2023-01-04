import AuthAction from "../Actions/AuthAction";

let initialState={
    isLogin:false,
}


let AuthReducer=(state=initialState, AuthAction)=>{
    if(AuthAction.type==='AUTH'){
        state={...initialState, isLogin:AuthAction.payload}
    }
    return state;
}

export default AuthReducer;