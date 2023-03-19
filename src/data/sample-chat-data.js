import { UID } from "./constants"

const current = window.localStorage.getItem(UID)
export const data_contact = [
    {   
        fullname:"Kai",
        isLoggedIn:1,
        photoUrl:"https://random.imagecdn.app/200/200",
        last_message:"Hello ! How are you today? I has busy for work so can't reach to you in this week",
        uid:"123"
    },
    {   
        fullname:"Cherry",
        isLoggedIn:0,
        photoUrl:"https://random.imagecdn.app/250/200",
        last_message:"Well, do you have it?",
        uid:"213"
    },
    {   
        fullname:"Duong Tai",
        isLoggedIn:1,
        photoUrl:"https://random.imagecdn.app/300/200",
        last_message:"Good morning !!!",
        uid:"321"
    },
    {   
        fullname:"Harry",
        isLoggedIn:1,
        photoUrl:"https://random.imagecdn.app/100/200",
        last_message:"Are you there ?",
        uid:"3211"
    },
    {   
        fullname:"Rose",
        isLoggedIn:0,
        photoUrl:"https://random.imagecdn.app/100/250",
        last_message:"Hi. I hope you doing well",
        uid:"1199"
    },
    
]


export const data_message = [
    
    {
        sender: current,
        receiver :"1199",
        msg : "Heiii"
    },
    {
        sender: "1199",
        receiver :current,
        msg : "How are you ?"
    },
    {
        sender: current,
        receiver :"1199",
        msg : "I'm fine"
    },
    {
        sender: "1199",
        receiver :current,
        msg : "Sure"
    },
    {
        sender: current,
        receiver :"1199",
        msg : "When we can meet ?"
    },
    {
        sender: "1199",
        receiver :current,
        msg : "I don't know. Maybe tonight?"
    },
    {
        sender: current,
        receiver :"1199",
        msg : "Perfect"
    },
    {
        sender: current,
        receiver :"3211",
        msg : "Morning, Harry"
    },
    {
        sender: "3211",
        receiver :current,
        msg : "Hi. How can I help you?"
    },
    {
        sender: current,
        receiver :"3211",
        msg : "Nothing, just test"
    },
]