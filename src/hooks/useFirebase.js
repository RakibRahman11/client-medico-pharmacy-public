import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useState } from "react";
import firebaseInit from "../Firebase/firebase.init";

firebaseInit()

const useFirebase = () =>{
    const [user, setUser] = useState({})
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const googleLogin = () =>{
        signInWithPopup(auth, googleProvider)
        .then(result => {
            setUser(result.user);
          })
    }
    return{
        googleLogin,
        user
    }
}
export default useFirebase;