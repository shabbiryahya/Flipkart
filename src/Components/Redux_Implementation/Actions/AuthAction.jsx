import FlipkartStore from "../Store/Store"


let AuthAction=(value)=>{
    FlipkartStore.dispatch({
        type:"AUTH",
        payload:value
    })
}

export default AuthAction