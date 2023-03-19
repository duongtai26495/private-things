import React, { useEffect, useState } from 'react'
import TheButton from './TheButton'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useStore } from '../store';
import { updateLoginState } from '../store/action';
import { REMEMBER, USERNAME } from '../data/constants';

import { getDatabase, ref, child, push, update } from "firebase/database";
import { app } from '../config/firebase';
const Login = () => {
    const [state, dispatch] = useStore()

    const db = getDatabase(app);
    const auth = getAuth();
    const [username, setUsername] = useState(window.localStorage.getItem(USERNAME) ?? "")
    const [password, setPassword] = useState("")
    const [isSave, setIsSave] = useState(window.localStorage.getItem(REMEMBER) ?? false)
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        setIsSave(window.localStorage.getItem(REMEMBER))
    }, [])

    const signInWithUnamePw = async () => {
        setLoading(true)

        if (username.length < 5 || password.length < 5) {
        } else {
            const result = await signInWithEmailAndPassword(auth, username, password)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    update(ref(db, '/users/'+user.uid), {isLoggedIn : 1});
                    return user;
                    // ...
                })
                .catch((error) => {
                    console.log(error.code)
                    return error.code
                })
                .finally(() => {
                    setLoading(false)
                });
            if (result == "auth/wrong-password" || result == "auth/too-many-requests" || result == "auth/invalid-email" || result == "auth/user-not-found") {

            } else {
                if (isSave) {
                    window.localStorage.setItem(REMEMBER, isSave)
                    window.localStorage.setItem(USERNAME, username)
                }
                else {
                    window.localStorage.removeItem(REMEMBER)
                    window.localStorage.removeItem(USERNAME)
                }
                
                setLoading(false)
                dispatch(updateLoginState(true))
            }
        }
        setLoading(false)
    }

    return (
        <div className='w-full '>
            <div className='flex flex-col mt-5 my-2'>
                <label className='w-full text-sm italic'>Username / Email</label>
                <input value={username} onChange={e => setUsername(e.target.value)} type={"text"} placeholder={"someone@gmail.com "} className={`text-base bg-slate-100  text-gray-800 p-2 rounded-md`} />
            </div>
            <div className='flex flex-col mt-5'>
                <label className='w-full text-sm italic '>Password</label>
                <input value={password} onChange={e => setPassword(e.target.value)} type={"password"} placeholder={"***"} className={`text-base bg-slate-100 p-2 text-gray-800 rounded-md`} />
            </div>
            <div className='mt-5 flex flex-row gap-2 w-full justify-end'>
                <label className='text-sm '>Remember</label>
                <input defaultChecked={isSave} onChange={() => setIsSave(!isSave)} type={"checkbox"} className={`text-base p-2 rounded-md`} />
            </div>

            <TheButton isLoading={isLoading} onclick={() => { signInWithUnamePw() }} title={"Go"} style={`bg-emerald-500 text-white font-bold p-3 my-5 text-center rounded-md hover:bg-emerald-800 transition-all`} />
        </div>
    )
}

export default Login