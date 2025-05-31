import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { useEffect } from "react";
import { toggleGPTSearchView } from "../utils/GPTSlice";
import { ChangeLanguage } from "../utils/ConfigSlice";
//import { useEffect } from "react";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Grab user info from Redux store
  const user = useSelector((store) => store.user);
  const showGPTSearch=useSelector(store => store.gpt.showGPTSearch);


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

  const handleGPTSearchClick = () => {
    dispatch(toggleGPTSearchView());
  };

  const handlelanguageChange = (e) => {
    dispatch(ChangeLanguage(e.target.value));
  };

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between ">
      <img className="w-44" src={LOGO} alt="logo" />
     {user === null ? (
      <p className="text-white">Loading...</p>
    ) : user?.photoURL ? (
      <div className="flex p-2">
        {showGPTSearch && (<select className="p-2 m-3 bg-gray-800 text-white rounded-lg"
         onChange={handlelanguageChange}>
          {SUPPORTED_LANGUAGES.map((lang) =>(
            <option key={lang.identifier} value={lang.identifier}>
              {lang.name}
            </option>
          ))}
        </select>)}
        <button 
          className="py-2 px-4 mx-4 m-2 bg-purple-800 text-white rounded-lg"
          onClick={handleGPTSearchClick}
        >
          {showGPTSearch ? "Home Page" : "GPT Search"}
        </button>
        <img
          className="w-12 h-12 rounded-full"
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
