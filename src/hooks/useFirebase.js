import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseInit from "../Firebase/firebase.init";

firebaseInit();

const useFirebase = () => {
  const [user, setUser] = useState({})
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLogin, setIsLogin] = useState({})
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const googleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then(result => {
        setUser(result.user);
        console.log(result.user);
      })
  }
  const handleName = e => {
    setName(e.target.value);
  }
  const handleEmail = e => {
    setEmail(e.target.value);
  }
  const handlePassword = e => {
    setPassword(e.target.value);
  }
  const handleRegistration = e => {
    e.preventDefault();
    createNewUser(email, password)
    signInUsingEmail(email, password)
  }
  const createNewUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUserName()
        console.log(user);
      })

  }
  const setUserName = () => {
    updateProfile(auth.currentUser, {
      displayName: name})
      .then(() => { })
  }
  const signInUsingEmail = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setIsLogin(userCredential.user);
        console.log(isLogin);
      })
  }
  const logout = () => {
    signOut(auth).then(() => {
      setUser({})
    });
  }
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });
  })
  return {
    googleLogin,
    user,
    handleRegistration,
    handleName,
    handleEmail,
    handlePassword,
    signInUsingEmail,
    isLogin,
    logout
  }
}
export default useFirebase;