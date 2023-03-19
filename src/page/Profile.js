import React, { useEffect, useState } from 'react'
import { getAuth, signOut } from "firebase/auth";
import { ACCESS_TOKEN, DISPLAYNAME, ISLOGIN, TOKEN_MNG, UID, USERDATA } from '../data/constants';
import { app } from '../config/firebase';
import { updateLoginState } from '../store/action';
import TheButton from '../components/TheButton';
import { getDatabase, ref, update, onValue, get, child } from "firebase/database";

import { useStore } from '../store';

const Profile = () => {
    const db = getDatabase(app);
    const [isLoading, setLoading] = useState(false)
    const [state, dispatch] = useStore()
    const { login_state } = state
    const [uid, setUid] = useState(window.localStorage.getItem(UID) ?? "")
    const [data, setData] = useState(JSON.parse(window.localStorage.getItem(USERDATA)) ?? {})

    const signOutUser = async () => {
        setLoading(true)
        const auth = getAuth(app);

        await signOut(auth).then(() => {
            update(ref(db, 'users/' + uid), { isLoggedIn: 0 });
            setLoading(false)
            dispatch(updateLoginState(false))
        }).catch((error) => {
            // An error happened.
        });
    }

    const loadInfo = (uid) => {
        const dbRef = ref(db);
        get(child(dbRef, `users/${uid}`)).then((snapshot) => {
            if (snapshot.exists()) {
                let user = snapshot.val();
                window.localStorage.setItem(USERDATA, JSON.stringify(user));
                setData(user)
            } else {
                console.log("No data available");
            }
        }).catch((error) => {
            console.error(error);
        });
    }

    useEffect(() => {
        loadInfo(uid)
    }, [login_state])

    return (
        <div>
            <p className='w-full'>{data.fullname}</p>
            <TheButton isLoading={isLoading} onclick={() => signOutUser()} title={"Sign out"} style="w-full bg-red shadow rounded-md p-3" />
        </div>
    )
}

export default Profile