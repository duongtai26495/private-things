import React, { useState } from 'react'
import TheButton from './TheButton'
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { app } from '../config/firebase';
import { ACCESS_TOKEN, ISLOGIN, REMEMBER, TOKEN_MNG, UID, USERNAME } from '../data/constants';
import { useStore } from '../store';
import { updateLoginState } from '../store/action';
import { getDatabase, ref, set } from "firebase/database";

const Register = () => {
    const [state, dispatch] = useStore()

    const database = getDatabase(app);
    const auth = getAuth(app);
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [fName, setFname] = useState("")
    const [lName, setLname] = useState("")
    const [isLoading, setLoading] = useState(false)
    const signUpNewUser = async (uname, pw) => {

        setLoading(true)
        if (uname.length < 5 || pw.length < 5) {

        } else {
            const result = await createUserWithEmailAndPassword(auth, uname, pw)
                .then((userCredential) => {
                    const user = userCredential.user;
                    updateProfile(auth.currentUser, {
                        displayName: fName + " " + lName
                    }).then(() => {
                        writeUserData(user.uid, user.displayName, user.email, user.photoUrl)
                        window.localStorage.removeItem(USERNAME)
                        window.localStorage.removeItem(REMEMBER)
                        setLoading(false)
                        dispatch(updateLoginState(true))
                    }).catch((error) => {
                       console.log(error)
                    }).finally(() => {
                        setLoading(false)
                    });
                })
                .catch((error) => {
                    return error.code
                })
                .finally(() => {
                    setLoading(false)
                });
            if (result == "auth/email-already-in-use") {

            }
        }
        setLoading(false)
    }

    function writeUserData(userId, name, email, imageUrl) {
       
        set(ref(database, 'users/' + userId), {
            uid:userId,
            fullname: name,
            email: email,
            profile_picture: imageUrl ?? "",
            phoneNumber : "",
            isLoggedIn:1
        });
    }


    return (
        <div className='w-full '>
            <div className='flex flex-col mt-5 my-2'>
                <label className='w-full text-sm italic'>First name</label>
                <input value={fName} onChange={e => setFname(e.target.value)} type={"text"} placeholder={"Kai"} className={`text-base bg-slate-100  text-gray-800 p-2 rounded-md`} />
            </div>

            <div className='flex flex-col mt-5 my-2'>
                <label className='w-full text-sm italic'>Last name</label>
                <input value={lName} onChange={e => setLname(e.target.value)} type={"text"} placeholder={"Duong"} className={`text-base bg-slate-100  text-gray-800 p-2 rounded-md`} />
            </div>
            <div className='flex flex-col mt-5 my-2'>
                <label className='w-full text-sm italic'>Username / Email</label>
                <input value={username} onChange={e => setUsername(e.target.value)} type={"email"} placeholder={"someone@gmail.com "} className={`text-base bg-slate-100  text-gray-800 p-2 rounded-md`} />
            </div>
            <div className='flex flex-col mt-5'>
                <label className='w-full text-sm italic '>Password</label>
                <input value={password} onChange={e => setPassword(e.target.value)} type={"password"} placeholder={"***"} className={`text-base bg-slate-100  text-gray-800 p-2 rounded-md`} />
            </div>
            <TheButton isLoading={isLoading} onclick={() => { signUpNewUser(username, password) }} title={"Go"} style={`bg-emerald-500 text-white font-bold p-3 my-5 text-center rounded-md hover:bg-emerald-800 transition-all`} />
        </div>
    )
}

export default Register