import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";
import { useEffect } from "react";
//import { useEffect } from "react";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Grab user info from Redux store
  const user = useSelector((state) => state.user);


  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
      })
      .catch(() => {
        navigate("/error");
      });
  };

   useEffect(() => {
    const unSubscribe=onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unSubscribe();
  }, []);

  return (
    <div className="absolute w-screen px-8 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between ">
      <img className="w-44 mx-auto md:mx-0" src={LOGO} alt="logo" />
     {user === null ? (
      <p className="text-white">Loading...</p>
    ) : user?.photoURL ? (
      <div className="flex items-center space-x-4">
        <img
          className="md:block w-12 h-12 rounded-full"
          alt="User Avatar"
          src={user.photoURL}
        />
        <button
          onClick={handleSignOut}
          className="font-bold text-white hover:underline"
        >
          (Sign Out)
        </button>
      </div>
    ) : null}

    </div>
  );
};

export default Header;
