
import { useEffect } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { Authen, Home, Profile, Template } from './page';
import { ACCESS_TOKEN, ISLOGIN, TOKEN_MNG, UID, DISPLAYNAME, USERDATA } from './data/constants';
import { useStore } from './store';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from './config/firebase';

function App() {

  const [state, dispatch] = useStore()
  const { login_state } = state
  const auth = getAuth(app);

  const checkUserIsLogin = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        window.localStorage.setItem(DISPLAYNAME, user.displayName)
        window.localStorage.setItem(ACCESS_TOKEN, user.accessToken)
        window.localStorage.setItem(TOKEN_MNG,JSON.stringify(user.stsTokenManager))
        window.localStorage.setItem(UID,user.uid)
        window.localStorage.setItem(ISLOGIN,true)
      } else {
        window.localStorage.removeItem(USERDATA)
        window.localStorage.removeItem(DISPLAYNAME)
        window.localStorage.removeItem(ACCESS_TOKEN)
        window.localStorage.removeItem(TOKEN_MNG)
        window.localStorage.removeItem(UID)
        window.localStorage.removeItem(ISLOGIN)
      }
    });

  }

  useEffect(() => {
    checkUserIsLogin()
    DisplayComponent()
  }, [login_state])

  const DisplayComponent = () => {
    return (
      login_state
        ?
        <div className='h-full w-full'>
          <Header />
          <div className='w-full flex flex-row main-content'>
            <div className='w-2/12 bg-slate-900 border-r-2 border-gray-600 h-full'>
              <Sidebar />
            </div>
            <div className='w-10/12 bg-gray-900 p-2 h-full'>
              <Outlet />
            </div>
          </div>
        </div>
        :
        <Authen />
    )
  }

  return (
    <div className="App w-full">
      <DisplayComponent />
    </div>
  );
}

export default App;
