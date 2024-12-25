import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.init";
import Swal from "sweetalert2";

export const AuthContext = createContext(null);
const Authprovider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);

  const registerUser = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const loginUser = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
      setLoader(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const logoutUser = () => {
    return signOut(auth);
  };

  const provider = new GoogleAuthProvider();
  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then((res) => {
        setUser(res.user);
        setLoader(false);
      })
      .catch((error) => {
        console.log("ERROR", error);
        setLoader(false);
      });
  };
  const handleGoogleSignOut = () => {
    signOut(auth)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "success!",
          text: "You have signed out successfully.",
        });
        setUser(null);
      })
      .catch((error) => {
        console.log(error.message);
        setUser(null);
        setLoader(false);
      });
  };
  const updateUserProfile = async (updatedData, setUser) => {
    try {
      await updateProfile(auth.currentUser, updatedData);
      setUser({
        ...auth.currentUser,
        displayName: updatedData.displayName,
        photoURL: updatedData.photoURL,
      });
    } catch (error) {
      console.log("Error updating profile", error);
    }
  };

  const userInfo = {
    user,
    loader,
    setUser,
    registerUser,
    loginUser,
    logoutUser,
    handleGoogleLogin,
    handleGoogleSignOut,
    updateUserProfile,
  };

  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default Authprovider;
