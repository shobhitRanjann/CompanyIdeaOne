import { useState } from "react";
import Usercontext from "./Usercontext";


const UsercontextProvider =({children})=>{
    const [user,setUser] = useState(null)
    return (
            <Usercontext.Provider value={{user,setUser}}>
                 {children}
            </Usercontext.Provider>
    )
}

export default UsercontextProvider;