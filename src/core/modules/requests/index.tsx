// General imports
import axios from 'axios';

export async function Login(username:String, password:String) {
    return await axios.post("/oauth/create", {
        username, 
        password
      }, { 
        timeout: 2000,
        withCredentials: true 
      }).then(() => {
        return true
      }).catch(() => {
        return false
      });
}

export function Logout() {
    axios.get("/oauth/clear", {
        timeout: 2000,
        withCredentials: true
      }).then(() => {
        window.location.reload();
      }).catch(() => {});
}

export function Refresh() {
    return axios.get("/oauth/refresh", {
        timeout: 2000,
        withCredentials: true
    }).then(() => {
      return true;
    }).catch(() => {
      return false;
    });
}

export async function Validate() {

  let promise = axios.get("/oauth/validate", {
    timeout: 2000,
    withCredentials: true
  }).then((t:any) => {

    const timedelta = new Date().valueOf() - t.data.time
    if (timedelta > 300) throw Error
    
    const username = t.data.user ? t.data.user : undefined;

      return {
        status: timedelta < 300,
        user: username
      }

    }).catch(() => { 

      return {
        status: false,
        user: undefined
      }

    });

    if ((await promise).status && (await promise).user) return promise;

    if (!(await Refresh())) return promise;

  return axios.get("/oauth/validate", {
    timeout: 2000,
    withCredentials: true
  }).then((t:any) => {

    const timedelta = new Date().valueOf() - t.data.time
    if (timedelta > 300) throw Error
      
    const username = t.data.user ? t.data.user : undefined;
  
      return {
        status: timedelta < 300,
        user: username
      }

  }).catch(() => {

    return {
      status: false,
      user: undefined
    }

  });
}