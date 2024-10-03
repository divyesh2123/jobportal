import axios from 'axios';

let authFetch = axios.create({
    baseURL: "http://localhost:4444/api",
    
})

authFetch.interceptors.request.use((request)=>
{
    let op = JSON.parse(localStorage.getItem("uinfo"));
    request.headers.Authorization = `Bearer ${op.token}`;

    return request;

},(error)=>{

    return Promise.reject(error);
})


authFetch.interceptors.response.use((response)=>
    {
      if(response.status == 401)
      {
        window.location.href = "/";
        localStorage.removeItem("uinfo")
      }
    
      return response;
    },(error)=>{
    
        return Promise.reject(error);
    })

    export default authFetch;