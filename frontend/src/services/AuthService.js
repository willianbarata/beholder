import axios from './BaseService'

export async function doLogin(email, password){

    if(email === "willianbarata@gmail.com" && password === "123456"){
        return{
            id: 1,
            token: "token"
        }
    }
    throw new Error("401");
}

export async function doLogout(){
    return true;
}