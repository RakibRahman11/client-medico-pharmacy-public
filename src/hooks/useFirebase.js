import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged  } from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseInit from "../Firebase/firebase.init";

firebaseInit();

const useFirebase = () =>{
    const [user, setUser] = useState({})
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const googleLogin = () =>{
        signInWithPopup(auth, googleProvider)
        .then(result => {
            setUser(result.user);
            console.log(result.user);
          })
    }
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user);
            }
          });
    })
    return{
        googleLogin,
        user
    }
}
export default useFirebase;